"use client"
// components/SseClient.js
import { useEffect, useState } from 'react';
import { checkLog, CheckLog} from "@/lib/logger";
import { DateTime } from "luxon";

const LogListener = () => {
  const [messages, setMessages] = useState<CheckLog[] | undefined>(undefined);
  const [lastUpdate, setLastUpdate] = useState<string | null>(DateTime.now().toISO());
  const [error, setError] = useState<string | null>(null);

  const checkLogOnSvr = async () => {
    const {data, error} = await checkLog(DateTime.now().minus({days: 1}).toISO());
    
    if (error || !data) {
      setError(error);
      setLastUpdate(data ? data?.created_at : null);
      return; 
    }

    console.log(data)
    setMessages(data?.logs)
    setLastUpdate(data?.created_at);


  }

  useEffect(() => {
    
    const interval = setInterval(checkLogOnSvr, 1000);

    return () => {clearInterval(interval); }
    
  }, []);

  return (
    <div>
      <div>Logs</div>
      <div className="text-xs">{lastUpdate}</div>
      <ul>
        <div>{messages && messages.length > 0 && messages[0].msg}</div>
        <div>{messages && messages.length > 0 && messages[0].created_at && DateTime.fromISO(messages[0].created_at).toISO()?.substring(0, 10)}</div>
      </ul>
    </div>
  );
};

export default LogListener;

