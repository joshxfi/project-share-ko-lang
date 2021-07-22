import express, { Request, Response, Router } from 'express';
import Posts from '../models/posts';

const router: Router = express.Router();

router.get('/', async (_, res: Response) => {
  const data = await Posts.find();
  res.status(200).json(data);
});

router.get('/:id', async (req: Request, res: Response) => {
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
});

router.post('/', async (req: Request, res: Response) => {
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
});

router.patch('/:id', async (req: Request, res: Response) => {
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
});

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const data = await Posts.deleteOne({ _id: req.params.id });
    res.status(200).json({
      msg: 'Post deleted successfully!',
      deletedPost: data,
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

export default router;
