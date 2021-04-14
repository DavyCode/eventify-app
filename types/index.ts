export type Data = {
  name: string
}

export type Event = {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  image: string;
  isFeatured: boolean;
}

export type Notification = {
  title: string;
  message: string;
  status: string;
}

export type User = {
  email: string;
  password: string;
  _id: string
}

export type Comment = {
  _id: string;
  name: string;
  text: string;
}

export type CommentData = {
  email: string;
  name: string;
  text: string;
}