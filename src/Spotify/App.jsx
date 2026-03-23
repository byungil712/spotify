import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchClientToken } from "./Script/slice";
import Header from "./Component/Header";
import Music from "./Component/Music";
import Nav from "./Component/Nav";
import Advert from "./Component/Advert";
import Footer from "./Component/Footer";
import "./app.css";
import "./app2.css";

const App = () => {
   const dispatch = useDispatch();
   const accessToken = useSelector((state) => state.music.accessToken);

   const [keyword, setKeyword] = useState("");

   const [sidebarWidth, setSidebarWidth] = useState(420);
   const [isResizing, setIsResizing] = useState(false);

   const mainRef = useRef(null);
   const [isMainScrolled, setIsMainScrolled] = useState(false);
   const [isMainHovered, setIsMainHovered] = useState(false);

   // 왼쪽 사이드바 드래그
   const startLeftResize = useCallback(() => {
      setIsResizing(true);
      const onMouseMove = (e) => {
         const newWidth = Math.min(Math.max(e.clientX, 280), 420);
         setSidebarWidth(newWidth);
      };
      const onMouseUp = () => {
         setIsResizing(false);
         window.removeEventListener("mousemove", onMouseMove);
         window.removeEventListener("mouseup", onMouseUp);
      };
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
   }, []);

   // 토큰
   useEffect(() => {
      dispatch(fetchClientToken());
   }, []);

   const [scrollBar, setScrollBar] = useState({
      top: 0,
      height: 0,
      visible: false,
   });

   const handleMainScroll = () => {
      const el = mainRef.current;
      if (!el) return;

      const { scrollTop, scrollHeight, clientHeight } = el;

      setIsMainScrolled(scrollTop > 0);

      if (scrollHeight > clientHeight) {
         const thumbHeight = Math.max(
            (clientHeight / scrollHeight) * clientHeight,
            30,
         );
         const maxScrollTop = scrollHeight - clientHeight;
         const scrollPercent = scrollTop / maxScrollTop;

         const thumbOffset = scrollPercent * (clientHeight - thumbHeight);

         const thumbTop = scrollTop + thumbOffset;

         setScrollBar({ top: thumbTop, height: thumbHeight, visible: true });
      } else {
         setScrollBar((prev) => ({ ...prev, visible: false }));
      }
   };

   // 윈도우 크기 변경 시 스크롤바 크기 재계산
   useEffect(() => {
      handleMainScroll();
      window.addEventListener("resize", handleMainScroll);
      return () => window.removeEventListener("resize", handleMainScroll);
   }, []);

   return (
      <div className="container">
         <Header
            keyword={keyword}
            accessToken={accessToken}
            setKeyword={setKeyword}
         />
         <div className="center_wrap">
            <div className="menu" style={{width: `${sidebarWidth}px`}}>
               <Nav sidebarWidth={sidebarWidth} />
               <div className="sidebar_wrap" onMouseDown={startLeftResize}>
                  <div className="left_sidebar" />
               </div>
            </div>
            <main
               ref={mainRef}
               onScroll={handleMainScroll}
               onMouseEnter={() => setIsMainHovered(true)}
               onMouseLeave={() => setIsMainHovered(false)}
            >
               <Music keyword={keyword} />
               <Footer />
               {scrollBar.visible && (
                  <div
                     className={`custom-scrollbar ${isMainScrolled ? "scrolled" : ""} ${isMainHovered ? "show" : ""}`}
                     style={{
                        top: `${scrollBar.top}px`,
                        height: `${scrollBar.height}px`,
                     }}
                  />
               )}
            </main>
         </div>
         <Advert />
      </div>
   );
};

export default App;
