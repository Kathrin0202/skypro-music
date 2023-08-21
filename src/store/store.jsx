import { configureStore } from "@reduxjs/toolkit";
import { tracksReducer } from "./reducers/playlist";

export const store = configureStore({
  reducer: {
    track: tracksReducer,
  },
});
