/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/react';
import { colors } from '../Styles';

interface InputProps {}

export const Input: React.FC<InputProps> = ({}) => {
  return (
    <form
      spellCheck="false"
      css={css`
        display: flex;
        flex-direction: column;
        width: 40%;
        margin: 0 auto;

        input,
        textarea {
          outline: none;
          border: none;
          padding: 1em;
          background: #f9f9f9;
          border-bottom: 3px solid ${colors.fg1};
          color: ${colors.fg};
          font-size: 1em;
          border-radius: 8px;
        }

        input {
          margin: 30px 0 10px 0;
        }

        textarea {
          resize: none;
          height: 14em;
          margin-bottom: 25px;
        }

        button {
          outline: none;
          border: none;
          font-size: 1em;
          background: ${colors.fg1};
          color: #f9f9f9;
          padding: 0.5em;
          width: 150px;
          margin: 0 auto;
          border-radius: 16px;
          cursor: pointer;
          border-bottom: 3px solid ${colors.fg};
          transition: 0.3s ease;

          &:hover {
            transform: translateY(-3px);
          }
        }

        div {
          background: #fff;
        }
      `}
    >
      <input type="text" placeholder="title" />
      <textarea placeholder="share a thought!"></textarea>
      <button type="button">share post</button>
    </form>
  );
};
