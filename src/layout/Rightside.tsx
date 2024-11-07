import AboutMe from "../pages/AboutMe";
import Capstone from "../pages/Capstone";
import ContactMe from "../pages/ContactMe";
import Projects from "../pages/Projects";

const Rightside = () => {
  return (
    <div className="flex-1 h-full relative space-y-4 md:pr-2">
      <AboutMe />
      <hr className="border border-border " />
      <Capstone />
      <hr className="border border-border " />
      <Projects />
      <hr className="border border-border " />
      <ContactMe />
    </div>
  );
};

export default Rightside;
