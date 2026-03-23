import { useState, useRef } from "react";
import { useSelector } from "react-redux";
import ArtistCard from "./ArtistCard";
import AlbumCard from "./AlbumCard";
import UpAlbum from "./UpAlbum";
import NewAlbum from "./NewAlbum";

const Music = ({ keyword }) => {
   const accessToken = useSelector((state) => state.music.accessToken);

   const newAlbums = [
      "7euwh8AFMBg5I408jSVLq4",
      "1G8siqRnMQiyjhm2bFVp0W",
      "4K5d74xQ43sq3CbPa7sSta",
      "7KLgaMNymI6GGj7JMH1JFT",
      "37GXhVdGkKpYUZiD2a4mgg",
      "0yUer3gTywnNbW9ChFEs1d",
      "646lxOrZh1bUwlEevSSZRt",
      "1sR5KzprQKpzjuJc1u586m",
      "3LTibbNd4cBsR4frUCIPTi",
      "0UFosP2UjoyB4hjqfHQKpJ",
      "4tWtDCXcEImecc7ySIVqwW",
      "3K92gTppnPdQgUsbDk74E2",
      "2m47uENn2jQv3q5muu3z1S",
      "4tbCxd3tBDiJYNFHsr52B3",
      "4h8amYcoOzdgu6fsapRvBD",
      "6mTzQkij2GLHTsmbgsSxQl",
      "41rv9rV6jZMwzt3O9CE8jl",
      "2OlUMnS2qteJ6rY9LnZ0ht",
      "6w5SENJgvoPHEjDvFvN7R3",
   ];

   const upAlbums = [
      "1LB2wP1HO28roYqxcw4Qtx",
      "3053E9tumiU5rqbAPWF06s",
      "67d43ZuedVWtZMc4nOm90J",
      "1IxQnpYIIFY9F2IVVsD27F",
      "2DV7iVJ7L5DRQijgjyqLyQ",
      "4EPIlAjXbTNQTracKmYnI6",
      "4WUHzPCu7BEuTxnjICJqpy",
      "4yaB2lDjvBH7jqnmpdcfpW",
      "4ptpkLWr3MMEe6pUQv0Xs8",
      "6oECjagksATHu2UaclXrq1",
   ];

   const artists = [
      "악뮤",
      "아이유",
      "10cm",
      "G-DRAGON",
      "DAY6",
      "aespa",
      "LE SSERAFIM",
      "BIGBANG",
      "BOYNESTDOOR",
      "NewJeans",
   ];

   const albums = [
      "1W7dufIS79lk01w3tBAGe5",
      "5pSk3c3wVwnb2arb6ohCPU",
      "2SPrl8C8pgSM5gXbAiyJHY",
      "15XcLhiVMlSOipUddTNDnr",
      "2E8hkTJKnSCv69mjVAh6hL",
      "07cUjKdLcgmnABNKKb4rGQ",
      "3DmDoHxAeEiDFNWrHSKAdQ",
      "19z4SOpETLOt3bKKcJJ84O",
      "6EgR5UlxMx9JksQUqR9Yep",
      "0aYRlVT4Mt63KpofZcaBoc",
   ];

   const newAlbumRef = useRef(null);
   const upAlbumRef = useRef(null);
   const artistRef = useRef(null);
   const albumRef = useRef(null);

   const [newAlbumScroll, setNewAlbumScroll] = useState({
      left: false,
      right: true,
   });
   const [upAlbumScroll, setUpAlbumScroll] = useState({
      left: false,
      right: true,
   });
   const [artistScroll, setArtistScroll] = useState({
      left: false,
      right: true,
   });
   const [albumScroll, setAlbumScroll] = useState({ left: false, right: true });

   const handleScroll = (ref, setter) => {
      const s = ref.current;
      if (!s) return;
      setter({
         left: s.scrollLeft > 0,
         right: s.scrollLeft + s.clientWidth < s.scrollWidth - 10,
      });
   };

   const scroll = (ref, dir) => {
      const s = ref.current;
      if (!s) return;
      s.scrollBy({ left: dir === "right" ? 500 : -500, behavior: "smooth" });
   };

   return (
      <div className="main_i">
         {!keyword && (
            <section className="music_list">
               <div className="music_list_text">
                  <h3>최신 앨범</h3>
                  <p>모두 표시</p>
               </div>
               <div className="music_scroll">
                  {newAlbumScroll.left && (
                     <button
                        className="scroll_btn scroll_btn_left"
                        onClick={() => scroll(newAlbumRef, "left")}
                     >
                        ❮
                     </button>
                  )}
                  <div
                     className="music_box"
                     ref={newAlbumRef}
                     onScroll={() =>
                        handleScroll(newAlbumRef, setNewAlbumScroll)
                     }
                  >
                     {newAlbums.map((id) => (
                        <NewAlbum key={id} id={id} />
                     ))}
                  </div>
                  {newAlbumScroll.right && (
                     <button
                        className="scroll_btn scroll_btn_right"
                        onClick={() => scroll(newAlbumRef, "right")}
                     >
                        ❯
                     </button>
                  )}
               </div>
            </section>
         )}

         {!keyword && (
            <section className="music_list">
               <div className="music_list_text">
                  <h3>인기 상승곡</h3>
                  <p>모두 표시</p>
               </div>
               <div className="music_scroll">
                  {upAlbumScroll.left && (
                     <button
                        className="scroll_btn scroll_btn_left"
                        onClick={() => scroll(upAlbumRef, "left")}
                     >
                        ❮
                     </button>
                  )}
                  <div
                     className="music_box"
                     ref={upAlbumRef}
                     onScroll={() => handleScroll(upAlbumRef, setUpAlbumScroll)}
                  >
                     {upAlbums.map((id) => (
                        <UpAlbum key={id} id={id} />
                     ))}
                  </div>
                  {upAlbumScroll.right && (
                     <button
                        className="scroll_btn scroll_btn_right"
                        onClick={() => scroll(upAlbumRef, "right")}
                     >
                        ❯
                     </button>
                  )}
               </div>
            </section>
         )}

         {!keyword && (
            <section className="music_list">
               <div className="music_list_text">
                  <h3>인기 아티스트</h3>
                  <p>모두 표시</p>
               </div>
               <div className="music_scroll">
                  {artistScroll.left && (
                     <button
                        className="scroll_btn scroll_btn_left"
                        onClick={() => scroll(artistRef, "left")}
                     >
                        ❮
                     </button>
                  )}
                  <div
                     className="music_box"
                     ref={artistRef}
                     onScroll={() => handleScroll(artistRef, setArtistScroll)}
                  >
                     {artists.map((name) => (
                        <ArtistCard key={name} name={name} />
                     ))}
                  </div>
                  {artistScroll.right && (
                     <button
                        className="scroll_btn scroll_btn_right"
                        onClick={() => scroll(artistRef, "right")}
                     >
                        ❯
                     </button>
                  )}
               </div>
            </section>
         )}

         {!keyword && (
            <section className="music_list">
               <div className="music_list_text">
                  <h3>인기 앨범 및 싱글</h3>
                  <p>모두 표시</p>
               </div>
               <div className="music_scroll">
                  {albumScroll.left && (
                     <button
                        className="scroll_btn scroll_btn_left"
                        onClick={() => scroll(albumRef, "left")}
                     >
                        ❮
                     </button>
                  )}
                  <div
                     className="music_box"
                     ref={albumRef}
                     onScroll={() => handleScroll(albumRef, setAlbumScroll)}
                  >
                     {albums.map((id) => (
                        <AlbumCard key={id} id={id} />
                     ))}
                  </div>
                  {albumScroll.right && (
                     <button
                        className="scroll_btn scroll_btn_right"
                        onClick={() => scroll(albumRef, "right")}
                     >
                        ❯
                     </button>
                  )}
               </div>
            </section>
         )}
      </div>
   );
};

export default Music;
