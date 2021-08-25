/** @jsx jsx */
import React from 'react';
import mq from '../styles/breakpoint';
import { css, jsx } from '@emotion/react';
import { motion } from 'framer-motion';
import { Post } from '../components/Post';

export const PostList: React.FC = () => {
  return (
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
  );
};
