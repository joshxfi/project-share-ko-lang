/** @jsx jsx */
/** @jsxFrag */
import React, { useState } from 'react';
import { css, jsx } from '@emotion/react';
import { colors } from '../Styles';
import { Link } from 'react-router-dom';
import { IoIosCloseCircleOutline } from 'react-icons/io';

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
          background: ${colors.bg1};
          color: ${colors.fg};
          font-size: 1em;
          border-radius: 8px;
        }

        input {
          margin-bottom: 10px;
          font-weight: 700;

          ::placeholder {
            font-weight: 400;
          }
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
          background: ${colors.bg1};
          color: #fff;
          padding: 0.5em;
          width: 150px;
          margin: 0 auto;
          border-radius: 16px;
          cursor: pointer;
          transition: 0.3s ease;

          &:hover {
            transform: translateY(-3px);
          }
        }

        a {
          font-size: 2em;
          position: relative;
          margin-bottom: 1.5em;

          svg {
            fill: ${colors.fg};
            position: absolute;
            right: 0;
            cursor: pointer;
            transition: 0.3s ease;

            &:hover {
              transform: translateY(-3px);
            }
          }
        }
      `}
    >
      <Link to="/">
        <IoIosCloseCircleOutline />
      </Link>
      <input type="text" placeholder="title" />
      <textarea placeholder="share a thought!"></textarea>
      <button type="button">share post</button>
    </form>
  );
};
