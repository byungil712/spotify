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
      // 인기 상승 곡
      getUpAlbums: builder.query({
         query: (id) => `/albums/${id}?market=KR`,
      }),
      // 인기 아티스트 (k-pop)
      getArtistsName: builder.query({
         query: (name) =>
            `/search?q=${encodeURIComponent(name)}&type=artist&market=KR&limit=1`,
      }),
      // 인기 앨범 (k-pop)
      getTopAlbums: builder.query({
         query: (id) => `/albums/${id}?market=KR`,
      }),
      // 신규 앨범
      getNewAlbum: builder.query({
         query: (id) => `/albums/${id}?market=KR`,
      }),
   }),
});

export const {
   useGetUpAlbumsQuery,
   useGetArtistsNameQuery,
   useGetTopAlbumsQuery,
   useGetNewAlbumQuery,
} = spotifyApi;
