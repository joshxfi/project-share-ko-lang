/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/react';
import { PostSchema } from '../index';
import { colors } from '../Styles';

interface PostProps {
  post: PostSchema;
  setLikes: React.Dispatch<React.SetStateAction<number>>;
}

export const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <div
      css={css`
        display: grid;
        background: ${colors.bg1};
        padding: 2em;
        grid-template-columns: 1fr 1fr;
        text-align: left;
        border-left: 3px solid ${colors.fg1};
        border-radius: 8px;

        h3,
        p:first-of-type {
          grid-column: 1/3;
        }

        h3,
        p:last-of-type {
          color: ${colors.fg1};
        }

        .post {
          margin: 0.5em 0;
          font-size: 0.9em;
        }
      `}
    >
      <h3>{post.username}</h3>
      <p className="post">{post.userPost}</p>

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
          font-size: 0.8em;

          p:last-of-type {
            position: relative;
            bottom: 2px;
            left: 5px;
          }

          p:first-of-type {
            color: ${colors.fg1};
          }
        `}
      >
        <p>{post.likes}</p>
        <p>👍</p>
      </div>
    </div>
  );
};
