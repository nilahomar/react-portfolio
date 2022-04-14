import React from "react";
import "./projects.css";
import PhotoProject from "../../assets/photography.png";
import foodProject from "../../assets/food-project.png";
import BurgerProject from "../../assets/burger.png";
import GridLayout from "../../assets/grid-layout-project.png";

const data = [
  {
    id: 1,
    image: PhotoProject,
    title: "Nila's Photography",
    content:
      "A Photography project created with HTML and CSS where I have portrayed my Food and Still photographs. This is one of the first project I have done since I started my development career.",
    github: "https://github.com/nilahomar/dci-project",
    demo: "https://nilahomar.github.io/dci-project/",
  },
  {
    id: 2,
    image: foodProject,
    title: "Simple Food Menu",
    content:
      "A Photography project created with HTML and CSS where I have portrayed my Food and Still photographs. This is one of the first project I have done since I started my development career.",
    github: "https://github.com/nilahomar/project-food",
    demo: "https://nilahomar.github.io/project-food/",
  },
  {
    id: 3,
    image: BurgerProject,
    title: "Benny's Burger",
    content:
      "Benny's Burger restaurant. A project to demonstrate skills in HTML5, CSS3, Flexbox and SCSS. This was very interesting to learn and incorporate Flexbox and SCSS.",
    github: "https://github.com/nilahomar/project-bennys-burger",
    demo: "https://nilahomar.github.io/project-bennys-burger/",
  },
  {
    id: 4,
    image: GridLayout,
    title: "Grid Layout",
    content:
      "An image Gallery created with CSS Grid layout. I learned a lot about Grid with this project.",
    github: "https://github.com/nilahomar/project-grid-layout",
    demo: "https://nilahomar.github.io/project-grid-layout",
  },
];

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
