"use client";

import { useContext, createContext, useState } from "react";

export const ChannelContext = createContext();
export const ChannelUpdateContext = createContext();

export const ChannelContextProvider = ({ children }) => {
  const [channel, setChannel] = useState({ id: null, name: null });

  return (
    <ChannelContext.Provider value={channel}>
      <ChannelUpdateContext.Provider value={setChannel}>
        {children}
      </ChannelUpdateContext.Provider>
    </ChannelContext.Provider>
  );
};

export const useChannel = () => useContext(ChannelContext);
export const useUpdateChannel = () => useContext(ChannelUpdateContext);
