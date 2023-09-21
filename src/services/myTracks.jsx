import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const TRACKS_TAG = { type: "Tracks", id: "LIST" };

const getTokenAccess = () => {
  const token = JSON.parse(JSON.parse(sessionStorage.getItem("tokenData")));
  const accessToken = token?.access;
  return accessToken;
};

export const favoriteTracksApi = createApi({
  reducerPath: "favoriteTracksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://skypro-music-api.skyeng.tech/catalog/track/",
  }),
  endpoints: (builder) => ({
    getMyPlaylist: builder.query({
      query: () => ({
        url: "favorite/all/",
        method: "GET",
        headers: { Authorization: `Bearer ${getTokenAccess()}` },
      }),
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: TRACKS_TAG.type, id })),
        TRACKS_TAG,
      ],
    }),
    likeTrack: builder.mutation({
      query: ({ id }) => ({
        url: `${id}/favorite/`,
        headers: { Authorization: `Bearer ${getTokenAccess()}` },
        method: "POST",
      }),
      invalidatesTags: (post) => [{ type: TRACKS_TAG.type, id: post?.id }],
    }),

    dislikeTrack: builder.mutation({
      query: ({ id }) => ({
        url: `${id}/favorite/`,
        headers: { Authorization: `Bearer ${getTokenAccess()}` },
        method: "DELETE",
      }),
      invalidatesTags: (post) => [{ type: TRACKS_TAG.type, id: post?.id }],
    }),
  }),
});
export const {
  useGetMyPlaylistQuery,
  useLikeTrackMutation,
  useDislikeTrackMutation,
} = favoriteTracksApi;
