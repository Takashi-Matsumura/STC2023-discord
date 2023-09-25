import React, { useEffect, useState } from "react";
import ServerIcon from "./ServerIcon";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import Image from "next/image";
import SettingsIcon from "@mui/icons-material/Settings";
import CancelIcon from "@mui/icons-material/Cancel";
import { UserAuth } from "../context/AuthContext";
import { db } from "../../firebase";
import SidebarChannel from "./SidebarChannel";
import useCollection from "@/hooks/useCollection";
import { addDoc, collection } from "firebase/firestore";

const Sidebar = () => {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  const { documents: channels } = useCollection("channels");

  const addChannel = async () => {
    let channelName: string | null = prompt("新しいチャンネルを作成します");

    if (channelName) {
      await addDoc(collection(db, "channels"), {
        channelName: channelName,
      });
    }
  };

  return (
    <div className="flex h-screen">
      {/* sidebarLeft */}
      <div className="items-center bg-gray-900 px-2 py-2 space-y-3">
        <ServerIcon src="/discordIcon.png" />
        <ServerIcon />
      </div>

      {/* sidebarRight */}
      <div className="bg-gray-800 w-72 relative">
        <div className="text-white flex w-full items-center p-5 justify-between border-b border-black">
          <h3>Discord</h3>
          <ExpandMoreIcon />
        </div>

        {/* sidebarChannels */}
        <div className=" text-white pt-5">
          <div className="flex justify-between">
            <div className="flex">
              <ExpandMoreIcon />
              <h4>プログラミングチャンネル</h4>
            </div>
            <AddIcon
              className="mr-5 cursor-pointer"
              onClick={() => addChannel()}
            />
          </div>

          <div className="pl-5 mt-2">
            {/* sidebarChannel */}
            {channels.map((channel) => (
              <SidebarChannel
                channel={channel}
                id={channel.id}
                key={channel.id}
              />
            ))}
            {/* // channels &&
              //   channels.map((channel) => <SidebarChannel channel={channel} /> */}
          </div>

          <div className="absolute bottom-0 flex px-3 py-4 w-full items-center bg-gray-900 justify-between">
            <div className="flex items-center justify-between">
              <Image
                src="/halloween.png"
                alt=""
                width={30}
                height={30}
                className="rounded-full"
              />
              <div className="ml-2 font-light">
                <h4 className="text-sm -mb-2">{user.displayName}</h4>
                <span className="text-xs">{user.email}</span>
              </div>
            </div>
            <div className="flex items-center text-gray-400 space-x-2">
              <CancelIcon onClick={handleSignOut} className="cursor-pointer" />
              <SettingsIcon className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
