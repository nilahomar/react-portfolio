import React from "react";
import "./projects.css";
import data from './project'


function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="container project_container">
        {data.map(({ id, image, title, content, github, demo }) => {
          return (
            <article key={id} className="project_item">
              <div className="project_item_image">
                <img key={image} src={image} alt={title}/>
              </div>
              <h3 key={title}>{title}</h3>
              <p key={content}>{content}</p>
              <div className="project_item_cta">
                <a key={github}
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  Github
                </a>
                <a key={demo}
                  href={demo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
