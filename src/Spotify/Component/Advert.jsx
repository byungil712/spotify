import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faLinesLeaning, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";

const Advert = () => {
   return (
      <div className="advart">
         <div className="advart_i">
            <div className="advart_left">
               <span>Spotify 미리 듣기</span>
               <p>
                  가끔 표시되는 광고와 함께 무제한 곡 및 팟캐스트를 이용하려면
                  가입하세요. 신용카드는 필요 없습니다.
               </p>
            </div>
            <div className="advart_right">
               <button type="button">
                  <span>무료로 가입하기</span>
               </button>
            </div>
         </div>
         <div className="m_player">
            <div className="m_icon">
               <FontAwesomeIcon icon={faHouse} />
               <p>홈</p>
            </div>
            <div className="m_icon">
               <FontAwesomeIcon icon={faMagnifyingGlass} />
               <p>검색하기</p>
            </div>
            <div className="m_icon">
               <FontAwesomeIcon icon={faLinesLeaning} />
               <p>내 라이브러리</p>
            </div>
            <div className="m_icon">
               <FontAwesomeIcon icon={faSpotify} />
               <p>Premium</p>
            </div>
         </div>
      </div>
   );
};

export default Advert;
