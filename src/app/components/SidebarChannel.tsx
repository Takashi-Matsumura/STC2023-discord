import { DocumentData } from "firebase/firestore";
import React from "react";

type Props = {
  id: string;
  channel: DocumentData;
};

const SidebarChannel = (props: Props) => {
  const { id, channel } = props;

  return (
    <div className="pr-5">
      <h4 className="text-gray-400 flex px-2 py-1 items-center cursor-pointer hover:text-white hover:bg-gray-900 hover:rounded-full">
        <span className="text-lg pr-2">#</span>
        {channel.channel.channelName}
      </h4>
    </div>
  );
};

export default SidebarChannel;
