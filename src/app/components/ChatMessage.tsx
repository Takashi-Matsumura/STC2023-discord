import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Timestamp } from "firebase/firestore";

type Props = {
  timestamp: Timestamp;
  message: string;
  user: {
    uid: string;
    photo: string;
    email: string;
    displayName: string;
  };
};

const ChatMessage = (props: Props) => {
  const { message, timestamp, user } = props;
  const formattedTimestamp = timestamp?.toDate().toLocaleString();

  return (
    <div className="flex items-center p-2 mb-3 text-white">
      <AccountCircleIcon className="text-5xl mr-3 text-gray-400" />
      <div>
        <h4>
          {user?.displayName}
          <span className="ml-3 text-gray-400">{formattedTimestamp}</span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
