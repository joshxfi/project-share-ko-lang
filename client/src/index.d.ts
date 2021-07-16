export interface PostSchema {
  _id: string;
  username: string;
  userPost: string;
  likes: number;
  date: Date | string;
}
