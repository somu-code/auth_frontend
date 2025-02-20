import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Feature/Auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});
export type AppDispatch = typeof store.dispatch