import "../styles/Contact.css";
import github50 from "../assets/github50.png";
import mail50 from "../assets/mail50.png";
import linkedin50 from "../assets/linkedin50.png";
function Contact() {
  return (
    <section className="contact-component">
      <h2 id="Contact">CONTACTS</h2>
      <div className="contact-container">
        <form className="form">
          <p className="name">
            <input
              name="name"
              type="text"
              className="feedback-input"
              placeholder="Name"
              id="name"
            />
          </p>
          <p className="email">
            <input
              name="email"
              type="text"
              className="feedback-input"
              id="email"
              placeholder="Email"
            />
          </p>
          <p className="text">
            <textarea
              name="text"
              className="feedback-input"
              id="comment"
              placeholder="Comment"
            ></textarea>
          </p>
          <div className="submit">
            <input type="submit" value="SEND!" id="button-blue" />
          </div>
        </form>
        <div className="socials">
          <h2>SOCIALS</h2>
          <a href="https://github.com/XamTV" target="_blank">
            <img src={github50} alt="" />
          </a>{" "}
          <a href="maximemaussion30@gmail.com" target="_blank">
            <img src={mail50} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/maxime-maussion-02345425a/"
            target="_blank"
          >
            <img src={linkedin50} alt="" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
