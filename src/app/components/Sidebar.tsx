import React from "react";
import ServerIcon from "./ServerIcon";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import SidebarChannel from "./SidebarChannel";

const Sidebar = () => {
  return (
    <div className="flex flex-grow-35 bg-gray-700 h-screen">
      {/* sidebarLeft */}
      <div className="items-center bg-gray-900 px-2 py-2 space-y-3">
        <ServerIcon />
        <ServerIcon />
      </div>

      {/* sidebarRight */}
      <div className="bg-gray-800">
        <div className="text-white flex items-center p-5 w-72 justify-between">
          <h3>Discord</h3>
          <ExpandMoreIcon />
        </div>

        {/* sidebarChannels */}
        <div className="p-5 text-white">
          <div className="flex justify-between">
            <div className="flex">
              <ExpandMoreIcon />
              <h4>プログラミングチャンネル</h4>
            </div>
            <AddIcon className="cursor-pointer" />
          </div>

          <div className="pl-5 mt-2">
            <SidebarChannel />
            <SidebarChannel />
            <SidebarChannel />
            <SidebarChannel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
