import React from "react";
import { useSelector } from "react-redux";
import { useGetArtistsNameQuery } from "../Script/spotifyApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

const ArtistCard = ({ name }) => {
   const accessToken = useSelector((state) => state.music.accessToken);
   const { data } = useGetArtistsNameQuery(name, { skip: !accessToken });
   const artist = data?.artists?.items?.[0];

   if (!artist) return null;
   return (
      <div className="music_item">
         <div className="music_img artist_img">
            <img
               src={artist.images[0]?.url}
               alt={artist.name}
            />
            <div className="music_repro">
               <FontAwesomeIcon icon={faCaretRight} />
            </div>
         </div>
         <div className="music_text">
            <p>{artist.name}</p>
            <p>아티스트</p>
         </div>
      </div>
   );
};

export default ArtistCard;
