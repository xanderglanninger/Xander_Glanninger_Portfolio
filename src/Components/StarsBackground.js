import React from "react";
import Lottie from "lottie-react";
import animationData from "./StarsBackground.json";

function StarsBackground() {
  return (
    <div className="main-animation-container">
      <Lottie animationData={animationData} loop autoplay />
    </div>
  );
}

export default StarsBackground;
