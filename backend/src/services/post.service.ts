import { HttpStatusCode } from 'axios';
import { createResponse } from '../utils/service.helpers';
import PostModel from '../models/post.model';
import UserModel from '../models/user.model';

export const createPost = async ({ content, images = [], user }: any) => {
  const userMongo = await UserModel.findOne({ uid: user?.uid });
  console.log('userMongo', userMongo, {
    author: userMongo?.[0]?._id,
    content,
    // images,
  });
  const newPost = await PostModel.create({
    author: userMongo?.[0]?._id, // ✅ Corrected
    content,
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
