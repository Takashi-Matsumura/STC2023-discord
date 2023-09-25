import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

interface Message {
  id: string;
  user: string;
  date: string;
  channelId: string;
  message: string;
}

interface ChatMessageProps {
  message: Message;
}

const ChatMessage = () => {
  return (
    <div className="flex items-center p-2 mb-3 text-white">
      <AccountCircleIcon className="text-5xl mr-3 text-gray-400" />
      <div>
        <h4>
          {/* {message.user} */}
          user
          <span className="ml-3 text-gray-400">
            {/* {message.date} */} date
          </span>
        </h4>
        <p>{/* {message.message} */} message</p>
      </div>
    </div>
  );
};

export default ChatMessage;
