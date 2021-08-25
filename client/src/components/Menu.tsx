/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/react';
import { colors } from '../styles/colors';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

export const Menu: React.FC<MenuProps> = ({ showMenu, setShowMenu }) => {
  return (
    <div
      css={css`
        transition: 0.3s ease;
        height: 100vh;
        width: 30%;
        position: fixed;
        display: grid;
        place-items: center;
        z-index: 9;
        top: 0;
      `}
      style={{ right: showMenu ? 0 : '-30%' }}
    >
      <ul
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-evenly;
          height: 70%;
          padding: 0;
          font-size: 15px;
          color: #fff;

          li {
            border-bottom: 2px solid ${colors.fg1};
          }

          li > svg {
            color: #fff;
            font-size: 22px;
            cursor: pointer;
          }
        `}
      >
        <li>
          <Link to='/about'>about</Link>
        </li>
        <li>
          <a href='https://joshxfi.pages.dev' rel='author' target='_blank'>
            portfolio
          </a>
        </li>
        <li>
          <a href='https://github.com/joshxfi' rel='author' target='_blank'>
            github
          </a>
        </li>
        <li>
          <BsArrowRight onClick={() => setShowMenu(!showMenu)} />
        </li>
      </ul>
    </div>
  );
};
