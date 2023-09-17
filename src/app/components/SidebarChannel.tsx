import { Channel } from "@/types";
import React from "react";

interface SidebarChannelProps {
  channel: Channel;
}

const SidebarChannel = ({ channel }: SidebarChannelProps) => {
  return (
    <div className="pr-5">
      <h4 className="text-gray-400 flex px-2 py-1 items-center cursor-pointer hover:text-white hover:bg-gray-900 hover:rounded-full">
        <span className="text-lg pr-2">#</span>
        {channel.name}
      </h4>
    </div>
  );
};

export default SidebarChannel;
