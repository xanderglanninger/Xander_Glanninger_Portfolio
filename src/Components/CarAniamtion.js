import "./CarAnimation.css";
import Lottie from "lottie-react";
import animationData from "./CarAnimation.json";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function MyCarAnimation() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="main-animation-container" data-aos="fade-left">
      <Lottie
        animationData={animationData}
        loop
        autoplay
        style={{ width: 200, height: 200 }}
      />
    </div>
  );
}

export default MyCarAnimation;
