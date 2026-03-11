import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const spotifyApi = createApi({
   reducerPath: "spotifyApi",
   baseQuery: fetchBaseQuery({
      baseUrl: "https://api.spotify.com/v1",
      prepareHeaders: (headers, { getState }) => {
         const token = getState().music.accessToken;
         if (token) headers.set("Authorization", `Bearer ${token}`);
         return headers;
      },
   }),
   endpoints: (builder) => ({
      getMyProfile: builder.query({ query: () => "/me" }),
      getFeaturedPlaylists: builder.query({
         query: () => "/browse/featured-playlists",
      }),
      searchTracks: builder.query({
         query: (q) => `/search?q=${q}&type=track`,
      }),
      getPlaylist: builder.query({ query: (id) => `/playlists/${id}` }),
      getNewReleases: builder.query({
         query: () => "/browse/new-releases?limit=20",
      }),
      getUserTopTracks: builder.query({
         query: () => "/me/top/tracks?limit=20",
      }),
      searchTracks: builder.query({
         query: (keyword) => `/search?q=${keyword}&type=track&limit=20`,
      }),
   }),
});

export const {
   useGetMyProfileQuery,
   useGetFeaturedPlaylistsQuery,
   useSearchTracksQuery,
   useGetPlaylistQuery,
   useGetNewReleasesQuery,
   useGetUserTopTracksQuery,
} = spotifyApi;
