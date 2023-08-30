import { configureStore } from "@reduxjs/toolkit";
import trackReducer from "./slices/playlist";
export const store = configureStore({
  reducer: {
    track: trackReducer,
  },
});
