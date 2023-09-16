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
      const id = action.payload;
      const toggledTrack = Object.values(state.newPlaylist).find(
        (item) => item.id === id
      );
      state.playTrack = true;
      state.trackId = { ...toggledTrack };
    },
    setShuffleTracks: (state, action) => {
      const id = action.payload;
      const shuffleTrack = Object.values(state.newPlaylist).find(
        (item) => item.id === id
      );
      state.shufflePlaylist = { ...shuffleTrack };
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
