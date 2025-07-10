import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthApi from "api/auth/AuthApi";

const loginUserAsync = createAsyncThunk<
  {
    name: string;
    email: string;
    token: string;
    refreshToken: string;
  },
  { email: string; password: string },
  { rejectValue: string }
>("users/loginUserAsync", async (payload, thunkAPI) => {
  try {
    const response = (await AuthApi.login(payload)) as any;
    const user = response.data.data.user;

    return {
      name: user.displayName || "",
      email: user.email,
      token: user.stsTokenManager.accessToken,
      refreshToken: user.stsTokenManager.refreshToken,
    };
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error?.response?.data?.message || "Login failed"
    );
  }
});
const getUserDetails = createAsyncThunk(
  "users/getUserDetailsAsync",
  async () => {
    const response = await AuthApi.getUserDetails();

    return response;
  }
);

const logoutUserAsync = createAsyncThunk("users/logoutUserAsync", async () => {
  const response = await AuthApi.logout();

  return response;
});

interface RegisterPayload {
  name: string;
  surname: string;
  birthday: string; // or Date if you're formatting before sending
  gender: string;
  email: string;
  phoneNumber: string;
  password: string;
  userType: string;
}

interface RegisterResponse {
  name: string;
  email: string;
  token: string;
}

const registerUserAsync = createAsyncThunk<
  RegisterResponse, // Return type on success
  RegisterPayload, // Payload type
  { rejectValue: string } // Optional: Error message type
>("users/registerUserAsync", async (payload, thunkAPI) => {
  try {
    const response = await AuthApi.register(payload);
    return response.data;
  } catch (error: any) {
    console.error("Register error:", error);
    return thunkAPI.rejectWithValue(
      error?.response?.data?.message || "Registration failed"
    );
  }
});

export { loginUserAsync, logoutUserAsync, registerUserAsync, getUserDetails };
