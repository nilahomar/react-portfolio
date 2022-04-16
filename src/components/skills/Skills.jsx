import React from "react";
import "./skills.css";
import { BsPatchCheckFill } from "react-icons/bs";

// const data = [
//   {
//     id:1,
//     icon: { BsPatchCheckFill },
//     content: ["Go the extra-mile","Results-oriented","Team-player","Caring","Positive mindset"]
//   }
// ]


function Skills() {
  return (
    <section id="skills">
      <h2>My Core Skills</h2>
      <div className="container skills_container">
        <div className="skills_frontend">
          <h3>Front-end Development</h3>
          <div className="skills_content">
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details_icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details_icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details_icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details_icon" />
              <div>
                <h4>SASS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details_icon" />
              <div>
                <h4>REACT</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details_icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/* end of front-end */}
        <div className="skills_contents">
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
          <article className="skills_details">
            <BsPatchCheckFill className="skills_details_icon" />
            <div>
              <h4>Go the extra-mile</h4>
            </div>
          </article>
          <article className="skills_details">
            <BsPatchCheckFill className="skills_details_icon" />
            <div>
              <h4>Results-oriented</h4>
            </div>
          </article>
          <article className="skills_details">
            <BsPatchCheckFill className="skills_details_icon" />
            <div>
              <h4>Team-player</h4>
            </div>
          </article>
          <article className="skills_details">
            <BsPatchCheckFill className="skills_details_icon" />
            <div>
              <h4>Caring</h4>
            </div>
          </article>
          <article className="skills_details">
            <BsPatchCheckFill className="skills_details_icon" />
            <div>
              <h4>Positive mindset</h4>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Skills;
