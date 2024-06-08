"use server"

import pg from "pg";
import { dbConnection }from "@/components/database/connection";
import { DateTime} from "luxon";

const { Client, Pool } = pg
const pool = new Pool(dbConnection);

export type LogReturnType = {
    data: string,
    error: string
}

export type CheckLog = {
    created_at:string,
    app: string, 
    status: string, 
    msg: string 
}

export type CheckLogData = {
    created_at: string,
    logs: CheckLog[]
}

export type CheckLogType = {
    data: CheckLogData | null,
    error: string | null,
}

export const log = async (app: string, status: string, msg: string) : Promise<CheckLogType> => {

    const q = `insert into logs (app, status, msg) values ($1, $2, $3)`;
    let data: CheckLogData | null = null; 
    let error = "";

    try {
        const result = await pool.query(q, [app, status, msg]);

        data = {
            created_at: DateTime.now().toISO(),
            logs: result.rows
        };



        // data = result.rows as ClassesPM;
    } catch (err) {

        data = null;

        if (err instanceof Error){
            error = err.message;
            console.log(err.message);
        }

        
        
    }
    finally {
        return {data, error}
    }

}

export const checkLog = async (dts : string) : Promise<CheckLogType> => {
    let dt = DateTime.fromISO(dts);
    let data = null;
    let error = null;

    try {

        const q = `SELECT created_at, app, status, msg 
                   FROM logs
                   WHERE created_at >= $1
                   ORDER BY created_at desc
                   LIMIT 1
                   `

        const result = await pool.query(q, [dt.toISO()]);

        if (!result || !result.rows) {
            throw new Error("no rows returned")
        }

        data = {
            created_at: DateTime.now().toISO(),
            logs: result.rows as CheckLog[]
        };

    } catch (err) {
        
        err = "";
        
        if (err instanceof Error) {
            error = err.message;
        }

    } finally {
        return {data, error}
    }
} 