import { useState } from "react";
import Header from "./components/Header";
import Leftside from "./layout/Leftside";
import Rightside from "./layout/Rightside";
import { IoIosExit } from "react-icons/io";
import { Link } from "react-scroll";
import { navigationData } from "./data/navigation";

const App = () => {
  const [isMenu, setIsMenu] = useState(false);
  return (
    <div className="relative bg-main min-w-[300px] h-auto md:h-screen flex flex-col">
      <Header setIsMenu={setIsMenu} />
      <div className="flex-1 h-full p-4 space-y-4 items-center justify-center md:flex md:p-8 md:space-x-8 lg:px-36 md:space-y-0 overflow-hidden">
        <Leftside />
        <Rightside />
      </div>
      {isMenu && (
        <div className="flex justify-end fixed inset-0 w-full h-full bg-black/80">
          <div className="bg-main w-2/3 p-4 ">
            <div className="flex items-center justify-between mb-8">
              <p>logo</p>
              <IoIosExit
                onClick={() => setIsMenu(false)}
                className="text-white text-3xl cursor-pointer hover:scale-105"
              />
            </div>
            <div className="flex flex-col items-center space-y-4">
              {navigationData.map((item) => (
                <Link
                  key={item.id}
                  to={item.navigate}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="text-white text-lg font-semibold cursor-pointer hover:scale-105"
                  onClick={() => setIsMenu(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
