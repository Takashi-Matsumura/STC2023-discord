import React from "react";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import ChatMessageList from "./ChatMessageList";
import { Message } from "@/types";
import { getAllMessages } from "@/api";

const Chat = () => {
  //const messages = await getAllMessages();

  return (
    <div className="bg-gray-700 w-full relative h-screen">
      {/* chatHeader */}
      <ChatHeader />

      {/* chatMessageList */}
      <ChatMessageList provider={null} />

      {/* chatInput */}
      <ChatInput />
    </div>
  );
};

export default Chat;
