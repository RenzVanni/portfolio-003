import data from "../data/projects";
import ContextTitle from "../components/ContextTitle";
import { NAVPROJECTS } from "../constants/navigation";
import Cards from "../components/Cards";

const Projects = () => {
  return (
    <div id={NAVPROJECTS} className="space-y-4">
      <ContextTitle>Projects</ContextTitle>
      <div className="space-y-4 md:space-y-8 overflow-x-hidden">
        {data.map((item, index) => {
          return <Cards item={item} index={index} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
