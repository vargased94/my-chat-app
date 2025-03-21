import { ChatMessages } from "./ChatMessages";
import { ChatInput } from "./ChatInput";

const Chat = () => {
  return (
    <div className="flex flex-col h-screen">
      <ChatMessages />
      <ChatInput />
    </div>
  );
};

export default Chat;
