import React from "react";
import { useSelector } from "react-redux";
import { useGetNewAlbumQuery } from "../Script/spotifyApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

const NewAlbum = ({ id }) => {
   const accessToken = useSelector((state) => state.music.accessToken);
   const { data: newAlbum } = useGetNewAlbumQuery(id, { skip: !accessToken });

   if (!newAlbum) return null;

   return (
      <div className="music_item">
         <div className="music_img">
            {newAlbum.images?.[0]?.url && (
               <img src={newAlbum.images[0].url} alt={newAlbum.name} />
            )}
            <div className="music_repro">
               <FontAwesomeIcon icon={faCaretRight} />
            </div>
         </div>
         <div className="music_text">
            <p>{newAlbum.name}</p>
            <p>{newAlbum?.artists?.map((a) => a.name).join(", ")}</p>
         </div>
      </div>
   );
};

export default NewAlbum;
