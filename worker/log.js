import amqp from "amqplib";
import chalk from "chalk";
import {colors} from "./console-colours.js";

export const logMsg = async (pool, type, msg) => {

    let data, error

    console.log("****")
    console.log(colors.bg.blue, "logMsg logging message:", colors.reset, msg);

    try {
         
        const q = `insert into logs (app, status, msg) values ($1, $2, $3)`;

        const result = await pool.query(q, ["worker", type, msg]);

    } catch (err) {
        console.error(colors.bg.red, '[logMsg::Error]', colors.bg.reset, err.message)
        error = err;
    } finally {
        return {data, error};
    }
}

