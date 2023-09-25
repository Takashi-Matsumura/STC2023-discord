import React from "react";
import ChatMessage from "./ChatMessage";

// interface ChatMessageListProps {
//   provider: Message[];
// }

const ChatMessageList = () => {
  return (
    <div className="pt-5 space-y-5">
      {
        /* chatMessage */
        //provider && provider.map((message) => <ChatMessage message={message} />)
      }
      <ChatMessage />
    </div>
  );
};

export default ChatMessageList;
