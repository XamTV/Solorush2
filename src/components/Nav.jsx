function Nav() {
  return (
    <nav className="bg-[#001b2e] sticky top-0 flex justify-between mx-[25%] my-5 px-20 py-2 rounded-3xl text-lg font-bold">
      <a className="hover:text-yellow-500" href="#Home">
        Home
      </a>
      <a className="hover:text-yellow-500" href="#Skills">
        Skills
      </a>
      <a className="hover:text-yellow-500" href="#About">
        About
      </a>
      <a className="hover:text-yellow-500" href="#Projects">
        Projects
      </a>
      <a className="hover:text-yellow-500" href="#Contact">
        Contact
      </a>
    </nav>
  );
}

export default Nav;
