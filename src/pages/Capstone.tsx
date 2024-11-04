import data from "../data/capstone";
import ContextTitle from "../components/ContextTitle";
import Icons from "../components/Icons";
import { NAVCAPSTONE } from "../constants/navigation";

const Capstone = () => {
  return (
    <div id={NAVCAPSTONE} className="space-y-4">
      <ContextTitle>Capstone</ContextTitle>
      <div className="">
        <p className="text-white text-md font-semibold">{data?.title}</p>
        <p className="text-white text-sm mb-3">{data?.context}</p>
        <div>
          <p className="font-semibold mb-3">Tech Stack</p>
          <Icons icons={data.tech} />
        </div>
      </div>

      <div className="xl:flex space-y-4 xl:space-y-0 xl:space-x-4">
        <div className="min-w-[300px] xl:w-1/2">
          <img src={data?.hero} alt="image" className="w-full object-cover" />
        </div>
        <div className="flex-1 space-y-4 sm:space-y-0 sm:grid grid-cols-2 gap-4">
          {data.devs.map((item, index) => (
            <div key={index} className="border border-border p-3 rounded-md">
              <div></div>
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-white">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Capstone;
