import { createAsyncThunk } from "@reduxjs/toolkit";
import PostApi from "api/post/PostApi";

export const fetchPostsAsync = createAsyncThunk(
  "posts/fetchPostsAsync",
  async (_, thunkAPI) => {
    try {
      const response = await PostApi.getAll();
      return response.data?.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error?.response?.data?.message || "Gönderiler alınamadı"
      );
    }
  }
);

export const createPostAsync = createAsyncThunk(
  "posts/createPostAsync",
  async (payload:any, thunkAPI) => {
    try {
      const response = await PostApi.create(payload);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error?.response?.data?.message || "Gönderi oluşturulamadı"
      );
    }
  }
);

export const deletePostAsync = createAsyncThunk(
  "posts/deletePostAsync",
  async (postId: any, thunkAPI) => {
    try {
      await PostApi.delete(postId);
      return postId;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error?.response?.data?.message || "Gönderi silinemedi"
      );
    }
  }
);
