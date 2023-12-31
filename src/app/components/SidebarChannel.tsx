import { DocumentData } from "firebase/firestore";
import { useChannel, useUpdateChannel } from "../context/ChannelContext";
import { useEffect } from "react";

type Props = {
  id: string;
  channel: DocumentData;
};

const SidebarChannel = (props: Props) => {
  const { id, channel } = props;

  const _channel = useChannel();
  useEffect(() => {
    if (_channel.id === null && _channel.name === null) {
      setChannel({ id: id, name: channel.channel.channelName });
    }
  }, []);

  const setChannel = useUpdateChannel();
  const changeChannel = () => {
    setChannel({ id: id, name: channel.channel.channelName });
  };

  return (
    <div className="pr-5" onClick={changeChannel}>
      <h4 className="text-gray-400 flex px-2 py-1 items-center cursor-pointer hover:text-white hover:bg-gray-900 hover:rounded-full">
        <span className="text-lg pr-2">#</span>
        {channel.channel.channelName}
      </h4>
    </div>
  );
};

export default SidebarChannel;
