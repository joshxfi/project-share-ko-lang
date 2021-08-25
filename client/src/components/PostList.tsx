/** @jsx jsx */
/** @jsxFrag */
import React from 'react';
import mq from '../styles/breakpoint';
import { css, jsx } from '@emotion/react';
import { motion } from 'framer-motion';
import { Post } from '../components/Post';
import { useProps } from '../context/PostsContext';
import { Spinner } from './Spinner';

export const PostList: React.FC = () => {
  const { posts, updateLikes, loading } = useProps();

  return (
    <>
      {loading && (
        <div
          css={css`
            margin-top: 5em;
          `}
        >
          <Spinner />
        </div>
      )}
    <motion.main
      initial='hidden'
      animate='visible'
      css={css`
        margin-top: 5rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5em;
        height: auto;

        ${mq} {
          grid-template-columns: 1fr;
        }
      `}
    >
      {posts
        .slice(0)
        .reverse()
        .map((post, id) => (
          <Post post={post} key={id} updateLikes={updateLikes} />
        ))}
    </motion.main>
    </>
  );
};
