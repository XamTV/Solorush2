import PropTypes from "prop-types";

function Nav({ isDarkTheme, setIsDarkTheme }) {
  return (
    <nav
      className={` bg-[#001b2e] scroll-smooth sticky top-0 z-10 flex justify-between mx-[25%] my-5 px-20 py-2 rounded-3xl text-lg font-bold 
    ${isDarkTheme ? "bg-[#001b2e]" : "border-black bg-[#adb6c4] text-black"}`}
    >
      <a className="hover:text-yellow-500 pt-2" href="#Home">
        Home
      </a>
      <a className="hover:text-yellow-500 pt-2" href="#Skills">
        Skills
      </a>

      <a className="hover:text-yellow-500 pt-2" href="#Projects">
        Projects
      </a>
      <a className="hover:text-yellow-500 pt-2" href="#Contact">
        Contact
      </a>
      <input
        type="checkbox"
        checked={isDarkTheme ? "checked" : ""}
        onClick={() => setIsDarkTheme(!isDarkTheme)}
      />
    </nav>
  );
}
Nav.propTypes = {
  isDarkTheme: PropTypes.bool.isRequired,
  setIsDarkTheme: PropTypes.func.isRequired,
};
export default Nav;
