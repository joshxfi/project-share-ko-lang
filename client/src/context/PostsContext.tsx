import React, { useContext, createContext, useState, useEffect } from 'react';
import axios from 'axios';

const PostsContext = createContext<Value>({} as Value);
export const useProps = () => {
  return useContext(PostsContext);
};

const URL = 'https://pskl-api.herokuapp.com/api/posts';

export const PostsProvider = ({ children }: { children: React.ReactNode }) => {
  const [posts, setPosts] = useState<PostSchema[]>([]);
  const [title, setTitle] = useState<string>('');
  const [postMsg, setPostMsg] = useState<string>('');
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [sentMsg, setSentMsg] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const getPosts = async () => {
    try {
      const res = await axios.get(URL);

      setPosts(res.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  const updateLikes = async (id: string) => {
    const postToUpdate = posts.find((post) => post._id === id);

    try {
      await axios.patch(`${URL}/${id}`, {
        likes: postToUpdate === undefined ? 0 : postToUpdate?.likes + 1,
      });
      getPosts();
    } catch (err) {
      console.error(err);
    }
  };

  const submitPost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (postMsg.length >= 30) {
      setSubmitting(true);
      try {
        await axios.post(URL, {
          username: title.length ? title : 'anonymous',
          userPost: postMsg,
        });

        setSubmitting(false);
        reset();
      } catch (err) {
        console.error(err);
      }
    } else return;
  };

  const reset = () => {
    setSentMsg(true);
    setTitle('');
    setPostMsg('');
    getPosts();

    setTimeout(() => setSentMsg(false), 3000);
  };

  useEffect(() => {
    getPosts();
  }, []);

  const values: Value = {
    posts,
    title,
    postMsg,
    submitting,
    sentMsg,
    setPosts,
    setTitle,
    setPostMsg,
    setSubmitting,
    setSentMsg,
    updateLikes,
    submitPost,
    loading,
  };

  return (
    <PostsContext.Provider value={values}>{children}</PostsContext.Provider>
  );
};
