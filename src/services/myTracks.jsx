import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setAuth } from "../store/slices/auth";

const TRACKS_TAG = { type: "Tracks", id: "LIST" };

const baseQueryWithReauth = async (args, api, extraOptions) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: "https://skypro-music-api.skyeng.tech",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.access;
      console.debug("Использую токен из стора", { token });

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  });

  const result = await baseQuery(args, api, extraOptions);
  console.debug("Результат первого запроса", { result });
  if (result?.error?.status !== 401) {
    return result;
  }
  const forceLogout = () => {
    console.debug("Принудительная авторизация!");
    api.dispatch(setAuth(null));
    window.location.navigate("/login");
  };

  const { auth } = api.getState();
  console.debug("Данные пользователя в сторе", { auth });
  if (!auth.refresh) {
    return forceLogout();
  }
  const refreshResult = await baseQuery(
    {
      url: "/user/token/refresh/",
      method: "POST",
      body: {
        refresh: auth.refresh,
      },
    },
    api,
    extraOptions
  );

  console.debug("Результат запроса на обновление токена", { refreshResult });

  if (!refreshResult.data.access) {
    return forceLogout();
  }
  api.dispatch(setAuth({ ...auth, access: refreshResult.data.access }));

  const retryResult = await baseQuery(args, api, extraOptions);

  if (retryResult?.error?.status === 401) {
    return forceLogout();
  }

  console.debug("Повторный запрос завершился успешно");

  return retryResult;
};

export const favoriteTracksApi = createApi({
  reducerPath: "favoriteTracksApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    getAllPlaylist: builder.query({
      query: () => ({
        url: "/catalog/track/all/",
      }),
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: TRACKS_TAG.type, id })),
        TRACKS_TAG,
      ],
    }),
    getAllMyTracks: builder.query({
      query: () => ({
        url: "/catalog/track/favorite/all/",
      }),
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: TRACKS_TAG.type, id })),
        TRACKS_TAG,
      ],
      transformResponse: (response) => {
        const transformedResponse = response.map((item) => ({
          ...item,
          stared_user: [JSON.parse(localStorage.getItem("user"))],
        }));

        return transformedResponse;
      },
    }),
    getCategory: builder.query({
      query: ({ id }) => ({
        url: `/catalog/selection/${id}/`,
      }),
      providesTags: (result = []) => [
        ...(Array.isArray(result)
          ? result.map(({ id }) => ({ type: TRACKS_TAG.type, id }))
          : []),
        TRACKS_TAG,
      ],
    }),

    likeTrack: builder.mutation({
      query(data) {
        const { id } = data;
        return {
          url: `/catalog/track/${id}/favorite/`,
          method: "POST",
        };
      },
      invalidatesTags: (trackId) => [
        { type: TRACKS_TAG.type, id: trackId?.id },
      ],
    }),

    dislikeTrack: builder.mutation({
      query(data) {
        const { id } = data;
        return {
          url: `/catalog/track/${id}/favorite/`,
          method: "DELETE",
        };
      },
      invalidatesTags: (trackId) => [
        { type: TRACKS_TAG.type, id: trackId?.id },
      ],
    }),
  }),
});
export const {
  useGetMyPlaylistQuery,
  useGetAllMyTracksQuery,
  useGetCategoryQuery,
  useLikeTrackMutation,
  useDislikeTrackMutation,
} = favoriteTracksApi;
