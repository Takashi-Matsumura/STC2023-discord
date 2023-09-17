import { Message, Channel } from "@/types";

const baseUrl = "http://localhost:3001";

export const getAllMessages = async (): Promise<Message[]> => {
  const res = await fetch(`${baseUrl}/messages`, { cache: "no-store" }); //getserversideprops
  const messages = await res.json();
  return messages;
};

export const addMessage = async (message: Message): Promise<Message> => {
  const res = await fetch(`${baseUrl}/messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  });
  const newMessage = await res.json();
  return newMessage;
};

export const update = async (
  id: string,
  newMessage: string
): Promise<Message> => {
  const res = await fetch(`${baseUrl}/messages/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: newMessage }),
  });
  const updatedMessage = await res.json();
  return updatedMessage;
};

export const deleteMessage = async (id: string): Promise<Message> => {
  const res = await fetch(`${baseUrl}/messages/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const deleteMessage = await res.json();
  return deleteMessage;
};

export const getAllChannels = async (): Promise<Channel[]> => {
  const res = await fetch(`${baseUrl}/channels`, { cache: "no-store" }); //getserversideprops
  const channels = await res.json();
  return channels;
};
