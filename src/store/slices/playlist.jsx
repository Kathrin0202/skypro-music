import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  playTrack: false,
  newPlaylist: [],
  trackId: null,
  shufflePlaylist: [],
};

export const tracksSlices = createSlice({
  name: "track",
  initialState,
  reducers: {
    setNewTracks: (state, action) => {
      state.newPlaylist = action.payload;
    },
    setPlayTracks: (state, action) => {
      state.playTrack = action.payload;
    },
    setCurrentTracks: (state, action) => {
      state.trackId = action.payload;
    },
    setShuffleTracks: (state, action) => {
      state.shufflePlaylist = action.payload;
    },
  },
});

export const {
  setNewTracks,
  setCurrentTracks,
  setShuffleTracks,
  setPlayTracks,
} = tracksSlices.actions;

export default tracksSlices.reducer;
