import Spline from "@splinetool/react-spline";
import "./Skills.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Skills() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section>
      <div className="skills-message-container" data-aos="fade-right">
        <h1>My Skills</h1>
        <img src={require("../images/down.png")} className="down-arrow-img" />
        <div class="background-hover-animation">MY SKILLS</div>
      </div>
      <div className="main-container" data-aos="fade-left">
        <Spline scene="https://prod.spline.design/yTlKRtqoL41ejtbG/scene.splinecode" />
      </div>
    </section>
  );
}

export default Skills;
