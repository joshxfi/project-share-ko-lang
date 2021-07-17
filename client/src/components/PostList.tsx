/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/react';
import { PostSchema } from '../index';
import { Post } from '../components/Post';

interface PostListProps {
  posts: PostSchema[];
  setLikes: React.Dispatch<React.SetStateAction<number>>;
  updateLikes: (id: string) => void;
}

export const PostList: React.FC<PostListProps> = ({
  posts,
  setLikes,
  updateLikes,
}) => {
  return (
    <main
      css={css`
        margin-top: 5rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5em;
      `}
    >
      {posts
        .slice(0)
        .reverse()
        .map((post, id) => (
          <Post
            post={post}
            key={id}
            setLikes={setLikes}
            updateLikes={updateLikes}
          />
        ))}
    </main>
  );
};
