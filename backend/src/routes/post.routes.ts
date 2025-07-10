import express from 'express';
import * as PostController from '../controllers/post.controller';
import { authorizeUser } from '../middlewares/authorization.middleware';

const router = express.Router();

router.post('/', authorizeUser, PostController.createPost);
router.get('/', authorizeUser, PostController.getAllPosts);

export default router;
