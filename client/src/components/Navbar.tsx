/** @jsx jsx */
import React, { useState } from 'react';
import { css, jsx } from '@emotion/react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { RiSpyFill } from 'react-icons/ri';
import { colors } from '../Styles';
import { FaBars } from 'react-icons/fa';
import { NavProps } from '..';

export const Navbar: React.FC<NavProps> = ({
  showMenu,
  setShowMenu,
  setOnShare,
}) => {
  const [showNav, setShowNav] = useState<boolean>(true);

  let yBefore = window.pageYOffset;
  window.onscroll = function () {
    let yNow = window.pageYOffset;
    if (yBefore > yNow) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
    yBefore = yNow;
  };

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -100 },
  };

  return (
    <motion.nav
      variants={variants}
      initial={{ y: -100 }}
      animate={showNav ? 'visible' : 'hidden'}
      transition={{ duration: 0.6 }}
      css={css`
        height: 4rem;
        width: 80%;
        top: 0px;
        padding: 30px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: fixed;
        z-index: 20;
        background: ${colors.bg};

        .logo {
          font-weight: 500;
          font-size: 1.2em;
          color: ${colors.fg1};
          display: flex;
          align-items: center;

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

            & > a {
              transition: 0.3s;

              &:hover {
                color: ${colors.fg1};
              }
            }
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
      <Link className="logo" to="/" onClick={() => setOnShare(false)}>
        P-SKL <RiSpyFill />
      </Link>
      <ul className="ul">
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <a href="https://joshxfi.pages.dev" rel="noreferrer" target="_blank">
            portfolio
          </a>
        </li>
        <li>
          <a href="https://github.com/joshxfi" rel="noreferrer" target="_blank">
            github
          </a>
        </li>
      </ul>
      <FaBars className="menu" onClick={() => setShowMenu(!showMenu)} />
    </motion.nav>
  );
};
