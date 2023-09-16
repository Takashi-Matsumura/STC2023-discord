import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <div className="flex">
      {/* sidebar */}
      <Sidebar />

      {/* chat */}
      <Chat />
    </div>
  );
}
