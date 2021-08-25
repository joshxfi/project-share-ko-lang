/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/react';
import { motion } from 'framer-motion';
import { colors } from '../styles/colors';
import { ImArrowUp } from 'react-icons/im';

export const Post: React.FC<PostProps> = ({ post, updateLikes }) => {
  const container = {
    hidden: { y: 500, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1 },
    },
  };

  return (
    <motion.div
      variants={container}
      initial='hidden'
      animate='visible'
      css={css`
        display: grid;
        background: ${colors.bg1};
        padding: 2em;
        grid-template-columns: 1fr;
        text-align: left;
        border-left: 3px solid ${colors.fg1};
        border-radius: 8px;
        position: relative;

        h3,
        div > p {
          color: ${colors.fg1};
        }

        .post {
          margin: 0.5em 0;
          font-size: 0.9em;
          word-break: break-word;
        }
      `}
    >
      <h3>{post.username}</h3>
      <p className='post'>{post.userPost}</p>

      <div
        css={css`
          display: flex;
          justify-content: space-between;
          position: absolute;
          bottom: 0;
          width: 100%;
          padding: 0 33px;
          padding-bottom: 10px;
        `}
      >
        <p
          css={css`
            font-size: 0.8em;
          `}
        >
          {post.date}
        </p>
        <div
          css={css`
            display: flex;
            justify-content: flex-end;
            align-items: center;
            font-size: 1em;

            svg {
              margin-left: 5px;
              transition: 0.3s;
              font-size: 0.8em;

              &:hover {
                color: ${colors.fg1};
                transform: translateY(-3px);
              }
            }

            p:first-of-type {
              color: ${colors.fg1};
            }
          `}
        >
          <p>{post.likes}</p>

          <ImArrowUp
            onClick={() => updateLikes(post._id)}
            css={css`
              cursor: pointer;
            `}
          />
        </div>
      </div>
    </motion.div>
  );
};
