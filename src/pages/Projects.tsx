import data from "../data/projects";
import ContextTitle from "../components/ContextTitle";
import Icons from "../components/Icons";
import Context from "../components/Context";
import { NAVPROJECTS } from "../constants/navigation";

const Projects = () => {
  return (
    <div id={NAVPROJECTS} className="space-y-4">
      <ContextTitle>Projects</ContextTitle>
      <div className="space-y-4 md:space-y-8">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="relative flex justify-end rounded-md overflow-hidden "
            >
              <div className="absolute overflow-y-scroll inset-0 bg-gradient-to-t to-main from-header/20 md:bg-gradient-to-r">
                <div className=" p-3 md:w-1/2">
                  <p className="font-semibold ">{item?.title}</p>
                  <Context>{item?.context}</Context>

                  <div className="flex space-x-4 mb-3">
                    <div className="min-w-fit h-fit">
                      <p className="min-w-full">Tech Stack</p>
                    </div>
                    <Icons icons={item.techs} size="lg" />
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="min-w-fit h-fit">
                      <p className="min-w-full">Links</p>
                    </div>

                    <Icons
                      icons={item.linksIcon}
                      linkData={item.link}
                      size="lg"
                      link={true}
                    />
                  </div>
                </div>
              </div>
              <div className=" md:w-1/2 h-full">
                <img
                  src={item?.hero}
                  alt="images"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
