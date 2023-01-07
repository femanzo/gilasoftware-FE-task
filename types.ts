export type User = {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  createdAt: string;
  updatedAt: string;
  subscribed: Category[];
  channels: Channel[];
};

export type Category = {
  id: number;
  name: string;
};

export type Channel = {
  id: number;
  name: string;
};

export type Notification = {
  message: string;
  categories: Category[];
  logs: Log[];
  createdAt: string;
  updatedAt: string;
};

export type Log = {
  id: number;
  status: string;
  error: string | null;
  channelName: string;
  user: User;
  createdAt: string;
  updatedAt: string;
};
