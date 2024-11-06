import Context from "../components/Context";
import ContextTitle from "../components/ContextTitle";
import Icons from "../components/Icons";
import data from "../data/intro";
const Leftside = () => {
  return (
    <div className="h-full relative md:w-[296px]">
      <div className="space-y-4 md:w-[296px] md:fixed">
        <div className="flex items-center space-x-4 md:block md:space-y-8 md:space-x-0">
          <div className="w-32 h-32 md:w-auto md:h-auto max-w-[296px] max-h-[296px] rounded-full overflow-hidden">
            <img
              loading="lazy"
              src="/photo/grad-pic-1.jpeg"
              alt="profile-pic"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <p className="flex-1 text-name text-2xl font-bold">{data?.name}</p>
        </div>
        <Context>{data?.context}</Context>
        <hr className="bg-white" />
        <ContextTitle>Tech Stack</ContextTitle>
        <Icons icons={data.tech} />
      </div>
    </div>
  );
};

export default Leftside;
