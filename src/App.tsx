import { useState } from "react";
import Header from "./components/Header";
import Leftside from "./layout/Leftside";
import Rightside from "./layout/Rightside";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import { Link } from "react-scroll";

const App = () => {
  const [isMenu, setIsMenu] = useState(false);

  return (
    <div
      id="Home"
      className={`relative bg-main min-w-[300px] overflow-y-scroll  flex flex-col overflow-x-hidden`}
    >
      <Header setIsMenu={setIsMenu} isMenu={isMenu} />
      <div className="flex-1 h-full p-4 space-y-4 items-start justify-center md:flex md:p-8 md:space-x-8 lg:px-36 md:space-y-0 overflow-y-scroll">
        <Leftside />
        <Rightside />
      </div>

      <div className="bg-gradient-to-t from-main to-transparent h-20 fixed bottom-0 right-0 left-0"></div>
      <div className="cursor-pointer">
        <Link to="Home" smooth={true} duration={500}>
          <MdOutlineKeyboardDoubleArrowUp className="text-white text-3xl z-10 fixed bottom-10 right-10 animate-bounce" />
        </Link>
      </div>
    </div>
  );
};

export default App;
