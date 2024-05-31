"use server"

import amqp from "amqplib/callback_api";
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/auth-options"

const postMessageToTaskQueue = async (task: string, token: string |  undefined, payload: any = null) => {

    let data, error = null;

    try {
        if (!task || !token) {

            throw new Error("No token passed")
        }

        amqp.connect('amqp://user:password@message', function(error0, connection) {
        if (error0) {
            throw error0;
        }

        connection.createChannel(function(error1, channel) {
            if (error1) {
                throw error1;
            }

            var queue = 'task_queue';
            var msg = JSON.stringify({
                'task': task, payload, token});

            channel.assertQueue(queue, {
                durable: true
            });

            channel.sendToQueue(queue, Buffer.from(msg));
            console.info(" [x] Sent %s", msg);
            data = {status: "ok"}
        });
    });

    } catch (err: any) {
        console.error('[ERROR!] postMessageToQueue', task, err.message)
        error = err;
    } finally {
        return {data, error};
    }
}



export const handleUpdateClasses = async () => {
    console.info("Updating Classes");
    const session = await getServerSession(authOptions)
    //console.log(session && session.accessToken?.substring(0, 10))
    postMessageToTaskQueue("update-classes", session?.accessToken);
}

export const handleUpdateUsers = async () => {
//    console.log("Updating Users");
    const session = await getServerSession(authOptions)
//    console.log(session && session.accessToken?.substring(0, 10))
    postMessageToTaskQueue("update-users", session?.accessToken);
}

export const handleUpdateAssignments = async () => {
 //   console.log("Updating Users");
    const session = await getServerSession(authOptions)
 //   console.log(session && session.accessToken?.substring(0, 10))
    postMessageToTaskQueue("update-assignments", session?.accessToken);
}

export const handleUpdateAssignmentsByClassTag = async (formData: FormData) => {
   //  console.log("Updating Assignments for ", formData.get("classTag"));

    const session = await getServerSession(authOptions)
   // console.log(session && session.accessToken?.substring(0, 10))
    postMessageToTaskQueue("update-assignments-class-tag", session?.accessToken, {classTag: formData.get("classTag")});
}

export const handleUpdateOutcomesByAssignmentID = async (formData: FormData) => {
    // console.log("Updating Outcomes for assignment", formData.get("assignment_id"));

    const session = await getServerSession(authOptions)
    // console.log(session && session.accessToken?.substring(0, 10))
    postMessageToTaskQueue("update-outcomes-assignment-id", session?.accessToken, {assignment_id: formData.get("assignment_id")});
}

export const handleUpdateOutcomesByClassTag = async (formData: FormData) => {
    // console.log("Updating Outcomes for ", JSON.stringify(formData));

    const session = await getServerSession(authOptions)
    // console.log(session && session.accessToken?.substring(0, 10))
    postMessageToTaskQueue("update-outcomes-class-tag", session?.accessToken, {classTag: formData.get("classTag")});

}

export const handleUpdateOutcomes = async () => {
    // console.log("Updating Users");
    const session = await getServerSession(authOptions)
    // console.log(session && session.accessToken?.substring(0, 10))
    postMessageToTaskQueue("update-outcomes", session?.accessToken);
}

