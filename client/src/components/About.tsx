/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/react';
import { colors } from '../Styles';

export const About: React.FC = () => {
  return (
    <section>
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
          This platform can also be used to vent or rant about someone or
          something! 💢
          <br /> You can also share quotes, messages, basically anything that
          you could think of! 🙌
        </p>
        <br />
        <p>
          <i>
            “Wisdom is not a product of schooling but of the lifelong attempt to
            acquire it.”
          </i>{' '}
          – Albert Einstein ✨ <br />
          Technologies used: TypeScript, React.js, MongoDB, Express.js, Node.js,
          Emotion.sh, & many more! 💅
        </p>
        <br />
        <div>
          <i>[ What's new in Project Share Ko Lang 2.0? ]</i>
          <ul>
            <li>👉 Better UI & New Color Theme!</li>
            <li>👉 Better UX!</li>
            <li>👉 Better Performance!</li>
            <li>👉 Added Upvoting Feature!</li>
            <li>👉 90% Faster in Retrieving Data!</li>
            <li>👉 Built with TSX (previously w/ JSX)</li>
            <li>👉 Built with Emotion.sh (previously w/ SCSS)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
