/** @jsx jsx */
import React, { useState } from 'react';
import { css, jsx } from '@emotion/react';
import { RiSpyFill } from 'react-icons/ri';
import { colors } from '../Styles';
import { FaBars } from 'react-icons/fa';
import { Menu } from './Menu';

interface NavProps {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Navbar: React.FC<NavProps> = ({ showMenu, setShowMenu }) => {
  return (
    <nav
      css={css`
        height: 4rem;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        div:first-of-type {
          font-weight: 500;
          display: flex;
          align-items: center;
          color: ${colors.fg1};
          font-size: 1.2em;

          svg {
            color: ${colors.fg};
            margin-left: 0.5em;
          }
        }

        .ul {
          padding: 0;
          list-style: none;
          display: flex;
          font-weight: 500;
          font-size: 1em;

          li:not(:last-of-type) {
            margin-right: 3em;
          }

          li {
            font-weight: 300;
          }
        }

        .menu {
          display: none;
          font-size: 1.3em;
          z-index: 10;
        }

        @media screen and (max-width: 768px) {
          .menu {
            display: block;
          }

          .ul {
            display: none;
          }
        }
      `}
    >
      <div>
        P-SKL <RiSpyFill />
      </div>
      <ul className="ul">
        <li>about</li>
        <li>portfolio</li>
        <li>github</li>
      </ul>
      <FaBars className="menu" onClick={() => setShowMenu(!showMenu)} />
      <Menu setShowMenu={setShowMenu} showMenu={showMenu} />
    </nav>
  );
};
