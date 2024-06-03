// app/api/sse/route.js

/* page sends out server side events */

export const dynamic = "force-dynamic";

import { NextResponse } from 'next/server';
import amqp from 'amqplib';

export async function GET() {
  const headers = new Headers();
  headers.append('Content-Type', 'text/event-stream');
  headers.append('Cache-Control', 'no-cache');
  headers.append('Connection', 'keep-alive');
  headers.append('X-Accel-Buffering', 'no');

  const body = new ReadableStream({
    async start(controller) {
      
      const url = `amqp://${process.env.RABBITMQ_DEFAULT_USER}:${process.env.RABBITMQ_DEFAULT_PASS}@${process.env.RABBITMQ_DEFAULT_HOST}`
      console.log("Connecting to ", url);
      //'amqp://user:password@message'
      const connection = await amqp.connect(url);
      const channel = await connection.createChannel();
      const queue = 'log-queue';

      await channel.assertQueue(queue, { durable: true });

      const sendMessage = (message) => {
        controller.enqueue(`data: ${JSON.stringify(message)}\n\n`);
      };

      channel.consume(queue, (msg) => {
        if (msg !== null) {
          const messageContent = msg.content.toString();
          sendMessage({ message: messageContent });
          channel.ack(msg);
        }
      });

      // Handle connection close
      controller.close = () => {
        channel.close();
        connection.close();
      };
    },
  });

  return new NextResponse(body, { headers });
}
