import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const ChatMessage = () => {
  return (
    <div className="flex items-center p-2 mb-3 text-white">
      <AccountCircleIcon className="text-5xl mr-3 text-gray-400" />
      <div>
        <h4>
          MatsBACCANO
          <span className="ml-3 text-gray-400">2023/09/17</span>
        </h4>
        <p>メッセージ本文</p>
      </div>
    </div>
  );
};

export default ChatMessage;
