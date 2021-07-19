export interface PostSchema {
  _id: string;
  username: string;
  userPost: string;
  likes: number;
  date: Date | string;
}

export interface InputProps {
  title: string;
  postMsg: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setPostMsg: React.Dispatch<React.SetStateAction<string>>;
  submitPost: (e: React.FormEvent<HTMLFormElement>) => void;
  submitting: boolean;
  sentMsg: boolean;
}

export interface MenuProps {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface NavProps {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setOnShare: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface PostProps {
  post: PostSchema;
  updateLikes: (id: string) => void;
}

export interface PostListProps {
  posts: PostSchema[];
  updateLikes: (id: string) => void;
}
