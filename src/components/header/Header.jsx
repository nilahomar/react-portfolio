import React from "react";
import "./header.css";
import HeaderSocial from "./HeaderSocial";
import Me from "../../assets/me.svg";

function Header() {
  return (
    <div className="container intro">
      <div className="intro-left">
        <div className="intro-left-wrapper">
          <h2 className="intro-hello">Hello, My name is </h2>
          <h1 className="intro-name">Nila Homar</h1>
          <div className="intro-title">
            <div className="intro-title-wrapper">
              <div className="intro-title-item">Front-end Developer</div>
              <div className="intro-title-item">Based in Berlin</div>
            </div>
          </div>
          <div className="cta">
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
          <HeaderSocial />
        </div>
      </div>
      <div className="intro-right">
        <div className="intro_image">
          <img src={Me} alt="" className="intro-img" />
        </div>
      </div>
    </div>
  );
}

export default Header;
