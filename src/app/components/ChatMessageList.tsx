import React from "react";
import ChatMessage from "./ChatMessage";

const ChatMessageList = () => {
  return (
    <div className="pt-5 space-y-5">
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
    </div>
  );
};

export default ChatMessageList;
