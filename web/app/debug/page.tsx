import { dbConnection }from "@/components/database/connection";
import pg from "pg";



const Page = async () => {
    const { Client, Pool } = pg
    const pool = new Pool(dbConnection);

    const keys = Object.keys(process.env).sort((a, b) => a > b ? 1 : -1)

    const q = `select * from classes;`;
    let message = ''
    let result;

    try{
        result = await pool.query(q);
    } catch(err ) {

        if (err instanceof Error){
            console.error(err);
            message = err.message
        }

    } 
    
    
    

    return <>
        <h1>Debug</h1>
        <pre>{message}</pre>
        <pre>{JSON.stringify(dbConnection, null, 2)}</pre>
        <pre>{result && JSON.stringify(result.rows, null, 2)}</pre>
        <div>
            {keys.map((k, i) => (<div key={i}>{k}: {process.env[k]}</div>))}
        </div>
    </>
}


export default Page;