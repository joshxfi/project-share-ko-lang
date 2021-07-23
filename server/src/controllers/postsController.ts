import { Request, Response } from 'express';
import Posts from '../models/Posts';

// get all posts
export const getPosts = async (_: any, res: Response) => {
  const data = await Posts.find();
  res.status(200).json(data);
};

// get a post with the given ID
export const getPost = async (req: Request, res: Response) => {
  try {
    const data = await Posts.findById(req.params.id);

    data
      ? res.status(200).json(data)
      : res
          .status(404)
          .json({ msg: 'Posts with the given ID could not be found!' });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

// create a new post
export const uploadPost = async (req: Request, res: Response) => {
  const newPost = new Posts(req.body);

  try {
    const data = await newPost.save();
    res.status(201).json({
      msg: 'Added post successfully!',
      postAdded: data,
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

// edit a specific post
export const editPost = async (req: Request, res: Response) => {
  try {
    const data = await Posts.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json({
      msg: 'Post updated successfully',
      postUpdated: data,
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

// deletes a post
export const delPost = async (req: Request, res: Response) => {
  try {
    const data = await Posts.deleteOne({ _id: req.params.id });
    res.status(200).json({
      msg: 'Post deleted successfully!',
      deletedPost: data,
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
