import { Routes, Route, useLocation } from "react-router-dom";
//importing react slick slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { animateScroll } from "react-scroll";

import { useEffect } from "react";
import ComingSoon from "./components/pages/ComingSoon";

function App() {
  const directory = useLocation();
  useEffect(() => {
    animateScroll.scrollToTop({
      duration: 0,
    });
  }, [directory.pathname]);

  return (
    <div className="w-full bg-black text-white font-poppins">
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<ComingSoon />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  )
}

export default App
