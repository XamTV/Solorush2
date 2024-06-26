import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import { useState } from "react";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  return (
    <>
      <Nav isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
