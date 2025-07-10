import { Request, Response } from 'express';
import * as PostService from '../services/post.service';
import resolveController from '../utils/controller.middleware';

export const createPost = (req: any, res: Response) => {
  const { content, images } = req.body;
  const author = req.user?.id; // Assuming you attach user via middleware

  resolveController({ author, content, images }, PostService.createPost, req, res);
};

export const getAllPosts = (req: any, res: Response) => {
  console.log(req.user);
  resolveController(null, PostService.getAllPosts, req, res);
};
