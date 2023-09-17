import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";
import { getAllMessages, getAllChannels } from "@/api";

export default async function Home() {
  const messages = await getAllMessages();
  const channels = await getAllChannels();
  //console.log(messages);
  //console.log(channels);

  return (
    <div className="flex">
      {/* sidebar */}
      <Sidebar channels={channels} />

      {/* chat */}
      <Chat messages={messages} />
    </div>
  );
}
