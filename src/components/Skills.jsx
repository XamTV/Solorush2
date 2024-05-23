import "../styles/Skills.css";
import skillsList from "../data/data";

function Skills() {
  const preventDragHandler = (e) => {
    e.preventDefault();
  };
  return (
    <section
      className="skills-component"
      onDragStartCapture={preventDragHandler}
    >
      <h2>MY SKILLS</h2>
      <div className="skill-container">
        {skillsList.map((skill) => (
          <article className={`skill`} key={skill.id}>
            <img
              src={skill.image}
              alt=""
              style={{ animationDelay: `${skill.id * 0.5}s` }}
            />
          </article>
        ))}
      </div>
      <div id="Projects"></div>
    </section>
  );
}

export default Skills;
