import data from "../data/capstone";
import ContextTitle from "../components/ContextTitle";
import Icons from "../components/Icons";
import { NAVCAPSTONE } from "../constants/navigation";
import Context from "../components/Context";
import Cards from "../components/Cards";

const Capstone = () => {
  return (
    <div id={NAVCAPSTONE} className="space-y-4">
      <ContextTitle>Capstone</ContextTitle>
      <div className="">
        <ContextTitle size="md">{data?.title}</ContextTitle>
        <Context>{data?.context}</Context>
        <div>
          <ContextTitle size="md">Tech Stack</ContextTitle>
          <Icons icons={data.tech} />
        </div>
      </div>

      <div className="xl:flex space-y-4 xl:space-y-0 xl:space-x-4">
        <div className="min-w-[300px] xl:w-1/2">
          <img
            loading="lazy"
            src={data?.hero}
            alt="image"
            className="w-full object-cover"
          />
        </div>
        <div className="flex-1 space-y-4 sm:space-y-0 sm:grid grid-cols-2 gap-4">
          {data.devs.map((item, index) => (
            <Cards key={index} name={item?.name} role={item?.role} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Capstone;
