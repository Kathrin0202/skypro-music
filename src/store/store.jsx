import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import trackReducer from "./slices/playlist";
import { favoriteTracksApi } from "../services/myTracks";
export const store = configureStore({
  reducer: {
    track: trackReducer,
    [favoriteTracksApi.reducerPath]: favoriteTracksApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(favoriteTracksApi.middleware),
});
