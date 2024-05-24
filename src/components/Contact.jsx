import linkedin from "../assets/linkedin50.png";
import mail from "../assets/mail50.png";
import "../styles/Contact.css";

function Contact() {
  return (
    <section className="wrapper">
      <a href="#" className="icon linkedin">
        <img src={linkedin} alt="" />
      </a>
      <a href="#" className="icon github">
        <img src={linkedin} alt="" />
      </a>
      <a href="mailto:maximemaussion30@gmail.com" className="icon mail ">
        <img src={mail} alt="" />
      </a>
    </section>
  );
}

export default Contact;
