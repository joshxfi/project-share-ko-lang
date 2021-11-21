/** @jsx jsx */
import React, { useState } from 'react';
import { css, jsx } from '@emotion/react';
import { colors } from './styles/colors';
import { BrowserRouter as Router } from 'react-router-dom';
import { FaShare } from 'react-icons/fa';
import { Navbar } from './components/Navbar';
import { Menu } from './components/Menu';
import { GlobalStyle } from './styles/GlobalStyle';

const App: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <Router>
      <div
        css={css`
          margin: 0;
          padding: 0;
          width: 80%;
          height: 100vh;
          margin: 0 auto;
          text-align: center;
        `}
      >
        <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />
        <Menu setShowMenu={setShowMenu} showMenu={showMenu} />
        <div
          onClick={() => setShowMenu(false)}
          css={css`
            margin-top: 10rem;

            a {
              color: ${colors.fg1};
              font-weight: 300;
              margin-top: 0.5em;
              cursor: pointer;
            }

            a > h1 {
              color: ${colors.fg};
            }

            svg {
              color: ${colors.fg1};
            }
          `}
        >
          <div style={{ filter: showMenu ? 'blur(4px)' : 'none' }}>
            <h1
              css={css`
                color: lime;
              `}
            >
              Thanks for Visiting!
            </h1>
            <p>this project is no longer maintained 😭</p>
          </div>
        </div>
      </div>
      <GlobalStyle />
    </Router>
  );
};

export default App;
