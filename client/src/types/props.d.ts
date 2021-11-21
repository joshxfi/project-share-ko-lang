interface MenuProps {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

interface NavProps extends MenuProps {}

interface PostProps {
  post: PostSchema;
  updateLikes: (id: string) => void;
}
