import data from "../data/AboutMe.json";
import { workData } from "../data/work";
import ContextTitle from "../components/ContextTitle";
import Context from "../components/Context";
import { NAVABOUTME } from "../constants/navigation";
import Cards from "../components/Cards";

const AboutMe = () => {
  return (
    <div id={NAVABOUTME} className="space-y-4 ">
      <ContextTitle>About Me</ContextTitle>
      <Context>{data?.context}</Context>
      <ContextTitle>Work Experience</ContextTitle>

      <div className="sm:grid grid-cols-2">
        {workData.map((item, index) => (
          <Cards
            key={index}
            role={item?.role}
            company={item?.company}
            startDate={item?.startDate}
            endDate={item?.endDate}
            logo={item?.logo}
            isWork={true}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutMe;
