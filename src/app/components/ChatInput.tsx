import React, { useState } from "react";
import AddCircle from "@mui/icons-material/AddCircle";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import GifBoxIcon from "@mui/icons-material/GifBox";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import {
  CollectionReference,
  DocumentData,
  DocumentReference,
  Timestamp,
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "@/firebase";
import { useChannel } from "../context/ChannelContext";
import { UserAuth } from "../context/AuthContext";

const ChatInput = () => {
  const [inputText, setInputText] = useState<string>("");

  const channel = useChannel();
  const { user } = UserAuth();

  const sendMessage = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    //channelsコレクションの中にあるmessagesコレクションの中にメッセージ情報を追加する
    const collectionRef: CollectionReference<DocumentData> = collection(
      db,
      "channels",
      String(channel.id),
      "messages"
    );

    const docRef: DocumentReference<DocumentData> = await addDoc(
      collectionRef,
      {
        message: inputText,
        timestamp: serverTimestamp(),
        user: {
          displayName: user.displayName,
          email: user.email,
          photo: user.photoURL,
          uid: user.uid,
        },
      }
    );
    setInputText("");
  };

  return (
    <div className="mb-2 mx-4">
      <div className="flex items-center m-2 px-4 bg-gray-600 rounded-md text-gray-400">
        <div className="flex items-center w-full">
          <AddCircle className="cursor-pointer" />
          <form className="w-full">
            <input
              type="text"
              placeholder="#Udemyへメッセージを送信"
              className="p-3 bg-transparent outline-none text-white text-lg w-full"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setInputText(e.target.value)
              }
              value={inputText}
            />
            <button
              type="submit"
              className="hidden"
              onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
                sendMessage(e)
              }
            >
              送信
            </button>
          </form>
        </div>

        <div className="space-x-4 items-center flex">
          <CardGiftcardIcon className="cursor-pointer" />
          <GifBoxIcon className="cursor-pointer" />
          <EmojiEmotionsIcon className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
