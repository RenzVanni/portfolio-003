import React from "react";
import AboutMe from "../pages/AboutMe";
import Capstone from "../pages/Capstone";
import Projects from "../pages/Projects";

const Rightside = () => {
  return (
    <div className="flex-1 h-full">
      <div className="overflow-y-scroll space-y-4 md:pr-2 h-full">
        <AboutMe />
        <hr className="bg-border " />
        <Capstone />
        <hr className="bg-border " />
        <Projects />
      </div>
    </div>
  );
};

export default Rightside;
