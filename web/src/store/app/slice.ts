import { createSlice } from "@reduxjs/toolkit";
import { ApplicationState } from "models/ApplicationState";

const appSlice = createSlice({
  initialState: {
    isDarkMode: false,
    applicationState: null,
  } as any,
  name: "app",
  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
    initApplication: (state) => {
      state.applicationState = ApplicationState.UNINITIALIZED;
    },
    setApplicationState: (state, action) => {
      state.applicationState = action.payload;
    },
  },
});

export default appSlice.reducer;
export const { toggleDarkMode, initApplication, setApplicationState } =
  appSlice.actions;
