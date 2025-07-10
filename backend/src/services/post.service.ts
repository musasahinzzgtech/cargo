
import { HttpStatusCode } from 'axios';
import { createResponse } from '../utils/service.helpers';
import PostModel from '../models/post.model';

export const createPost = async ({
  author,
  content,
  images = [],
}: {
  author: string; // MongoDB ObjectId (from req.user.id or similar)
  content: string;
  images?: string[];
}) => {
  const newPost = await PostModel.create({
    author,
    content,
    images,
  });

  return createResponse({
    message: 'Gönderi başarıyla oluşturuldu.',
    statusCode: HttpStatusCode.Created,
    data: newPost,
  });
};

export const getAllPosts = async () => {
  const posts = await PostModel.find()
    .populate('author', 'name surname avatar') // customize fields
    .populate('comments.author', 'name surname avatar')
    .sort({ createdAt: -1 });

  return createResponse({
    message: 'Gönderiler başarıyla getirildi.',
    statusCode: HttpStatusCode.Ok,
    data: posts,
  });
};
