import { motion } from "framer-motion";
import Icons from "./Icons";
import Context from "./Context";
import { Projects_Prop } from "../types/project_type";
import { DURATION } from "../constants/animations";
import ContextTitle from "./ContextTitle";

const ProjectCards = ({ item }: { item: Projects_Prop }) => {
  return (
    <motion.div
      initial={{ x: 50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{
        x: { type: "spring", stiffness: 50 },
        opacity: { duration: DURATION },
      }}
      className="relative flex justify-end rounded-md overflow-hidden "
    >
      <div className="absolute overflow-y-scroll inset-0 bg-gradient-to-t to-main from-header/20 md:bg-gradient-to-r">
        <div className=" p-3 md:w-1/2">
          <p className="font-semibold ">{item?.title}</p>
          <Context>{item?.context}</Context>

          <div className="flex space-x-4 mb-3">
            <div className="min-w-fit h-fit">
              <ContextTitle size="sm" isProject={true}>
                Tech Stack
              </ContextTitle>
            </div>
            <Icons icons={item.techs} size="lg" />
          </div>

          <div className="flex items-center space-x-4">
            <div className="min-w-fit h-fit">
              <ContextTitle size="sm" isProject={true}>
                Links
              </ContextTitle>
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
    </motion.div>
  );
};

export default ProjectCards;
