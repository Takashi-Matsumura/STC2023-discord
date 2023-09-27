import React from "react";
import ChatMessage from "./ChatMessage";
import { Message } from "./Chat";

type Props = {
  messages: Message[];
};

const ChatMessageList = ({ messages }: Props) => {
  return (
    <div className="pt-5 space-y-5">
      {messages.map((message) => (
        <ChatMessage
          key={message.user.uid}
          message={message.message}
          timestamp={message.timestamp}
          user={message.user}
        />
      ))}
    </div>
  );
};

export default ChatMessageList;
