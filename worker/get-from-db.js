export const getDeptClassesFromDb = async (pool) => {

    let data = null;
    let error = null;

    try {
        const result = await pool.query(`select display_name from dept_classes;`)
        data = result.rows.map(r => r.display_name);

    } catch(err) {
        console.error(err.message);
        error = err
    } finally {
        return {data, error}
    }
} 


export const getClassesByTagFromDb = async (pool, classTag) => {

    let data = null;
    let error = null;

    try {
        const result = await pool.query(`select id, display_name from classes where display_name=$1;`, [classTag])
        data = result.rows;
    } catch(err) {
        console.error("[getClassesByTagFromDb]::Error", err.message);
        error = err
    } finally {
        return {data, error}
    }
}



export const getClassesFromDb = async (pool) => {

    let data = null;
    let error = null;

    try {
        const result = await pool.query(`select id, display_name from classes;`)
        data = result.rows;

    } catch(err) {
        console.error("[getClasses]::Error", err.message);
        error = err
    } finally {
        return {data, error}
    }
}


export const getAssignmentsByDueDateFromDb = async (pool, dueDate) => {

    let data = null;
    let error = null;

    try {
        const result = await pool.query(`select id, class_id from assignments where due_date_time > $1;`, [dueDate])
        
        data = result.rows;
        // console.log("[getAssignmentsByDueDate::data]", data);

    } catch(err) {
        console.error("[getAssignmentsByDueDate]::Error", err.message);
        error = err
    } finally {
        return {data, error}
    }
}

export const getAssignmentsByClassTagFromDb = async (pool, classTag) => {
 
    let data = null;
    let error = null;

    console.log( "classTag", classTag)
    try {
        const result = await pool.query(`select a.id, a,class_id 
        from assignments a
        left join classes c on a.class_id = c.id
        where c.display_name = $1;`, [classTag])
        
        data = result.rows || []; 
        console.log("getAssignmentsByClassTagFromDb returning", data.length)

    } catch(err) {
        console.error("[getAssignmentsByClassTagFromDb]::Error", err.message);
        error = err
    } finally {
        console.log("[getAssignmentsByClassTagFromDb] returning", data, error)
        return {data, error}
    }
}

export const getAssignmentByDueDateFromDb = async (pool, assignment_id, dueDate) => {

    let data = null;
    let error = null;

    try {
        const result = await pool.query(`select id, class_id from assignments where due_date_time > $1 and id=$2;`, [dueDate, assignment_id])
        
        data = result.rows;
        // console.log("[getAssignmentsByDueDate::data]", data);

    } catch(err) {
        console.error("[getAssignmentByDueDateFromDb]::Error", err.message);
        error = err
    } finally {
        return {data, error}
    }
}