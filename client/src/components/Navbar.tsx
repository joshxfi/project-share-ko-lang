/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/react';
import { RiSpyFill } from 'react-icons/ri';
import { colors } from '../Styles';

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
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

          svg {
            color: ${colors.fg};
            margin-left: 0.5em;
          }
        }

        ul {
          padding: 0;
          list-style: none;
          display: flex;
          font-weight: 500;

          li:not(:last-of-type) {
            margin-right: 3em;
          }

          li {
            font-weight: 300;
          }
        }
      `}
    >
      <div>
        P-SKL <RiSpyFill />
      </div>
      <ul>
        <li>about</li>
        <li>portfolio</li>
        <li>github</li>
      </ul>
    </nav>
  );
};
