/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/react';
import mq from '../styles/breakpoint';
import { colors } from '../styles/colors';

export const About: React.FC = () => {
  return (
    <section
      css={css`
        padding-bottom: 5em;

        ${mq} {
          & > div:nth-of-type(2) {
            width: 90%;
          }
        }
      `}
    >
      <div
        css={css`
          width: 100%;
          height: 0.1em;
          background: ${colors.fg1};
          margin-top: 2em;
          border-radius: 8px;
        `}
      ></div>
      <div
        css={css`
          text-align: left;
          width: 70%;
          margin: 0 auto;
          margin-top: 2em;

          p {
            font-weight: 300;
          }
        `}
      >
        <p>
          Created for learning purposes! 📚
          <br />A platform to freely share your thoughts while staying
          anonymous! 🕵️‍♂️{' '}
        </p>
        <br />
        <p>
          Technologies used: TypeScript, React.js, MongoDB, Express.js, Node.js,
          Emotion.sh, & many more! 💅
        </p>
      </div>
    </section>
  );
};
