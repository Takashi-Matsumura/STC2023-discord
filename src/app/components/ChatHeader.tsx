import React, { useState } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PushPinIcon from "@mui/icons-material/PushPin";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import HelpIcon from "@mui/icons-material/Help";
import SearchIcon from "@mui/icons-material/Search";
import { useChannel } from "../context/ChannelContext";

const ChatHeader = () => {
  const [searchText, setSearchText] = useState<string>("");

  const channel = useChannel();
  //console.log(channel);

  return (
    <div className="flex justify-between items-center pt-2">
      <div className="pl-3">
        <h3 className="text-white">
          <span className="text-gray-400 pr-3">#</span>
          {channel.name}
        </h3>
      </div>

      <div className="pr-3 flex items-center space-x-3 text-gray-400">
        <NotificationsIcon className="cursor-pointer" />
        <PushPinIcon className="cursor-pointer" />
        <PeopleAltIcon className="cursor-pointer" />
        <div className="bg-gray-900 rounded-md pl-3">
          <input
            type="text"
            placeholder="検索"
            className="bg-transparent outline-none text-white"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearchText(e.target.value)
            }
          />
          <SearchIcon />
        </div>
        <HelpIcon className="cursor-pointer" />
      </div>
    </div>
  );
};

export default ChatHeader;
