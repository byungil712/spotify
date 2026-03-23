import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchClientToken = createAsyncThunk(
  "music/fetchClientToken",
  async () => {
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },

      body: new URLSearchParams({
        grant_type: "client_credentials",
        client_id: "040c2c6efeba49e5963cd010906a5cb6",
        client_secret: "e70f4189b90842e5ae4d593c106fb186",
      }),
    });

    const data = await response.json();

    return data;
  }
);

const res = await fetch("https://accounts.spotify.com/api/token", {
   method: "POST",
   headers: { "Content-Type": "application/x-www-form-urlencoded" },
   body: new URLSearchParams({
      grant_type: "client_credentials",
      client_id: "040c2c6efeba49e5963cd010906a5cb6",
      client_secret: "e70f4189b90842e5ae4d593c106fb186",
   })
});

const { access_token } = await res.json();

const data = await fetch("https://api.spotify.com/v1/search?q=remaster%2520track%3ADoxy%2520artist%3AMiles%2520Davis&type=album&limit=10&offset=10", {
   headers: { Authorization: `Bearer ${access_token}` }
}).then(r => r.json());

console.log(data);

const musicSlice = createSlice({
  name: "music",
  initialState: { accessToken: null, status: "idle", error: null },
  reducers: {
    setToken: (state, action) => {
      state.accessToken = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchClientToken.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchClientToken.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.accessToken = action.payload.access_token;
      })
      .addCase(fetchClientToken.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        console.error("토큰 에러:", action.error.message);
      });
  },
});

export const { setToken } = musicSlice.actions;
export default musicSlice.reducer;