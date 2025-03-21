import { cn } from "@/lib/utils";
import { useState } from "react";
import socket from "@/socket";
import { Button } from "@/components/ui/button";

export const ChatInput = () => {
  const [message, setMessage] = useState("");

  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (message.trim()) {
      socket.emit("chat message", message);
      setMessage("");
    }
  };

  return (
    <form onSubmit={sendMessage} className="flex items-center">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className={cn(
          "flex-grow p-2 border border-gray-300 rounded-l-lg",
          "focus:outline-none focus:ring-2 focus:ring-indigo-500",
          "dark:bg-gray-800 dark:text-white dark:border-gray-700"
        )}
        placeholder="Escribe tu mensaje..."
      />
      <Button type="submit" className="rounded-r-lg">
        Enviar
      </Button>
    </form>
  );
};
