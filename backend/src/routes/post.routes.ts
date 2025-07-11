import express from 'express';
import * as PostController from '../controllers/post.controller';
import { authorizeUser } from '../middlewares/authorization.middleware';
import multer from 'multer';
import path from 'path';

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Ensure this folder exists
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + ext);
  },
});

// File filter (optional)
const fileFilter = (req: any, file: any, cb: any) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Only image files are allowed!'), false);
  }
};

export const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB max per file
  },
});
router.post(
  '/',
  authorizeUser,
  upload.array('images', 10), // Max 10 images, field name must match frontend
  PostController.createPost,
);
router.get('/', authorizeUser, PostController.getAllPosts);

export default router;
