"use client"
// components/SseClient.js
import { useEffect, useState } from 'react';

const LogListener = () => {
  const [messages, setMessages] = useState<{message: string}[]>([]);

  useEffect(() => {
    const eventSource = new EventSource('/api/sse');

    eventSource.onmessage = (event) => {
      const newMessage = JSON.parse(event.data);
   //   console.log("Received", newMessage.message);
      setMessages((prevMessages) => [newMessage, ...prevMessages]);
    };

    eventSource.onerror = (err) => {
      console.error('EventSource failed:', err);
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <div>
      <h1>Server-Sent Events</h1>
      <ul>
        {messages && messages.length > 0 && messages[0].message}
      </ul>
    </div>
  );
};

export default LogListener;

