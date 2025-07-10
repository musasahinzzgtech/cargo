import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";

import authReducer from "./auth/slice";
import appReducer from "./app/slice";
import postReducer from "./post/slice";

const logger = createLogger({
  diff: true,
  duration: true,
});

const store = configureStore({
  reducer: {
    auth: authReducer,
    app: appReducer,
    post: postReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
