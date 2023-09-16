import React from "react";
import ChatHeader from "./ChatHeader";

const Chat = () => {
  return (
    <div className="bg-gray-700 grow h-screen">
      {/* chatHeader */}
      <ChatHeader />

      {/* chatMessage */}
      <div></div>

      {/* chatInput */}
      <div></div>
    </div>
  );
};

export default Chat;
