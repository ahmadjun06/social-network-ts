import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import { authApi } from "./api/authApi";
import { postApi } from "./api/postApi";
import { fileApi } from "./api/fileApi";

export const store = configureStore({
  reducer: {
    userSlice,
    [authApi.reducerPath]: authApi.reducer,
    [postApi.reducerPath]: postApi.reducer,
    [fileApi.reducerPath]: fileApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      authApi.middleware,
      postApi.middleware,
      fileApi.middleware,
    ]),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
