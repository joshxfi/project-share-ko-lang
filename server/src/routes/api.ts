import express, { Request, Response, Router } from 'express';
import Posts from '../models/posts';

const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
  Posts.find().then((data: object) => res.status(200).json(data));
});

router.get('/:id', (req: Request, res: Response) => {
  Posts.findById(req.params.id)
    .then((data) =>
      data
        ? res.status(200).json(data)
        : res
            .status(404)
            .json({ msg: 'Posts with the given ID could not be found!' })
    )
    .catch((err: string) => res.status(500).json({ error: err }));
});

router.post('/', (req: Request, res: Response) => {
  const newPost = new Posts(req.body);
  newPost
    .save()
    .then((data: object) =>
      res.status(201).json({
        msg: 'Added post successfully!',
        postAdded: data,
      })
    )
    .catch((err: string) => res.status(500).json({ error: err }));
});

router.patch('/:id', (req: Request, res: Response) => {
  Posts.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
    .then((data) =>
      res.status(200).json({
        msg: 'Post updated successfully',
        postUpdated: data,
      })
    )
    .catch((err: string) => res.status(500).json({ error: err }));
});

router.delete('/:id', (req: Request, res: Response) => {
  Posts.deleteOne({ _id: req.params.id })
    .then((data: object) =>
      res.status(200).json({
        msg: 'Post deleted successfully!',
        deletedPost: data,
      })
    )
    .catch((err: string) => res.status(500).json({ error: err }));
});

export default router;
