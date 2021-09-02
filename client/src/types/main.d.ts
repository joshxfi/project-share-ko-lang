interface ImportMetaEnv {
  VITE_VERCEL_MONGODB_URL: string;
}

interface PostSchema {
  _id: string;
  username: string;
  userPost: string;
  likes: number;
  date: Date | string;
}

interface Value {
  posts: PostSchema[];
  title: string;
  postMsg: string;
  submitting: boolean;
  sentMsg: boolean;
  loading: boolean;
  setPosts: React.Dispatch<React.SetStateAction<PostSchema[]>>;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setPostMsg: React.Dispatch<React.SetStateAction<string>>;
  setSubmitting: React.Dispatch<React.SetStateAction<boolean>>;
  setSentMsg: React.Dispatch<React.SetStateAction<boolean>>;
  updateLikes: (id: string) => void;
  submitPost: (e: React.FormEvent<HTMLFormElement>) => void;
}
