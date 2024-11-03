import data from "../data/AboutMe.json";
import { workData } from "../data/work";
import ContextTitle from "../components/ContextTitle";
import Context from "../components/Context";
import { NAVABOUTME } from "../constants/navigation";

const AboutMe = () => {
  return (
    <div id={NAVABOUTME} className="space-y-4 ">
      <ContextTitle>About Me</ContextTitle>
      <Context>{data?.context}</Context>
      <ContextTitle>Work Experience</ContextTitle>

      <div className="sm:grid grid-cols-2">
        {workData.map((item, index) => (
          <div
            key={index}
            className="border border-border flex justify-between p-3 rounded-md"
          >
            <div className="">
              <p className="text-white font-semibold mb-2">{item.role}</p>
              <p className="text-white mb-2">{item.company}</p>
              <p className="text-white text-[12px]">
                {item.startDate} - {item.endDate || "Present"}
              </p>
            </div>
            <div className="w-[70px] flex items-center">
              <img src={item.logo} alt="logo" className="w-full object-cover" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutMe;
