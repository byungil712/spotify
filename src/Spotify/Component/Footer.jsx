import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faFacebook,
   faInstagram,
   faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
   return (
      <footer>
         <div className="footer_i">
            <div className="footer_top">
               <div className="footer_menu">
                  <div className="menu_category">
                     <p>회사</p>
                     <ul>
                        <li>
                           <a href="#">상세정보</a>
                        </li>
                        <li>
                           <a href="#">채용 정보</a>
                        </li>
                        <li>
                           <a href="#">For the Record</a>
                        </li>
                     </ul>
                  </div>
                  <div className="menu_category">
                     <p>커뮤니티</p>
                     <ul>
                        <li>
                           <a href="#">아티스트</a>
                        </li>
                        <li>
                           <a href="#">개발자</a>
                        </li>
                        <li>
                           <a href="#">광고</a>
                        </li>
                        <li>
                           <a href="#">투자자</a>
                        </li>
                        <li>
                           <a href="#">공급업체</a>
                        </li>
                     </ul>
                  </div>
                  <div className="menu_category">
                     <p>유용한 링크</p>
                     <ul>
                        <li>
                           <a href="#">지원</a>
                        </li>
                        <li>
                           <a href="#">무료 모바일 앱</a>
                        </li>
                        <li>
                           <a href="#">국가별 인기 콘텐츠</a>
                        </li>
                        <li>
                           <a href="#">내 음악 가져오기</a>
                        </li>
                     </ul>
                  </div>
                  <div className="menu_category">
                     <p>Spotify 요금제</p>
                     <ul>
                        <li>
                           <a href="#">Premium 개인</a>
                        </li>
                        <li>
                           <a href="#">Premium 듀오</a>
                        </li>
                        <li>
                           <a href="#">Premium 학생</a>
                        </li>
                     </ul>
                  </div>
               </div>
               <div className="footer_btn">
                  <button type="button">
                     <FontAwesomeIcon icon={faInstagram} />
                  </button>
                  <button type="button">
                     <FontAwesomeIcon icon={faTwitter} />
                  </button>
                  <button type="button">
                     <FontAwesomeIcon icon={faFacebook} />
                  </button>
               </div>
            </div>
            <div className="footer_btm">
               <div className="footer_m_info">
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
               </div>
               <p>© 2026 Spotify AB</p>
               <button type="button" className="m_btn">
                  <FontAwesomeIcon icon={faGlobe} />
                  <span>한국어</span>
               </button>
               <p>
                  스포티파이 에이비, Regeringsgatan 19, 111 53 Stockholm, Sweden
                  | 대표: 다니엘 에크 | 사업자등록번호: 556703-7485 (스웨덴) |
                  통신판매업 신고번호: 2024-공정-0007 (<span>사업자정보</span>)
                  | 고객지원문의 +82 1533 6552 및 support@spotify.com |
                  호스팅서비스제공자: Google LLC
               </p>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
