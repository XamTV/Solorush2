import Logo from "../assets/Logo.png";

function Nav() {
  return (
    <nav className="bg-[#001b2e] scroll-smooth sticky top-0 flex justify-between mx-[25%] my-5 px-20 py-2 rounded-3xl text-lg font-bold">
      <a className="hover:text-yellow-500 pt-2" href="#Home">
        Home
      </a>
      <a className="hover:text-yellow-500 pt-2" href="#Skills">
        Skills
      </a>
      <a className="hover:text-yellow-500 w-10 ml-2 pt-1" href="#About">
        <img src={Logo} alt="" />
      </a>
      <a className="hover:text-yellow-500 pt-2" href="#Projects">
        Projects
      </a>
      <a className="hover:text-yellow-500 pt-2" href="#Contact">
        Contact
      </a>
    </nav>
  );
}

export default Nav;
