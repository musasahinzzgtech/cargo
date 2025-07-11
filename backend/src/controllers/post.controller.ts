import { Request, Response } from 'express';
import * as PostService from '../services/post.service';
import resolveController from '../utils/controller.middleware';

export const createPost = (req: any, res: Response) => {
  const { content } = req.body;
  const imageFiles = req.files as Express.Multer.File[];
  console.log('content', content, imageFiles);
  const author = req.user?.id; // Assuming you attach user via middleware

  resolveController(
    { content, images: imageFiles, user: req.user },
    PostService.createPost,
    req,
    res,
  );
};

export const getAllPosts = (req: any, res: Response) => {
  console.log(req.user);
  resolveController(null, PostService.getAllPosts, req, res);
};
