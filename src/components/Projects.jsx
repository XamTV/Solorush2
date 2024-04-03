import myProjects from "../data/dataProject";
import "../styles/Projects.css";
import StarRating from "./StarRating";

function Projects() {
  return (
    <section id="Projects" className="projects-component">
      <h2> MY PROJECTS</h2>
      <div className="projects-container">
        {myProjects.map((project) => (
          <article key={project.id}>
            <h1>{project.name} </h1>
            <img className="logo-skills" src={project.image} alt="" />
            <p>{project.desc} </p>
            <div className="rating">
              <StarRating />
            </div>
            <a href={project.link} target="_blank">
              DEMO
            </a>
            <a href={project.github} target="_blank">
              CODE
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
