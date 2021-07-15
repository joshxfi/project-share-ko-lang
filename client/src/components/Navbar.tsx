/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/react';

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <nav
      css={css`
        height: 100px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        div:first-child {
          padding-left: 5em;
          font-weight: 700;
        }

        ul {
          padding: 0;
          list-style: none;
          display: flex;
          padding-right: 5em;
          font-weight: 500;

          li:not(:last-child) {
            margin-right: 3em;
          }
        }
      `}
    >
      <div>P-SKL🕵️‍♂️</div>
      <ul>
        <li>about</li>
        <li>portfolio</li>
        <li>github</li>
      </ul>
    </nav>
  );
};
