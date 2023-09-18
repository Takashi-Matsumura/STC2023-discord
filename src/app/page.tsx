"use client";

import Chat from "./components/Chat";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import { UserAuth } from "./context/AuthContext";

export default function Home() {
  const { user } = UserAuth();

  return (
    <div>
      {user ? (
        <div className="flex">
          <Sidebar />
          <Chat />
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}
