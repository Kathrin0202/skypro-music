import {
  CURRENT_TRACKS,
  NEW_TRACKS,
  NEXT_TRACKS,
  PREV_TRACKS,
  SHUFFLE_TRACKS,
} from "../actions/types/playlist";

const initionalState = {
  playTrack: false,
  newPlaylist: {},
  trackId: null,
  shufflePlaylist: {},
};

export function tracksReducer(state = initionalState, action) {
  switch (action.type) {
    case NEW_TRACKS: {
      return {
        ...state,
        newPlaylist: action.payload,
      };
    }
    case CURRENT_TRACKS: {
      const id = action.payload;
      const idTrack = Object.values(state.newPlaylist).find((item) => item.id === id);
      return {
        ...state,
        playTrack: true,
        trackId: [...idTrack],
      };
    }
    case NEXT_TRACKS: {
      const id = action.payload;
      const nextTrack = Object.values(state.newPlaylist).find(
        (item) => item.id === id
      );
      return {
        ...state,
        playTrack: true,
        trackId: [...nextTrack],
      };
    }
    case PREV_TRACKS: {
      const id = action.payload;
      const prevTrack = Object.values(state.newPlaylist).find(
        (item) => item.id === id
      );
      return {
        ...state,
        playTrack: true,
        trackId: [...prevTrack],
      };
    }
    case SHUFFLE_TRACKS: {
      return {
        ...state,
        shufflePlaylist: action.payload,
      };
    }
    default:
      return state;
  }
}
