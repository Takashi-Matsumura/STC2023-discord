import React from "react";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import ChatMessageList from "./ChatMessageList";

const Chat = () => {
  return (
    <div className="bg-gray-700 w-full relative h-screen">
      {/* chatHeader */}
      <ChatHeader />

      {/* chatMessageList */}
      <ChatMessageList />

      {/* chatInput */}
      <ChatInput />
    </div>
  );
};

export default Chat;
