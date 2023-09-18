"use client";

import Image from "next/image";
import React from "react";
import { Button } from "@mui/material";
import { UserAuth } from "../context/AuthContext";

const Login = () => {
  const { googleSignIn } = UserAuth();

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen space-y-5">
      <div>
        <Image src="/discordIcon.png" alt="" width={200} height={200} />
      </div>

      <Button
        onClick={handleSignIn}
        className="bg-indigo-400 text-white px-6 py-3 text-xl hover:bg-black hover:text-indigo-400"
      >
        ログイン
      </Button>
    </div>
  );
};

export default Login;
