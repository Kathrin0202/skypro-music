import { createSlice } from "@reduxjs/toolkit";
import { act } from "@testing-library/react";

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
      state.playTrack = !state.playTrack;
    },
    setCurrentTracks: (state, action) => {
      const id = action.payload;
      const toggledTrack = Object.values(state.newPlaylist).find(
        (item) => item.id === id
      );
      state.playTrack = true;
      state.trackId = { ...toggledTrack };
    },
    setNextTracks: (state, action) => {
      state.playTrack = true;
      state.trackId = action.payload;
    },
    setPrevTracks: (state, action) => {
      const id = action.payload;
      const prevTracks = Object.values(state.newPlaylist).find(
        (item) => item.id === id
      );
      state.playTrack = true;
      state.trackId = { ...prevTracks };
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
  setNextTracks,
  setPrevTracks,
} = tracksSlices.actions;

export default tracksSlices.reducer;
