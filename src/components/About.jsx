import ProfilePic from "../assets/ProfilePic.jpg";
import github from "../assets/github.png";
import mail from "../assets/mail.png";
import Lottie from "react-lottie";
import Hello from "../assets/hello.json";
import "../styles/About.css";

function About() {
  const helloOptions = {
    loop: true,
    autoplay: true,
    animationData: Hello,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <section className="about-container ">
      <img className="about-image" src={ProfilePic} alt="ZZZ" />
      <h1 className="text-3xl m-5 font-bold flex items-center	justify-center ">
        Salut, moi c&apos;est Maxime !{" "}
        <div>
          <Lottie options={helloOptions} height={100} width={100} />
        </div>
      </h1>{" "}
      <h2 className="text-xl m-5  ">Développeur web et web Mobile </h2>
      <p className="mx-[25%] m-10">
        Je suis actuellement détenteur d&apos;un titre RNCP niveau V (équivalent
        bac+2) Développeur web et Web Mobile . J&apos;ai également été admis
        dans la formation Concepteur développeur d&apos;application en
        partenariat avec la Wild Code School. Je suis désormais à la recherche
        d&apos;un contrat d&apos;apprentissage d&apos;une durée de 15 mois à
        compter de septembre 2024.
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
            <img className="logo pb-1" src={github} alt="" /> Mes Projets
          </a>
        </div>
      </div>
      <div id="Skills"></div>
    </section>
  );
}

export default About;
