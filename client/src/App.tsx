/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import { css, jsx, Global } from '@emotion/react';
import { colors } from './Styles';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';
import { PostSchema } from '.';
import { FaShare } from 'react-icons/fa';
import { Navbar } from './components/Navbar';
import { Input } from './components/Input';
import { PostList } from './components/PostList';
import { Menu } from './components/Menu';
import { Spinner } from './components/Spinner';

const App: React.FC = () => {
  const [posts, setPosts] = useState<PostSchema[]>([]);
  const [title, setTitle] = useState<string>('');
  const [postMsg, setPostMsg] = useState<string>('');
  const [onShare, setOnShare] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const getPosts = () => {
    axios
      .get('https://pskl-api.herokuapp.com/api/posts')
      .then((res) => {
        setPosts(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const updateLikes = (id: string) => {
    const postToUpdate = posts.find((post) => post._id === id);

    axios
      .patch(`https://pskl-api.herokuapp.com/api/posts/${id}`, {
        likes: postToUpdate === undefined ? 0 : postToUpdate?.likes + 1,
      })
      .then(() => getPosts())
      .catch((err) => console.log(err));
  };

  const submitPost = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (postMsg.length >= 30) {
      setSubmitting(true);

      axios
        .post('https://pskl-api.herokuapp.com/api/posts', {
          username: title.length ? title : 'anonymous',
          userPost: postMsg,
        })
        .then(() => {
          setTimeout(() => {
            setSubmitting(false);
            setTitle('');
            setPostMsg('');
            getPosts();
          }, 1500);
        })
        .catch((err) => console.log('Error: ', err));
    } else return;
  };

  useEffect(() => {
    getPosts();
  }, []);

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
            <Link to="/share">
              <h1 onClick={() => setOnShare(true)}>
                Share Anything <FaShare />
              </h1>
            </Link>
            {!onShare ? (
              <Link to="/share" onClick={() => setOnShare(true)}>
                want to share someting?
              </Link>
            ) : (
              <Link to="/" onClick={() => setOnShare(false)}>
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
            <Route exact path="/">
              <div
                css={css`
                  height: auto;
                  padding-bottom: 10vh;
                  filter: ${showMenu ? 'blur(4px)' : 'none'};
                `}
              >
                <PostList posts={posts} updateLikes={updateLikes} />
              </div>
            </Route>

            <Route path="/share">
              <div style={{ filter: showMenu ? 'blur(4px)' : 'none' }}>
                <Input
                  submitPost={submitPost}
                  title={title}
                  setTitle={setTitle}
                  postMsg={postMsg}
                  setPostMsg={setPostMsg}
                  submitting={submitting}
                />
              </div>
            </Route>
          </Switch>
        </div>

        <Global
          styles={css`
            @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap');

            * {
              box-sizing: border-box;
              font-family: 'Noto Sans JP', sans-serif;
              -webkit-tap-highlight-color: transparent;
              margin: 0;
              padding: 0;
            }

            a {
              text-decoration: none;
              -webkit-tap-highlight-color: transparent;
              color: ${colors.fg};
            }

            ul {
              list-style: none;
            }

            body {
              color: ${colors.fg};
              background-color: ${colors.bg};
              min-height: 100vh;
              max-height: auto;
              overflow-x: hidden;
            }

            ::selection {
              background: ${colors.fg1};
              color: ${colors.bg1};
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
