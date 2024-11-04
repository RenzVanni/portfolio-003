import ContextTitle from "../components/ContextTitle";
import AboutMe from "../pages/AboutMe";
import Capstone from "../pages/Capstone";
import Projects from "../pages/Projects";

const Rightside = ({ isContact }: { isContact: boolean }) => {
  return (
    <div className="flex-1 md:h-full relative">
      {!isContact ? (
        <div className="md:overflow-y-scroll space-y-4 md:pr-2 h-full">
          <AboutMe />
          <hr className="bg-border " />
          <Capstone />
          <hr className="bg-border " />
          <Projects />
        </div>
      ) : (
        <div className="flex-1 space-y-4 pb-8">
          <ContextTitle>Contact Me</ContextTitle>
          <form action="" className="space-y-3 ">
            <div className="space-y-3 lg:flex lg:space-y-0 lg:space-x-3">
              <div className="flex flex-1 flex-col space-y-2">
                <label htmlFor="" className="text-white">
                  Name:
                </label>
                <input
                  type="text"
                  placeholder="ex: Jose Dela Cruz"
                  className="text-white bg-transparent p-3 rounded-md border border-border outline-none placeholder:text-white"
                />
              </div>

              <div className="flex flex-1 flex-col space-y-2">
                <label htmlFor="" className="text-white">
                  Email:
                </label>
                <input
                  type="email"
                  placeholder="ex: Jose@gmail.com"
                  className="text-white bg-transparent p-3 rounded-md border border-border outline-none placeholder:text-white"
                />
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="" className="text-white">
                Subject:
              </label>
              <input
                type="text"
                placeholder="ex: Coding"
                className="text-white bg-transparent p-3 rounded-md border border-border outline-none placeholder:text-white"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="" className="text-white">
                Context:
              </label>
              <textarea
                name=""
                id=""
                placeholder="ex: This is a message to you..."
                className="text-white bg-transparent p-3 rounded-md border border-border outline-none placeholder:text-white resize-none h-[150px]"
              ></textarea>
            </div>

            <div className="w-full lg:flex justify-end">
              <button
                type="button"
                className="bg-white text-main font-semibold w-full py-2 rounded-md lg:w-1/5"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}
      <div className="hidden md:block bg-gradient-to-t from-main to-transparent h-32 absolute bottom-0 right-0 left-0"></div>
    </div>
  );
};

export default Rightside;
