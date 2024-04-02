import "../styles/Skills.css";
import skillsList from "../data/data";

function Skills() {
  return (
    <section className="skills-component">
      <h2 id="Skills">MY SKILLS</h2>
      <div className="skill-container">
        {skillsList.map((skill) => (
          <article key={skill.id}>
            <img className="logo-skills" src={skill.image} alt="" />
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
