import Context from "../components/Context";
import ContextTitle from "../components/ContextTitle";
import Icons from "../components/Icons";
import data from "../data/intro";
const Leftside = () => {
  return (
    <div className="md:w-[296px] space-y-4">
      <div className="flex items-center space-x-4 md:block md:space-y-8 md:space-x-0">
        <div className="min-w-[25px] w-[115px] md:w-auto max-w-[296px]  rounded-full overflow-hidden">
          <img
            src="/images/eun.jpeg"
            alt="profile-pic"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-name text-2xl font-bold">{data?.name}</p>
      </div>
      <Context>{data?.context}</Context>
      <hr className="bg-white" />
      <ContextTitle>Tech Stack</ContextTitle>
      <Icons icons={data.tech} />
    </div>
  );
};

export default Leftside;
