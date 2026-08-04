import Frontend from "../Layout/Frontend";
import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";
function Website() {
  return (
    <Frontend>
      <div className="w-full h-auto">
        <Hero />
        <Projects />
        <Skills/>
        <About/>
        <Contact/>
      </div>
    </Frontend>
  );
}

export default Website;
