//import dotenv from 'dotenv'
//dotenv.config();

const dbConnection = {
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    host: process.env.POSTGRES_HOST
};
 
import pg from "pg"
import chalk from 'chalk'; 

import ampq from "amqplib"


import {parseMsg} from "./parse-msg.js";


const colors = {
    reset: "\x1b[0m",
    bright: "\x1b[1m",
    dim: "\x1b[2m",
    underscore: "\x1b[4m",
    blink: "\x1b[5m",
    reverse: "\x1b[7m",
    hidden: "\x1b[8m",
  
    fg: {
      black: "\x1b[30m",
      red: "\x1b[31m",
      green: "\x1b[32m",
      yellow: "\x1b[33m",
      blue: "\x1b[34m",
      magenta: "\x1b[35m",
      cyan: "\x1b[36m",
      white: "\x1b[37m",
      crimson: "\x1b[38m" // RGB color
    },
    bg: {
      black: "\x1b[40m",
      red: "\x1b[41m",
      green: "\x1b[42m",
      yellow: "\x1b[43m",
      blue: "\x1b[44m",
      magenta: "\x1b[45m",
      cyan: "\x1b[46m",
      white: "\x1b[47m",
      crimson: "\x1b[48m" // RGB color
    }
  };
  


 









    


let connection;
let pool;
try{

    // connect to Database
    console.log(colors.bg.green, "[*] Connecting to DB", colors.reset)
    

    const { Client, Pool } = pg
    pool = new Pool(dbConnection);
    
    
    // connect to Message Queue
    console.log(colors.bg.blue, "[*] Connecting to message queue", colors.reset);

    connection = await ampq.connect('amqp://user:password@message');
    const channel = await connection.createChannel();
    const queue = "task_queue"
    await channel.assertQueue(queue, {durable: true});

    channel.prefetch(1);
    // console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);

    await channel.consume(queue, function(msg) {
        
        // console.log(msg.content);
     
        console.log(" [x] Received %s", msg.content.toString());

        parseMsg(pool, JSON.parse(msg.content));

        

        console.log(colors.bg.green, "Message Parsed", colors.reset);

        channel.ack(msg);

    }, { 

        noAck: false
    });


} catch(error) {
    console.log("Error", error)
} finally {
    if (pool && pool.end){
    //    console.log("Closing Pool")
    //    pool.end();  
    }
}
 