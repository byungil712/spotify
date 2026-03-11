import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchAccessToken = createAsyncThunk(
  'music/fetchToken',
  async (code) => {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        redirect_uri: "https://byungil712.github.io/desktop/",
        client_id: "040c2c6efeba49e5963cd010906a5cb6",
        client_secret: "e70f4189b90842e5ae4d593c106fb186",
      }),
    });
    return response.json(); // { access_token, refresh_token, expires_in }
  }
);

const musicSlice = createSlice({
  name: 'music',
  initialState: { accessToken: null, refreshToken: null, status: 'idle' },
  reducers: {
    setToken: (state, action) => {
      state.accessToken = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAccessToken.fulfilled, (state, action) => {
      state.accessToken = action.payload.access_token;
      state.refreshToken = action.payload.refresh_token;
    });
  }
});

export default musicSlice.reducer