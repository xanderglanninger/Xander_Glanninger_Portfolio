import "./styles.css";
import UserInterface3D from "./Components/Userinterface3D";
import Navbar from "./Components/Navbar";
import AboutMe from "./Main_Components/Aboutme";
import MyCarAnimation from "./Components/CarAniamtion";
import AboutMeMessage from "./Main_Components/AboutmeMessage";
import Skills from "./Main_Components/Skills";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div>
        <Navbar />
      </div>
      <section className="main-hero-container">
        <div className="main-heading-container">
          <h1 className="main-header" data-aos="fade-right">
            Hi, I'm <a className="main-heading-name">Xander Glanninger</a> and
            this is my portfolio
          </h1>
          <div className="xander-img" data-aos="fade-right">
            <img
              src={require("./images/Xander_Glanninger_No_Scale.png")}
              alt="Xander Glanninger"
              className="xander-hero-image-container"
            />
          </div>
        </div>
        <UserInterface3D />
      </section>

      <section className="welcome-main-container">
        <h1 className="welcome-main-header" data-aos="fade-right">
          <span className="welcome-word">
            <a className="welcome-letters">W</a>
            <a className="welcome-letters">e</a>
            <a className="welcome-letters">l</a>
            <a className="welcome-letters">c</a>
            <a className="welcome-letters">o</a>
            <a className="welcome-letters">m</a>
            <a className="welcome-letters">e</a>
          </span>
          <span className="welcome-word">
            <a className="welcome-letters">t</a>
            <a className="welcome-letters">o</a>
          </span>
          <span className="welcome-word">
            <a className="welcome-letters">m</a>
            <a className="welcome-letters">y</a>
          </span>
          <span className="welcome-word">
            <a className="welcome-letters">P</a>
            <a className="welcome-letters">o</a>
            <a className="welcome-letters">r</a>
            <a className="welcome-letters">t</a>
            <a className="welcome-letters">f</a>
            <a className="welcome-letters">o</a>
            <a className="welcome-letters">l</a>
            <a className="welcome-letters">i</a>
            <a className="welcome-letters">o</a>
          </span>
        </h1>
        <MyCarAnimation />
        <div className="background-animation" data-aos="fade-right">
          Xander Glanninger
        </div>
      </section>

      <section className="aboutme-message-container">
        <AboutMeMessage />
      </section>

      <section className="aboutme-outward-container">
        <div className="aboutme-container">
          <AboutMe />
        </div>
      </section>

      <section className="skills-container">
        <Skills />
      </section>
    </>
  );
}
