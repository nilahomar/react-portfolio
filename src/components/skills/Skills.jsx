import React from "react";
import "./skills.css";
import { BsPatchCheckFill } from "react-icons/bs";

function Skills() {
  return (
    <section id="skills">
      <h2>My Core Skills</h2>
      <div className="container skills_container">
        <div className="skills_frontend">
          <h3>Front-end Development</h3>
          <div className="skills_content">
            <article className="skills_details">
              <BsPatchCheckFill />
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill />
              <h4>CSS</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill />
              <h4>SASS</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill />
              <h4>JavaScript</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill />
              <h4>REACT</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill />
              <h4>Bootstrap</h4>
              <small className="text-light">Experienced</small>
            </article>
          </div>
        </div>
        {/* end of front-end */}
        <div className="skills_content">
          <p>
            I am specialised in developing responsive websites for businesses
            and for individuals. Websites don't have to be static, I love making
            pages come to life. My highest priority is for Fast load times and
            lag free interaction.
          </p>
          <p>
            I have a product-oriented development mindset and a responsible
            ownership attitude towards software components.
          </p>
          <ul class="core-skills">
            <li>Go the extra-mile</li>
            <li>Results-oriented</li>
            <li>Team-player</li>
            <li>Caring</li>
            <li>Positive mindset</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
