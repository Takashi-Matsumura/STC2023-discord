import React from "react";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import ChatMessageList from "./ChatMessageList";
import { Message } from "@/types";

interface ChatProps {
  messages: Message[];
}

const Chat = ({ messages }: ChatProps) => {
  return (
    <div className="bg-gray-700 w-full relative h-screen">
      {/* chatHeader */}
      <ChatHeader />

      {/* chatMessageList */}
      <ChatMessageList provider={messages} />

      {/* chatInput */}
      <ChatInput />
    </div>
  );
};

export default Chat;
