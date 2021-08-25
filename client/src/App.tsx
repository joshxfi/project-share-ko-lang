/** @jsx jsx */
import React, { useState } from 'react';
import { css, jsx } from '@emotion/react';
import { colors } from './styles/colors';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { FaShare } from 'react-icons/fa';
import { Navbar } from './components/Navbar';
import { Input } from './components/Input';
import { PostList } from './components/PostList';
import { Menu } from './components/Menu';
import { Spinner } from './components/Spinner';
import { About } from './components/About';
import { GlobalStyle } from './styles/GlobalStyle';
import { loading, PostsProvider } from './context/PostsContext';

const App: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [onShare, setOnShare] = useState<boolean>(false);

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
        <Navbar
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          setOnShare={setOnShare}
        />
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
            <Link to='/share'>
              <h1 onClick={() => setOnShare(true)}>
                Share Anything <FaShare />
              </h1>
            </Link>
            {!onShare ? (
              <Link to='/share' onClick={() => setOnShare(true)}>
                want to share someting?
              </Link>
            ) : (
              <Link to='/' onClick={() => setOnShare(false)}>
                go back to posts?
              </Link>
            )}
            {loading && (
              <div
                css={css`
                  margin-top: 5em;
                `}
              >
                <Spinner />
              </div>
            )}
          </div>

          <Switch>
            <PostsProvider>
              <Route exact path='/'>
                <div
                  css={css`
                    height: auto;
                    padding-bottom: 10vh;
                    filter: ${showMenu ? 'blur(4px)' : 'none'};
                  `}
                >
                  <PostList />
                </div>
              </Route>

              <Route path='/share'>
                <div style={{ filter: showMenu ? 'blur(4px)' : 'none' }}>
                  <Input />
                </div>
              </Route>
            </PostsProvider>

            <Route path='/about'>
              <div style={{ filter: showMenu ? 'blur(4px)' : 'none' }}>
                <About />
              </div>
            </Route>
          </Switch>
        </div>
      </div>
      <GlobalStyle />
    </Router>
  );
};

export default App;
