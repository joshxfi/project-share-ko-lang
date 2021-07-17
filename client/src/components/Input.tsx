/** @jsx jsx */
/** @jsxFrag */
import React, { useState } from 'react';
import { css, jsx } from '@emotion/react';
import { colors } from '../Styles';
import { Spinner } from './Spinner';

interface InputProps {
  title: string;
  postMsg: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setPostMsg: React.Dispatch<React.SetStateAction<string>>;
  submitPost: (e: React.FormEvent<HTMLFormElement>) => void;
  submitting: boolean;
}

export const Input: React.FC<InputProps> = (props) => {
  const maxChar = props.postMsg.length;

  return (
    <form
      onSubmit={(e) => props.submitPost(e)}
      spellCheck="false"
      css={css`
        display: flex;
        flex-direction: column;
        width: 40%;
        margin: 0 auto;
        margin-top: 3em;

        input,
        textarea {
          outline: none;
          border: none;
          padding: 1em;
          background: ${colors.bg1};
          color: ${colors.fg};
          font-size: 1em;
          border-radius: 8px;
          border-left: 2px solid ${colors.fg1};
          border-right: 2px solid ${colors.fg1};

          ::placeholder {
            color: #e0e0e0;
            font-weight: 300;
          }
        }

        input {
          margin-bottom: 10px;
          font-weight: 400;
          color: ${colors.fg1};
        }

        textarea {
          resize: none;
          height: 14em;
          font-weight: 300;
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
          border-bottom: 2px solid ${colors.fg1};

          &:hover {
            transform: translateY(-3px);
          }
        }

        a {
          font-size: 1.5em;
          position: relative;
          margin-bottom: 1.5em;

          svg {
            fill: ${colors.fg1};
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
      <input
        maxLength={50}
        type="text"
        placeholder="title / username"
        onChange={(e) => props.setTitle(e.target.value)}
        value={props.title}
      />
      <textarea
        placeholder="share a thought!"
        maxLength={400}
        onChange={(e) => props.setPostMsg(e.target.value)}
        value={props.postMsg}
      ></textarea>
      <div
        css={css`
          display: flex;
          justify-content: flex-end;
          margin-bottom: 25px;
          margin-top: 10px;
          color: #e0e0e0;
        `}
      >
        <p
          css={css`
            padding-right: 15px;
            font-weight: 400;
          `}
        >
          {maxChar}/400
        </p>
      </div>
      {props.submitting ? (
        <Spinner />
      ) : (
        <button type="submit">share post</button>
      )}
    </form>
  );
};
