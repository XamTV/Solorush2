import "../styles/Skills.css";
import skillsList from "../data/data";

function Skills() {
  return (
    <section id="Skills" className="skills-component">
      <h2>MY SKILLS</h2>
      <div className="skill-container">
        {skillsList.map((skill) => (
          <article key={skill.id}>
            <img src={skill.image} alt="" />
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
