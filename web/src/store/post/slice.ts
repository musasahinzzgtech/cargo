import { createSlice } from "@reduxjs/toolkit";
import {
  fetchPostsAsync,
  createPostAsync,
  deletePostAsync,
} from "./asyncActions";

const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // FETCH POSTS
      .addCase(fetchPostsAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchPostsAsync.fulfilled, (state: any, action) => {
        state.posts = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchPostsAsync.rejected, (state: any, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // CREATE POST
      .addCase(createPostAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createPostAsync.fulfilled, (state: any, action: any) => {
        state.posts.unshift(action.payload); // Add to beginning
        state.isLoading = false;
      })
      .addCase(createPostAsync.rejected, (state: any, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // DELETE POST
      .addCase(deletePostAsync.fulfilled, (state, action) => {
        state.posts = state.posts.filter((post) => post._id !== action.payload);
      })
      .addCase(deletePostAsync.rejected, (state: any, action) => {
        state.error = action.payload;
      });
  },
});

export default postSlice.reducer;
