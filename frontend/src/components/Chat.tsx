// import { ChatMessages } from "./ChatMessages";
// import { ChatInput } from "./ChatInput";
import MyMessage from "./MyMessage";
import Message from "./Message";

const Chat = () => {
  return (
    <div className="flex justify-center">
      {/* <ChatMessages /> */}
      <div className="bg-gray-50 p-2 rounded-md w-[50vw]">
        <MyMessage />
        <Message />
        <MyMessage />
        <Message />
      </div>
      {/* <ChatInput /> */}
    </div>
  );
};

export default Chat;
