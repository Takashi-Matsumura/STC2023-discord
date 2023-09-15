import React from "react";
import ServerIcon from "./ServerIcon";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import SidebarChannel from "./SidebarChannel";
import { ImageResponse } from "next/dist/compiled/@vercel/og";
import Image from "next/image";
import MicIcon from "@mui/icons-material/Mic";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import SettingsIcon from "@mui/icons-material/Settings";

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

          <div className="absolute bottom-0 flex pt-3 items-center pb-3 border-t border-gray-400 w-max space-x-7">
            <div className="flex items-center justify-between">
              <Image
                src="/halloween.png"
                alt=""
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="ml-2 font-light">
                <h4 className="text-sm">MatsBACCANO</h4>
                <span className="text-xs">#1234</span>
              </div>
            </div>
            <div className="flex items-center text-gray-400">
              <MicIcon />
              <HeadphonesIcon />
              <SettingsIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
