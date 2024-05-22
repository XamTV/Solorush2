import "../styles/Contact.css";

function Contact() {
  return (
    <section className="contact-component">
      <h2>CONTACTS</h2>
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
      </div>
    </section>
  );
}

export default Contact;
