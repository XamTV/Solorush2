import linkedin from "../assets/linkedin50.png";
import github from "../assets/github50.png";
import mail from "../assets/mail50.png";
import "../styles/Contact.css";

function Contact() {
  return (
    <section className="wrapper">
      <a
        href="https://www.linkedin.com/in/maxime-maussion/"
        className="icon linkedin"
        target="_blank"
      >
        <img src={linkedin} alt="" />
      </a>
      <a
        href="https://github.com/XamTV"
        className="icon github"
        target="_blank"
      >
        <img src={github} alt="" />
      </a>
      <a href="mailto:maximemaussion30@gmail.com" className="icon mail ">
        <img src={mail} alt="" />
      </a>
    </section>
  );
}

export default Contact;
