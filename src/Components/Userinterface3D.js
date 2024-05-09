import Spline from "@splinetool/react-spline";
import "./Userinterface3D.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function UserInterface3D() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="main-container" data-aos="fade-left">
      <Spline scene="https://prod.spline.design/jko1VZNDzX-2pARb/scene.splinecode" />
    </div>
  );
}

export default UserInterface3D;
