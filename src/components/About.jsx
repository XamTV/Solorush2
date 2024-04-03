import ProfilePic from "../assets/ProfilePic.jpg";
import github from "../assets/github.png";
import mail from "../assets/mail.png";
import "../styles/About.css";

function About() {
  return (
    <section id="Home" className="flex flex-col  h-screen ">
      <img
        className="w-[300px] self-center rounded-full mt-5   "
        src={ProfilePic}
        alt="ZZZ"
      />
      <h1 className="text-3xl m-5">Hello, I&apos;m Maxime !</h1>

      <h2 className="text-xl m-5  ">
        web & mobile web developer based in France{" "}
      </h2>
      <p className="mx-[25%] m-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum sequi
        nulla aliquam maxime omnis tenetur hic cum? Error eligendi quasi
        reprehenderit vero, laborum esse blanditiis officia sit, delectus unde
        quaerat quam nemo culpa, vitae maiores quae laudantium placeat expedita
        consequatur excepturi? Iure, ullam totam dolore facere maiores cum quas
        perspiciatis quod aliquid est atque quaerat sequi quis illo tempore
        laboriosam praesentium? Excepturi doloribus eos, beatae dolorem
        architecto magnam ut veritatis similique iure rem et maiores. Fuga,
        aperiam nesciunt? Totam esse provident, consectetur veniam doloremque
        dolorum neque alias facere nemo incidunt iste magnam culpa illum iusto
        veritatis? Cum sequi tempore aliquam.
      </p>
      <div className="flex self-center">
        <div className="hover:animate-bounce">
          <a
            className="bg-yellow-500 py-2 px-3 m-2 rounded-3xl  font-bold  "
            href="#Contact"
          >
            <img className="logo pb-1" src={mail} alt="" /> Contact
          </a>{" "}
        </div>
        <div className="hover:animate-bounce">
          <a
            className="bg-yellow-500 py-2 px-3 m-2 rounded-3xl  font-bold"
            href="#Projects"
          >
            <img className="logo pb-1" src={github} alt="" /> My Projects
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
