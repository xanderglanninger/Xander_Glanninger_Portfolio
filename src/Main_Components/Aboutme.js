import "./Aboutme.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Lottie from "lottie-react";
import animationData from "./SEOanimation.json";

function AboutMe() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className="aboutme-main-container">
      <div className="aboutme-info-main-container">
        <h1 className="aboutme-main-header" data-aos="fade-right">
          Meet Xander
        </h1>
        <h2 className="aboutme-secondary-header" data-aos="fade-right">
          A Tech Enthusiast on a Quest for a Job
        </h2>
        <hr className="hr-line" data-aos="fade-right"></hr>
        <p className="aboutme-paragraph" data-aos="fade-right">
          {" "}
          I am a dedicated and ambitious individual currently pursuing a
          Bachelor's degree in Computing Science at Belgium Campus ITversity.
          With a strong foundation in programming and a passion for technology,
          I am committed to learning and growing in the field. My experience
          includes work in software testing, data collection, and website
          development, demonstrating my versatility and willingness to take on
          new challenges. I approach tasks with meticulous attention to detail
          and excel in problem-solving, backed by proficiency in a variety of
          programming languages and tools. I am confident in my ability to
          contribute positively to any team or project, and I am eager to
          continue expanding my skills and knowledge in the ever-evolving world
          of technology.
        </p>
      </div>
      <Lottie
        animationData={animationData}
        loop
        autoplay
        style={{ width: "70vh", height: "70vh" }}
        data-aos="fade-left"
      />
    </section>
  );
}

export default AboutMe;
