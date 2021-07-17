/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/react';
import { colors } from '../Styles';
import { BsArrowRight } from 'react-icons/bs';

interface MenuProps {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

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
        <li>about</li>
        <li>portfolio</li>
        <li>github</li>
        <li>
          <BsArrowRight onClick={() => setShowMenu(!showMenu)} />
        </li>
      </ul>
    </div>
  );
};
