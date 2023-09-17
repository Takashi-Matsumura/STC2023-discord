export interface Message {
  id: string;
  user: string;
  date: string;
  channelid: string;
  message: string;
}

export interface Channel {
  id: string;
  name: string;
}
