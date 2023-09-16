import React from "react";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";

const Chat = () => {
  return (
    <div className="bg-gray-700 grow h-screen">
      {/* chatHeader */}
      <ChatHeader />

      {/* chatMessage */}
      <div></div>

      {/* chatInput */}
      <ChatInput />
    </div>
  );
};

export default Chat;
