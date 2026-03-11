import { useState } from "react";
import { useSelector } from "react-redux";
import { useGetNewReleasesQuery, useSearchTracksQuery } from "../Script/spotifyApi";

const Music = () => {
   const [keyword, setKeyword] = useState("");
   const [searchInput, setSearchInput] = useState("");
   const accessToken = useSelector((state) => state.music.accessToken);

   // 신규 앨범 불러오기 (기본)
   const {
      data: newReleases,
      isLoading: isNewLoading,
      isError: isNewError,
   } = useGetNewReleasesQuery();

   // 검색어로 트랙 불러오기
   const { data: searchResult, isLoading: isSearchLoading } =
      useSearchTracksQuery(keyword, {
         skip: !keyword, // keyword 없으면 API 호출 안 함
      });

   const handleSearch = () => setKeyword(searchInput);

   // ✅ 연결 상태 확인
   console.log("🔑 토큰 확인:", accessToken);
   console.log("🎵 신규 앨범 데이터:", newReleases);
   console.log("🔍 검색 결과:", searchResult);

   return (
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
         {/* API 연결 상태 배지 */}
         <div style={{ marginBottom: "20px" }}>
            <span
               style={{
                  background: accessToken ? "#1DB954" : "#e74c3c",
                  color: "white",
                  padding: "6px 12px",
                  borderRadius: "20px",
                  fontSize: "14px",
               }}
            >
               {accessToken ? "✅ API 연결됨" : "❌ 토큰 없음"}
            </span>
         </div>

         {/* 검색창 */}
         <div style={{ marginBottom: "30px" }}>
            <input
               value={searchInput}
               onChange={(e) => setSearchInput(e.target.value)}
               onKeyDown={(e) => e.key === "Enter" && handleSearch()}
               placeholder="아티스트 / 곡명 검색..."
               style={{
                  padding: "10px",
                  width: "300px",
                  marginRight: "8px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
               }}
            />
            <button
               onClick={handleSearch}
               style={{
                  padding: "10px 20px",
                  background: "#1DB954",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
               }}
            >
               검색
            </button>
         </div>

         {/* 검색 결과 */}
         {keyword && (
            <section>
               <h2>🔍 "{keyword}" 검색 결과</h2>
               {isSearchLoading && <p>검색 중...</p>}
               <TrackList tracks={searchResult?.tracks?.items} />
            </section>
         )}

         {/* 신규 앨범 */}
         {!keyword && (
            <section>
               <h2>🆕 신규 앨범</h2>
               {isNewLoading && <p>불러오는 중...</p>}
               {isNewError && (
                  <p style={{ color: "red" }}>
                     ❌ API 호출 실패 - 토큰을 확인하세요
                  </p>
               )}
               <div
                  style={{
                     display: "grid",
                     gridTemplateColumns: "repeat(4, 1fr)",
                     gap: "16px",
                  }}
               >
                  {newReleases?.albums?.items.map((album) => (
                     <div key={album.id} style={{ textAlign: "center" }}>
                        <img
                           src={album.images[0]?.url}
                           alt={album.name}
                           style={{ width: "100%", borderRadius: "8px" }}
                        />
                        <p style={{ fontSize: "13px", marginTop: "8px" }}>
                           {album.name}
                        </p>
                        <p style={{ fontSize: "11px", color: "#888" }}>
                           {album.artists.map((a) => a.name).join(", ")}
                        </p>
                     </div>
                  ))}
               </div>
            </section>
         )}
      </div>
   );
};

export default Music;
