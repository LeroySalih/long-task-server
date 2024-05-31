
import PageTitle from "@/components/page-title";
import CheckClasses from "@/components/planning/check-classes";

import {DateTime} from "luxon";

import pg from "pg";
import { ClassesPM,  DeptClassAssignmentCounts } from "@/types/planning";
import { startOfWeekLocal } from "./date-lib";
import { dbConnection }from "@/components/database/connection";

/*
const dbConnection = {
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    host: process.env.POSTGRES_HOST
};
*/

const { Client, Pool } = pg
const pool = new Pool(dbConnection);





export const getAssigmentsBetween = async (start: DateTime<boolean>, end: DateTime<boolean>) => {

    let data, error;

    try {
        const q = `select class_id, class_display_name, jsonb_agg( json_build_object( 'assignment', assignment, 'outcomes', outcomes )) as assignments
        from (
        select class_id,  class_display_name, 
                json_build_object('assignment_id', assignment_id, 'display_name', display_name, 'due_date_time', due_date_time) as "assignment", 
                json_agg( jsonb_build_object('points', points, 'givenname', given_name, 'surname', surname)) as "outcomes"
        from vw_denormalised
        where due_date_time > $1 and due_date_time < $2
        group by class_id,  assignment_id, class_display_name, display_name, due_date_time
        order by class_display_name, display_name, due_date_time desc
        )
        group by class_id,  class_display_name
       order by class_display_name;
;
                    `
        const result = await pool.query(q, [start, end]);

        data = result.rows as ClassesPM;

    } catch (err) {
        console.error(err);
        error = err
    } finally {
        return {data, error};
    }
}



// return the number of assignments found for each 
// class in the dept_classes table
export const getDeptClassAssignmentCounts = async (): Promise<{data:DeptClassAssignmentCounts | null,error:any}> => {

    let data: DeptClassAssignmentCounts | null = null
    let error;

    try {

    const q = `select dc.display_name, dc.teacher, ac.count 
    from dept_classes dc
    left join (
    
        SELECT c.display_name, count(*) 
        FROM assignments a
        left join classes c 
        on a.class_id = c.id
        group by c.display_name 
    
    ) ac on dc.display_name = ac.display_name
    order by dc.teacher, dc.display_name;`;

    const result = await pool.query(q);

        data = result.rows as DeptClassAssignmentCounts;

    } catch (err) {
        console.error(err);
        error = err
    } finally {
        return {data, error};
    }

}
