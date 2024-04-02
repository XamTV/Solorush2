import ProfilePic from "../assets/ProfilePic.jpg";

function About() {
  return (
    <section className="flex flex-col bg-red-500 h-screen">
      <img
        className="w-[300px] self-center rounded-full"
        src={ProfilePic}
        alt="ZZZ"
      />
      <h1 className="text-center max-lg:text-5xl max-lg:px-8 text-animation">
        Hello
      </h1>
    </section>
  );
}

export default About;
