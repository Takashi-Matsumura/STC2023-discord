import React, { useState } from "react";
import AddCircle from "@mui/icons-material/AddCircle";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import GifBoxIcon from "@mui/icons-material/GifBox";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { Timestamp, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebase";

const ChatInput = () => {
  const [inputText, setInputText] = useState<string>("");

  const sendMessage = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    //channelsコレクションの中にあるmessagesコレクションの中にメッセージ情報を追加する
    //const collectionRef: CollectionReference<DocumentData> = collection(db, "channels", String(channelId), "messages");

    // const docRef: DocumentReference<CodumentData> =  await addDoc(collectionRef, {
    //   message: inputText,
    //   Timestamp: serverTimestamp(),
    //   user: user,
    // });
    // console.log(docRef);
  };

  return (
    <div className="absolute bottom-0 w-full mb-2">
      <div className="flex items-center justify-between m-2 px-4 bg-gray-600 rounded-md text-gray-400">
        <div className="flex items-center">
          <AddCircle className="cursor-pointer" />
          <form>
            <input
              type="text"
              placeholder="#Udemyへメッセージを送信"
              className="p-3 bg-transparent outline-none text-white text-lg"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setInputText(e.target.value)
              }
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

        <div className="space-x-4">
          <CardGiftcardIcon className="cursor-pointer" />
          <GifBoxIcon className="cursor-pointer" />
          <EmojiEmotionsIcon className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
