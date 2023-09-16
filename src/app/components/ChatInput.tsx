import React from "react";
import AddCircle from "@mui/icons-material/AddCircle";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import GifBoxIcon from "@mui/icons-material/GifBox";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

const ChatInput = () => {
  return (
    <div className="flex items-center justify-between px-4 bg-gray-800 rounded-md m-5 text-white">
      <div className="flex items-center">
        <AddCircle />
        <form>
          <input
            type="text"
            placeholder="#Udemyへメッセージを送信"
            className="p-3 bg-transparent outline-none text-white text-lg"
          />
          <button type="submit" className="hidden">
            送信
          </button>
        </form>
      </div>

      <div className="space-x-4">
        <CardGiftcardIcon />
        <GifBoxIcon />
        <EmojiEmotionsIcon />
      </div>
    </div>
  );
};

export default ChatInput;
