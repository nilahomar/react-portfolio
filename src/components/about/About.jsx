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
            <img src={Nilaa} alt="About Image" />
          </div>
        </div>
        <div className="about_content">
            <article className="about_card">
              <p>
                I am a Front-end Developer based in Berlin who is
                passionate about fixing our day to day problems by the applied
                use of Technology. Since more and more businesses are digitising
                their medium of communication with their customers, I understand
                the demand for the skills required and ready to take up the
                challenge.
              </p>
              <p>
                My core skill sets are that I am a Quick Learner, Team-player
                and I am open to challenges. And my technical skills are HTML,
                CSS and JavaScript and their related frameworks.
              </p>
              <p>
                My journey as a software developer started with self-learning on
                <a
                  href="https://www.freecodecamp.org/learn/responsive-web-design/"
                  target="_blank" rel="noreferrer"
                >
                  Freecodecamp
                </a>
                . In order to bring more structure to my learning, I joined{" "}
                <a
                  href="https://digitalcareerinstitute.org/courses/web-development-course"
                  target="_blank" rel="noreferrer"
                >
                  Digital Career Institute
                </a>{" "}
                for the Full-stack Developer course. Freecodecamp and Digital
                Career Institute have accelerated this journey and I've been
                able to work on various software projects both independently and
                as part of the program.
              </p>
              <p>
                I am looking for something interesting and challenging where I
                can use my skills to solve meaningful problems, learn from
                colleagues.
              </p>
            </article>
          </div>
        </div>
    </section>
  );
};

export default About;
