import React from "react";
import { useSelector } from "react-redux";
import { useGetUpAlbumsQuery } from "../Script/spotifyApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

const UpAlbum = ({ id }) => {
   const accessToken = useSelector((state) => state.music.accessToken);
   const { data: album } = useGetUpAlbumsQuery(id, { skip: !accessToken });

   if (!album) return null;

   return (
      <div className="music_item">
         <div className="music_img">
            {album.images?.[0]?.url && (
               <img src={album.images[0].url} alt={album.name} />
            )}
            <div className="music_repro">
               <FontAwesomeIcon icon={faCaretRight} />
            </div>
         </div>
         <div className="music_text">
            <p>{album.name}</p>
            <p>{album?.artists?.map((a) => a.name).join(", ")}</p>
         </div>
      </div>
   );
};

export default UpAlbum;
