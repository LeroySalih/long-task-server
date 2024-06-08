import {DateTime} from "luxon";
import {callFullApi} from "./graph-lib.js";

import {getDeptClassesFromDb, getClassesByTagFromDb, getClassesFromDb, getAssignmentsByDueDateFromDb, getAssignmentByDueDateFromDb, getAssignmentsByClassTagFromDb} from "./get-from-db.js";
import {getSubmissionsForAssignmentFromGraph, getOutcomeForSubmissionFromGraph} from "./get-from-graph.js";
import {colors} from "./console-colours.js";
import {logMsg} from "./log.js";

export const doUpdateClasses = async (pool, token) => {

    const {data: deptClasses, error} = await getDeptClassesFromDb(pool);

    await logMsg(pool, "info", "Updating Classes");

    const {data:myClasses, error: myClassesError} = await callFullApi("https://graph.microsoft.com/beta/education/me/classes", token);
    
    const classesStatus = myClasses && myClasses.length ? `Retrieved ${myClasses.length} classes from MS Graph` : 'No classes returned'


    if (!myClasses || myClasses.length === 0){
        await logMsg(pool, "info", "No classes returned, exiting");
        return
    }

    for (const myClass of myClasses){
 
        if ( deptClasses.includes(myClass.displayName)){
            console.info("[Assign class]", myClass.displayName)
            await pool.query(`
            insert into classes (id, display_name, description) 
            values ('${myClass.id}', '${myClass.displayName}', '${myClass.description}')
            ON CONFLICT(id) DO UPDATE SET display_name = '${myClass.displayName}', description='${myClass.description}'
            ;`);
        }
        
    }
    
    console.log(colors.bg.green,('[doUpdateClasses] - Done'), colors.reset)
    await logMsg(pool, "info", "Completed - updating classes");
}

export const doUpdateUsers = async (pool, token) => {

    const {data: deptClasses, error} = await getClassesFromDb(pool);
    logMsg(pool, "info", "Updating Users")

    for (const c of deptClasses){
        console.log(token.substring(0, 10));
        const {data:users, error: usersErrors} = await callFullApi(`https://graph.microsoft.com/beta/education/classes/${c.id}/members`, token);

        //console.log(`Received ${users.length} users`)
        logMsg(pool, "info",  `Updating users for ${c.display_name}`);

        for (const u of users) {

            await pool.query(`
            insert into ms_users (id, given_name, surname) 
            values ('${u.id}', '${u.givenName}', '${u.surname}')
            ON CONFLICT(id) DO NOTHING
            ;`);

        } 
        


    }
    
    logMsg(pool, "info", "Updating Users - done.")
    console.log(colors.bg.green,('[doUpdateUsers] - Done'), colors.reset)
}

export const doUpdateAssignmentsByClassTag = async (pool, classTag, token) => {

    logMsg(pool, "info", `Updating Assigments for ${classTag}`);

    const {data: classes, error} = await getClassesByTagFromDb(pool, classTag, token);
    
    if (error) {
        console.error(error);
        return;
    }

    console.log(`Retrieved ${classes.length} assignments from MS Graph`);

    for (const c of classes){

        console.log(`[doUpdateAssignments] - Processing ${c.display_name}`);

        const {data:graphAssignments, error} = await callFullApi(`https://graph.microsoft.com/beta/education/classes/${c.id}/assignments`, token);

        if (error) {
            console.error(error);
            return; 
        }

        const assignments = graphAssignments.map(a => ({
            id: a.id, 
            class_id: a.classId, 
            display_name: a.displayName,
            due_date_time: a.dueDateTime,
            instructions: a.instructions.content
        }));

        for (const a of assignments) {
        
            let q = ``;

            let client = await pool.connect();

            // '${a.id}', '${a.class_id}', '${a.display_name}', '${a.due_date_time}', '${a.instructions}'
            try {
                q = `
                insert into assignments (id, class_id,  display_name, due_date_time, instructions) 
                values ($1, $2, $3, $4, $5)
                ON CONFLICT(id) DO UPDATE SET 
                    class_id = $2, 
                    display_name= $3,
                    due_date_time= $4,
                    instructions= $5
                ;`
                
                //console.log("Query is ***")
                //console.log(q);
                const values = [a.id, a.class_id, a.display_name, a.due_date_time, a.instructions]
                await client.query(q,values );
                console.log( "Assignment written", a.display_name);

            } catch (err) { 
                console.log(colors.bg.red, ("[doUpdateAssignments]::Error"), err.message, colors.reset);
                console.log(colors.bg.red, ("[doUpdateAssignments]::Error"), q, colors.reset);

            } finally {
                client.release();
            }
            

        }

        
        
        
    }
    
    logMsg(pool, "info", `Updating Assigments for ${classTag} - done`);
    console.log(colors.bg.green,`[doUpdateAssignmentsByClassTag] ${classTag} - Done`, colors.reset);
    // console.log(myClasses);
}



export const doUpdateAssignments = async (pool, token) => {

    logMsg(pool, "info", `Updating All Assigments`);

    const {data: classes, error} = await getClassesFromDb(pool);
    
    console.log(`Retrieved ${classes.length} assignments from MS Graph`);

    for (const c of classes){

        logMsg(pool, "info", `Updating assigments for ${c.display_name}`);
        console.log(`[doUpdateAssignments] - Processing ${c.display_name}`);

        const {data:graphAssignments, error} = await callFullApi(`https://graph.microsoft.com/beta/education/classes/${c.id}/assignments`, token);

        if (error) {
            console.error(error);
            return; 
        }

        const assignments = graphAssignments.map(a => ({
            id: a.id, 
            class_id: a.classId, 
            display_name: a.displayName,
            due_date_time: a.dueDateTime,
            instructions: a.instructions.content
        }));

        for (const a of assignments) {
        
            let q = ``;

            let client = await pool.connect();

            // '${a.id}', '${a.class_id}', '${a.display_name}', '${a.due_date_time}', '${a.instructions}'
            try {
                q = `
                insert into assignments (id, class_id,  display_name, due_date_time, instructions) 
                values ($1, $2, $3, $4, $5)
                ON CONFLICT(id) DO UPDATE SET 
                    class_id = $2, 
                    display_name= $3,
                    due_date_time= $4,
                    instructions= $5
                ;`
                
                //console.log("Query is ***")
                //console.log(q);
                const values = [a.id, a.class_id, a.display_name, a.due_date_time, a.instructions]
                await client.query(q,values );
                console.log( colors.bg.green, ("Assignment written"), colors.reset);

            } catch (err) { 
                console.log(colors.bg.red, ("[doUpdateAssignments]::Error"), err.message, colors.reset);
                console.log(colors.bg.red, ("[doUpdateAssignments]::Error"), q, colors.reset);

            } finally {
                client.release();
            }
            

        }

        
        
        
    }
    
    logMsg(pool, "info", `Updating All Assigments - Done`);
    console.log(colors.bg.green,'[doUpdateAssignments] - Done', colors.reset);
    // console.log(myClasses);
}

export const doUpdateOutcomes = async (pool, token) => {
 
    // const {data: classes, error} = await getAssignments(pool);
    logMsg(pool, "info", `Updating marking for all assignments`);

    const startOfWeek = DateTime.now().startOf('week').minus({days: 1})
    const updatePeriod = startOfWeek.minus({'weeks': 4});

    console.info("Updating Outcomes since", updatePeriod.toISO());

    const {data: assignments, error} = await getAssignmentsByDueDateFromDb(pool, updatePeriod);

    console.info(`Received ${assignments.length} assignments`, assignments[0]);

    for (const assignment of assignments) {

        // get the submissions for this assignment
        const {data: submissions, error} = await getSubmissionsForAssignmentFromGraph(assignment, token);

        console.log(colors.bg.red,`Received ${submissions.length} submissions for assignment ${assignment.id}`, colors.reset);
        
        for (const submission of submissions) {
//            console.log(submission.id)
            console.log(colors.bg.blue, "submission", submission, colors.reset);
            const {data: outcome, error} = await getOutcomeForSubmissionFromGraph(submission, token)
            

            let client = await pool.connect();
            try {

                const q = `INSERT INTO outcomes (class_id, assignment_id, submission_id, user_id, points)
                values ($1, $2, $3, $4, $5)
                ON CONFLICT (class_id, assignment_id, submission_id, user_id) DO UPDATE SET
                points = $5;
            `;
                const values = [
                    outcome.class_id, 
                    outcome.assignment_id, 
                    outcome.submission_id, 
                    outcome.user_id,
                    outcome.points
                ];

                // console.log(colors.bg.blue, values, colors.reset);

                await client.query(q, values);
                logMsg(pool, "info", `Marking updated for ${outcome.assignment_id}`);
                console.log( colors.bg.green, (`Outcome written to ${outcome.assignment_id}`), colors.reset);
            } catch(err) {
                console.error(err.message);

            } finally{
                client.release();
            }
            
        }
    }
    logMsg(pool, "info", `Updating marking for all assignments - done`);
    console.log(colors.bg.green,'[doUpdateOutcomes] - Done', colors.reset);
}


export const doUpdateOutcomesByAssignmentId = async (pool, assignment_id, token) => {
     
    const startOfWeek = DateTime.now().startOf('week').minus({days: 1})
    const updatePeriod = startOfWeek.minus({'weeks': 4});

    console.info(`Updating Outcomes for ${assignment_id} since`, updatePeriod.toISO());

    const {data: assignments, error} = await getAssignmentByDueDateFromDb(pool, assignment_id, updatePeriod);

    console.info(`Received ${assignments.length} assignments`, assignments[0]);

    for (const assignment of assignments) { 

        // get the submissions for this assignment
        const {data: submissions, error} = await getSubmissionsForAssignmentFromGraph(assignment, token);

        console.log(colors.bg.red,`Received ${submissions.length} submissions for assignment ${assignment.id}`, colors.reset);
        
        for (const submission of submissions) {
//            console.log(submission.id)
            console.log(colors.bg.blue, "submission", submission, colors.reset);
            const {data: outcome, error} = await getOutcomeForSubmissionFromGraph(submission, token)
            

            let client = await pool.connect();
            try {

                const q = `INSERT INTO outcomes (class_id, assignment_id, submission_id, user_id, points)
                values ($1, $2, $3, $4, $5)
                ON CONFLICT (class_id, assignment_id, submission_id, user_id) DO UPDATE SET
                points = $5;
            `;
                const values = [
                    outcome.class_id, 
                    outcome.assignment_id, 
                    outcome.submission_id, 
                    outcome.user_id,
                    outcome.points
                ];

                // console.log(colors.bg.blue, values, colors.reset);

                await client.query(q, values);
                console.log( colors.bg.green, (`Outcome written to ${outcome.assignment_id}`), colors.reset);
            } catch(err) {
                console.error(err.message);

            } finally{
                client.release();
            }
            
        }
    }
    console.log(colors.bg.green,'[doUpdateOutcomesByAssignmentId] - Done', colors.reset);
}


export const doUpdateOutcomesByClassTag = async (pool, classTag, token) => {

    console.log("doUpdateOutcomesByClassTag", classTag)
    const {data, error} = await getAssignmentsByClassTagFromDb(pool, classTag);

    if (error ){
        console.log(colors.bg.red, "[doUpdateOutcomesByClassTag]" ,colors.reset, error && error.message);
        return; 
    }

    if (data === undefined ) {
        console.log(colors.bg.red, "[doUpdateOutcomesByClassTag] data is undefined" ,colors.reset);
        return;  
    }

    console.log("Assignments", data.length)

    for (const assignment of data) {
        doUpdateOutcomesByAssignmentId(pool, assignment.id, token);
    } 

    console.log(colors.bg.green,"[doUpdateOutcomesByClassTag] - update completed", colors.reset)

    
}