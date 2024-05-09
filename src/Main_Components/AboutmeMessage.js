import "./Aboutme.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function AboutMeMessage() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="aboutme-message-main-container">
      <h1 className="aboutme-message-main-header" data-aos="fade-right">
        Some things about me...
      </h1>
    </div>
  );
}

export default AboutMeMessage;
