import AboutMe from "../pages/AboutMe";
import Capstone from "../pages/Capstone";
import ContactMe from "../pages/ContactMe";
import Projects from "../pages/Projects";

const Rightside = () => {
  return (
    <div className="flex-1 h-full relative space-y-4 md:pr-2">
      <AboutMe />
      <hr className="bg-border " />
      <Capstone />
      <hr className="bg-border " />
      <Projects />
      <hr className="bg-border " />
      <ContactMe />
    </div>
  );
};

export default Rightside;
