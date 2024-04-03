import myProjects from "../data/dataProject";
import "../styles/Projects.css";

function Projects() {
  return (
    <section className="projects-component">
      <h2 id="Projects"> MY PROJECTS</h2>
      <div className="projects-container">
        {myProjects.map((project) => (
          <article key={project.id}>
            <h1>{project.name} </h1>
            <img className="logo-skills" src={project.image} alt="" />
            <p>{project.desc} </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
