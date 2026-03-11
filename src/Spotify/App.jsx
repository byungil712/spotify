import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAccessToken } from "./Script/slice";
import Nav from "./Component/Nav";
import Header from "./Component/Header";
import Music from "./Component/Music";

const CLIENT_ID = "040c2c6efeba49e5963cd010906a5cb6";
const REDIRECT_URI = "https://byungil712.github.io/desktop/";
const SCOPES = "user-read-private user-read-email user-library-read";

const App = () => {
   const dispatch = useDispatch();
   const accessToken = useSelector((state) => state.music.accessToken);

   useEffect(() => {
      // 콜백 URL에서 code 파라미터 추출 → 토큰 요청
      const code = new URLSearchParams(window.location.search).get("code");
      if (code) {
         dispatch(fetchAccessToken(code));
         window.history.replaceState({}, "", REDIRECT_URI); // URL에서 code 제거
      }
   }, []);

   const handleLogin = () => {
      const url = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&scope=${encodeURIComponent(SCOPES)}`;
      window.location.href = url;
   };

   // 토큰 없으면 로그인 버튼
   if (!accessToken) {
      return (
         <div
            style={{
               display: "flex",
               justifyContent: "center",
               marginTop: "100px",
            }}
         >
            <button
               onClick={handleLogin}
               style={{
                  padding: "14px 32px",
                  background: "#1DB954",
                  color: "white",
                  border: "none",
                  borderRadius: "30px",
                  fontSize: "16px",
                  cursor: "pointer",
               }}
            >
               🎵 Spotify로 로그인
            </button>
         </div>
      );
   }

   return (
      <div className="container">
         <Music />
      </div>
   );
};

export default App;
