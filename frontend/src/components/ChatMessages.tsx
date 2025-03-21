import { useEffect, useState, useRef } from "react";
import socket from "@/socket";

export const ChatMessages = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    socket.on("chat message", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.off("chat message");
    };
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="h-64 overflow-y-auto p-4 bg-gray-100 rounded-lg mb-4">
      {messages.map((msg, idx) => (
        <div key={idx} className="p-2 my-1 rounded bg-blue-100">
          {msg}
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};
