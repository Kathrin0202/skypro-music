import {
  CURRENT_TRACKS,
  NEW_TRACKS,
  NEXT_TRACKS,
  PREV_TRACKS,
  SHUFFLE_TRACKS,
} from "../types/playlist";

export const newTracks = (track) => ({
  type: NEW_TRACKS,
  payload: { track },
});

export const nextTracks = (id) => ({
  type: NEXT_TRACKS,
  payload: { id },
});

export const prevTracks = (id) => ({
  type: PREV_TRACKS,
  payload: { id },
});
export const currentTracks = (id) => ({
  type: CURRENT_TRACKS,
  payload: { id },
});

export const shuffleTracks = (playlists) => ({
  type: SHUFFLE_TRACKS,
  payload: { playlists },
});
