import React from "react";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import ChatMessageList from "./ChatMessageList";
import { useEffect, useState } from "react";
import { useChannel } from "../context/ChannelContext";
import {
  Timestamp,
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "@/firebase";

export interface Message {
  timestamp: Timestamp;
  message: string;
  user: {
    uid: string;
    photo: string;
    email: string;
    displayName: string;
  };
}

const Chat = () => {
  const channel = useChannel();
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    console.log(channel);
    let collectionRef = collection(
      db,
      "channels",
      String(channel.id),
      "messages"
    );

    const collectionRefOrderBy = query(
      collectionRef,
      orderBy("timestamp", "desc")
    );

    onSnapshot(collectionRefOrderBy, (snapshot) => {
      let results: Message[] = [];
      snapshot.docs.forEach((doc) => {
        results.push({
          timestamp: doc.data().timestamp,
          message: doc.data().message,
          user: doc.data().user,
        });
      });
      setMessages(results);
      console.log(results);
    });
  }, [channel]);

  return (
    <div className="bg-gray-700 w-full flex flex-col flex-grow-1 h-screen">
      {/* chatHeader */}
      <ChatHeader />

      {/* chatMessageList */}
      <ChatMessageList messages={messages} />

      {/* chatInput */}
      <ChatInput />
    </div>
  );
};

export default Chat;
