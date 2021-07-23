import express, { Router } from 'express';
import {
  delPost,
  editPost,
  getPost,
  getPosts,
  uploadPost,
} from '../controllers/postsController';

const router: Router = express.Router();

router.get('/', getPosts);
router.get('/:id', getPost);
router.post('/', uploadPost);
router.patch('/:id', editPost);
router.delete('/:id', delPost);

export default router;
