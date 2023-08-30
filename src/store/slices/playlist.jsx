import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  playTrack: false,
  newPlaylist: [],
  trackId: null,
  shufflePlaylist: false,
};

export const tracksSlices = createSlice({
  name: "track",
  initialState,
  reducers: {
    setNewTracks: (state, action) => {
      state.newPlaylist = action.payload;
    },
    setPlayTracks: (state, action) => {
      state.playTrack = !state.playTrack;
    },
    setCurrentTracks: (state, action) => {
      state.trackId = action.payload;
      state.playTrack = false;
    },
    setNextTracks: (state, action) => {
      state.newPlaylist = action.payload;
      state.playTrack = false;
    },
    setPrevTracks: (state, action) => {
      state.newPlaylist = action.payload;
      state.playTrack = false;
    },
    setShuffleTracks: (state, action) => {
      state.shufflePlaylist = !state.shufflePlaylist;
      state.trackId = state.trackId.sort(() => Math.round(Math.random() - 0.5));
    },
  },
});

export const {
  setNewTracks,
  setCurrentTracks,
  setShuffleTracks,
  setPlayTracks,
  setNextTracks,
  setPrevTracks,
} = tracksSlices.actions;

export default tracksSlices.reducer;
