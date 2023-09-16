import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PushPinIcon from "@mui/icons-material/PushPin";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import HelpIcon from "@mui/icons-material/Help";
import SearchIcon from "@mui/icons-material/Search";

const ChatHeader = () => {
  return (
    <div className="flex justify-between items-center pt-2">
      <div>
        <h3>
          <span>#</span>
          Udemy
        </h3>
      </div>

      <div>
        <NotificationsIcon />
        <PushPinIcon />
        <PeopleAltIcon />
        <div>
          <input type="text" placeholder="検索" />
          <SearchIcon />
        </div>
        <HelpIcon />
      </div>
    </div>
  );
};

export default ChatHeader;
