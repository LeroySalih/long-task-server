import amqp from "amqplib";
import chalk from "chalk";
import {colors} from "./console-colours.js";

export const logMsg = async (msg) => {

    let data, error

    console.log("****")
    console.log(colors.bg.blue, "logMsg logging message:", colors.reset, msg);

    try {
         
        const connection =await amqp.connect('amqp://user:password@message');
        console.log(colors.bg.blue, "logMsg connected", colors.reset, msg);
        
        const channel = await connection.createChannel();
        console.log(colors.bg.blue, "channel connected", colors.reset, msg);

        var queue = 'log-queue';

        await channel.assertQueue(queue, {
            durable: true
        });

        const msgText = JSON.stringify(msg)
        channel.sendToQueue(queue, Buffer.from(msgText));
        console.log(colors.bg.blue, "message sent", colors.reset, msgText);

    } catch (err) {
        console.error(colors.bg.red, '[logMsg::Error]', colors.bg.reset, err.message)
        error = err;
    } finally {
        return {data, error};
    }
}

