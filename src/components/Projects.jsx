import myProjects from "../data/dataProject";

import "../styles/Projects.css";

function Projects() {
  return (
    <>
      <div className="projetcard-container">
        <h2>Mes projets</h2>
        <section className="projectcard-component">
          {myProjects.map((project) => (
            <article className="projectcard-article" key={project.id}>
              <figure>
                <img
                  className="project-image"
                  src={project.image}
                  alt="project"
                />
              </figure>
              <figcaption className="projectcard-caption">
                <h2>{project.name}</h2>
                <p>{project.desc}</p>
                <div className="links">
                  <a href={project.github} target="_blank">
                    Repo Github
                  </a>
                </div>
              </figcaption>
            </article>
          ))}
        </section>
      </div>
      <div id="Contact"></div>
    </>
  );
}

export default Projects;
