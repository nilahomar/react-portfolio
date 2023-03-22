import React from "react";
import "./about.css";
import Nilaa from "../../assets/about.svg";

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={Nilaa} alt="About me illustration" />
          </div>
        </div>
        <div className="about_content">
          <article className="about_card">
            <p>
              I am a creative Full Stack Developer focusing on designing and
              developing responsive web applications. I just completed an
              Intensive WebDevelopment BootCamp at{" "}
              <a href="https://www.lewagon.com/">Le Wagon </a> Berlin. As a
              beginner in the industry, I am looking for a team to work with to
              solve challenging and exciting problems and create world-class
              products.
            </p>
            <p>
              My core skill sets are that I am a Quick Learner, Team-player and
              I am open to challenges. And my technical skills are as you can
              see
              <a href="#skills"> below</a>
            </p>
            <p>
              My journey as a software developer started with self-learning on{" "}
              <a
                href="https://www.freecodecamp.org/learn/responsive-web-design/"
                target="_blank"
                rel="noreferrer"
              >
                FreeCodeCamp
              </a>
              . In order to bring more structure to my learning, I joined{" "}
              <a
                href="https://digitalcareerinstitute.org/courses/web-development-course"
                target="_blank"
                rel="noreferrer"
              >
                Digital Career Institute
              </a>{" "}
              for the Full-stack Developer course. FreeCodeCamp and Digital
              Career Institute have accelerated this journey and I've been able
              to work on various software projects both independently and as
              part of the program.
            </p>
            <p>
              I am looking for something interesting and challenging where I can
              use my skills to solve meaningful problems, learn from colleagues.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
