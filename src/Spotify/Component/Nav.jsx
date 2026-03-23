import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faGlobe } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ keyword, sidebarWidth }) => {
   return (
      <div className="menu_i">
         <div className="menu_top">
            <div className="menu_title">
               <div className="title">
                  <span>내 라이브러리</span>
               </div>
               <div className="title_btn">
                  <button
                     type="button"
                     style={{
                        padding: sidebarWidth > 330 ? "8px 16px" : "10px 8px",
                     }}
                  >
                     <FontAwesomeIcon icon={faPlus} />
                     <span
                        style={{
                           display: sidebarWidth > 330 ? "block" : "none",
                        }}
                     >
                        만들기
                     </span>
                  </button>
               </div>
            </div>
            <div className="menu_contents">
               <div className="fir_content">
                  <p>첫 번째 플레이리스트를 만드세요.</p>
                  <p>어렵지 않아요. 저희가 도와드릴게요.</p>
                  <button type="button">
                     <span>플레이리스트 만들기</span>
                  </button>
               </div>
               <div className="sec_content">
                  <p>팔로우할 팟캐스트를 찾아보세요.</p>
                  <p>새로운 에피소드에 대한 소식을 알려드릴게요.</p>
                  <button type="button">
                     <span>팟캐스트 둘러보기</span>
                  </button>
               </div>
            </div>
         </div>
         <div className="menu_btm">
            <div className="menu_footer">
               <div className="footer_top">
                  <ul>
                     <li>
                        <a href="#">법률 정보</a>
                     </li>
                     <li>
                        <a href="#">안전 및 개인정보 보호 센터</a>
                     </li>
                     <li>
                        <a href="#">개인정보 처리방침</a>
                     </li>
                     <li>
                        <a href="#">광고 상세정보</a>
                     </li>
                     <li>
                        <a href="#">접근성</a>
                     </li>
                  </ul>
                  <span>쿠키</span>
               </div>
               <div className="footer_btm">
                  <button type="button">
                     <FontAwesomeIcon icon={faGlobe} />
                     <span>한국어</span>
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Nav;
