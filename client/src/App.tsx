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
  const [title, setTitle] = useState<string>('');
  const [likes, setLikes] = useState<number>(0);
  const [postMsg, setPostMsg] = useState<string>('');
  const [onShare, setOnShare] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);

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

  const updateLikes = (id: string) => {
    const postToUpdate = posts.find((post) => post._id === id);

    axios
      .patch(`http://localhost:8080/api/posts/${id}`, {
        likes: postToUpdate === undefined ? 0 : postToUpdate?.likes + 1,
      })
      .then(() => console.log(id))
      .catch((err) => console.log(id, err));
  };

  const submitPost = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    axios
      .post('http://localhost:8080/api/posts', {
        username: title,
        userPost: postMsg,
      })
      .then(() => {
        setTimeout(() => {
          setSubmitting(false);
          setTitle('');
          setPostMsg('');
        }, 1500);
      })
      .catch((err) => console.log('Error: ', err));
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
          {!onShare ? (
            <Link to="/share" onClick={() => setOnShare(true)}>
              want to share someting?
            </Link>
          ) : (
            <Link to="/" onClick={() => setOnShare(false)}>
              go back to posts?
            </Link>
          )}
        </div>

        <Switch>
          <Route exact path="/">
            <div
              css={css`
                height: 120%;
              `}
            >
              <PostList
                posts={posts}
                setLikes={setLikes}
                updateLikes={updateLikes}
              />
            </div>
          </Route>

          <Route path="/share">
            <Input
              submitPost={submitPost}
              title={title}
              setTitle={setTitle}
              postMsg={postMsg}
              setPostMsg={setPostMsg}
              submitting={submitting}
            />
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
              min-height: 100vh;
              max-height: auto;
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
