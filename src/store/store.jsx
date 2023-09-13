import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import trackReducer from "./slices/playlist";
export const store = configureStore({
  reducer: {
    track: trackReducer,
  },
  middleware: [thunk],
});
