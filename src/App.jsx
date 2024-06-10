import NavBar from "../src/Components/nav/NavBar";
import Hero from "../src/Pages/Hero";
import Projects from "../src/Pages/Projects";
import About from "../src/Pages/About";
import Skills from "../src/Pages/Skills";
import Career from "../src/Pages/Career";
import "react-vertical-timeline-component/style.min.css";
// import Contact from "../src/Pages/Contact";
// import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Career />
      {/* <Contact /> */}
    </>
  );
}

export default App;
