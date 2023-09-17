import React from "react";
import ChatMessage from "./ChatMessage";
import { Message } from "@/types";

interface ChatMessageListProps {
  provider: Message[];
}

const ChatMessageList = ({ provider }: ChatMessageListProps) => {
  return (
    <div className="pt-5 space-y-5">
      {
        /* chatMessage */
        provider && provider.map((message) => <ChatMessage message={message} />)
      }
    </div>
  );
};

export default ChatMessageList;
