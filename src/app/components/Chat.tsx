import React from "react";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import { useEffect, useState } from "react";
import { useChannel } from "../context/ChannelContext";
import {
  DocumentData,
  QueryDocumentSnapshot,
  Timestamp,
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "@/firebase";
import ChatMessage from "./ChatMessage";

export interface Messages {
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
  const [messages, setMessages] = useState<Messages[]>([]);

  useEffect(() => {
    let collectionRef = collection(
      db,
      "channels",
      String(channel.id),
      "messages"
    );

    let collectionRefOrderBy = query(
      collectionRef,
      orderBy("timestamp", "desc")
    );

    onSnapshot(collectionRefOrderBy, (snapshot) => {
      let results: Messages[] = [];
      snapshot.docs.forEach((doc: QueryDocumentSnapshot<DocumentData>) => {
        results.push({
          timestamp: doc.data().timestamp,
          message: doc.data().message,
          user: doc.data().user,
        });
      });
      setMessages(results);
    });
  }, [channel.id]);

  return (
    <div className="bg-gray-700 w-full flex flex-col flex-grow-1 h-screen">
      {/* chatHeader */}
      <ChatHeader />

      {/* chatMessageList */}
      {/* <ChatMessageList messages={messages} /> */}
      <div className="pt5 space-y-7 h-screen overflow-y-auto">
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            timestamp={message.timestamp}
            user={message.user}
            message={message.message}
          />
        ))}
      </div>

      {/* chatInput */}
      <ChatInput />
    </div>
  );
};

export default Chat;
