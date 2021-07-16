/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import { css, jsx, Global } from '@emotion/react';
import { colors } from './Styles';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';
import { PostSchema } from './index';
import { FaShare } from 'react-icons/fa';
import { Navbar } from './components/Navbar';
import { Input } from './components/Input';
import { PostList } from './components/PostList';

const App: React.FC = () => {
  const [posts, setPosts] = useState<PostSchema[]>([]);

  const getPosts = () => {
    axios
      .get('http://localhost:8080/api/posts')
      .then((res) => {
        const data = res.data;
        setPosts(data);
        console.log('status 200 for GET request');
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => getPosts(), []);

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
        <Navbar />

        <Switch>
          <Route exact path="/">
            <div
              css={css`
                margin-top: 3rem;

                a {
                  color: ${colors.fg1};
                  font-weight: 300;
                  margin-top: 0.5em;
                  cursor: pointer;
                }

                svg {
                  color: ${colors.fg1};
                }
              `}
            >
              <h1>
                Share Anything <FaShare />
              </h1>
              <Link to="/share">want to share someting?</Link>
            </div>
            <div
              css={css`
                height: calc(100% + 10vh);
              `}
            >
              <PostList posts={posts} />
            </div>
          </Route>

          <Route path="/share">
            <Input />
          </Route>
        </Switch>

        <Global
          styles={css`
            @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap');

            * {
              box-sizing: border-box;
              font-family: 'Noto Sans JP', sans-serif;
              margin: 0;
              padding: 0;
            }

            a {
              text-decoration: none;
            }

            body {
              color: ${colors.fg};
              background-color: ${colors.bg};
            }

            ::selection {
              background: ${colors.bg1};
              color: ${colors.fg};
            }

            ::-webkit-scrollbar {
              width: 3px;
              height: 10px;
              background: ${colors.bg};
            }

            ::-webkit-scrollbar-track {
              background: ${colors.bg};
            }

            ::-webkit-scrollbar-thumb {
              background: ${colors.fg1};
              border-radius: 8px;
            }
          `}
        />
      </div>
    </Router>
  );
};

export default App;
