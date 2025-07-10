import { createSlice } from "@reduxjs/toolkit";
import {
  getUserDetails,
  loginUserAsync,
  logoutUserAsync,
} from "./asyncActions";
const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    isLoadingAuth: false,
    userDetails: {
      name: "",
      email: "",
      token: "",
      refreshToken: "",
    },
  },
  reducers: {
    initApplicationUser: (state) => {
      const token = window.localStorage.getItem("token");
      const refreshToken = window.localStorage.getItem("refreshToken");
      if (token && refreshToken) {
        state.isAuthenticated = true;
        state.userDetails.token = token;
        state.userDetails.refreshToken = refreshToken;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUserAsync.pending, (state) => {
        state.isAuthenticated = false;
        state.isLoadingAuth = true;
      })
      .addCase(loginUserAsync.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.isLoadingAuth = false;
        state.userDetails = action.payload;

        window.localStorage.setItem("token", action.payload.token);
        window.localStorage.setItem(
          "refreshToken",
          action.payload.refreshToken
        );
      })
      .addCase(loginUserAsync.rejected, (state) => {
        state.isAuthenticated = false;
        state.isLoadingAuth = false;
      })
      .addCase(logoutUserAsync.pending, (state) => {
        state.isAuthenticated = false;
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("refreshToken");
      })
      .addCase(getUserDetails.pending, (state) => {
        state.isLoadingAuth = true;
      })
      .addCase(getUserDetails.fulfilled, (state, action) => {
        console.log("action", action.payload);
        state.userDetails = {
          ...state.userDetails,
        };
        state.isLoadingAuth = false;
      })
      .addCase(getUserDetails.rejected, (state) => {
        state.isLoadingAuth = false;
      });
  },
});

export default authSlice.reducer;
export const { initApplicationUser } = authSlice.actions;
