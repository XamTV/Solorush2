import myProjects from "../data/dataProject";

import "../styles/Projects.css";

function Projects() {
  return (
    <>
      <h2 id="Projects">My Projects</h2>
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
              <div>
                <a href={project.github} target="_blank">
                  Repo Github
                </a>
                <a href={project.link} target="_blank">
                  Démo
                </a>
              </div>
            </figcaption>
          </article>
        ))}
      </section>
      <div id="Contact"></div>
    </>
  );
}

export default Projects;
