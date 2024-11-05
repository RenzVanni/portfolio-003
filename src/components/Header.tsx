import { LuMenu } from "react-icons/lu";
import { navigationData } from "../data/navigation";
import { Link } from "react-scroll";
import { IoIosExit } from "react-icons/io";
import { Logo1, Logo2 } from "../assets/logo";

const Header = ({
  setIsMenu,
  isMenu,
}: {
  setIsMenu: React.Dispatch<React.SetStateAction<boolean>>;
  isMenu: boolean;
}) => {
  return (
    <div>
      <div className="bg-header flex items-center p-4 space-x-4 ">
        <div
          onClick={() => setIsMenu(true)}
          className="border border-border cursor-pointer hover:scale-105 p-1.5 rounded-md md:hidden"
        >
          <LuMenu className="text-border" />
        </div>

        <Logo2 />

        <div className="hidden md:flex flex-1 items-center justify-center space-x-4">
          {navigationData.map((item) => (
            <Link
              key={item.id}
              to={item.navigate}
              smooth={true}
              duration={500}
              className="text-white text-md font-semibold cursor-pointer hover:scale-105"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      {isMenu && (
        <div className="flex justify-end z-10 fixed inset-0 w-full h-full bg-black/80">
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

export default Header;
