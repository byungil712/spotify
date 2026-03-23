import { configureStore } from "@reduxjs/toolkit";
import musicSlice from "./slice"
import { spotifyApi } from "../Script/spotifyApi";

const store = configureStore({
   reducer: {
      music: musicSlice,
      [spotifyApi.reducerPath]: spotifyApi.reducer,
   },
   middleware: (getDefaultMiddleware) =>          
      getDefaultMiddleware().concat(spotifyApi.middleware),
});

export default store
