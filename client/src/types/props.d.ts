interface InputProps {
  title: string;
  postMsg: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setPostMsg: React.Dispatch<React.SetStateAction<string>>;
  submitPost: (e: React.FormEvent<HTMLFormElement>) => void;
  submitting: boolean;
  sentMsg: boolean;
}

interface MenuProps {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

interface NavProps extends MenuProps {
  setOnShare: React.Dispatch<React.SetStateAction<boolean>>;
}

interface PostProps {
  post: PostSchema;
  updateLikes: (id: string) => void;
}

interface PostListProps {
  posts: PostSchema[];
  updateLikes: (id: string) => void;
}
