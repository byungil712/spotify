import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import {
   faMagnifyingGlass,
   faBoxArchive,
   faHouse,
   faCircleArrowDown,
   faBars
} from "@fortawesome/free-solid-svg-icons";

const Header = ({ keyword, accessToken, setKeyword }) => {
   return (
      <header>
         <div className="header_i">
            <div className="logo">
               <FontAwesomeIcon icon={faSpotify} className="d_logo"/>
               <div className="m_logo">
                  <img src="./img/spotify_m.png" alt="/" />
               </div>
            </div>
            <div className="search_wrap">
               <div className="search_box">
                  <div className="home_icon">
                     <FontAwesomeIcon icon={faHouse} />
                  </div>
                  <div className="search_input_box">
                     <div className="search_icon">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                     </div>
                     <div className="search_input">
                        <input placeholder="어떤 콘텐츠를 감상하고 싶으세요?" />
                        <div className="input_hover">
                           <span>Ctrl</span>
                           <span>Shift</span>
                           <span>L</span>
                        </div>
                     </div>
                     <span className="wall">|</span>
                     <div className="input_icon">
                        <FontAwesomeIcon icon={faBoxArchive} />
                     </div>
                  </div>
               </div>
            </div>
            <div className="service">
               <div className="premium">
                  <span>Premium</span>
                  <span>지원</span>
                  <span>다운로드하기</span>
               </div>
               <p className="wall">|</p>
               <div className="login_box">
                  <div className="login">
                     <button type="button">
                        <FontAwesomeIcon icon={faCircleArrowDown} />
                        <span>앱 설치하기</span>
                     </button>
                     <span>가입하기</span>
                     <button type="button">
                        <p>로그인하기</p>
                     </button>
                  </div>
               </div>
            </div>
            <div className="m_btn">
               <button type="button">
                  <span>앱 열기</span>
               </button>
               <FontAwesomeIcon icon={faBars} />
            </div>
         </div>
      </header>
   );
};

export default Header;
