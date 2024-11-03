import { LuMenu } from "react-icons/lu";
import { navigationData } from "../data/navigation";
import { Link } from "react-scroll";

const Header = ({
  setIsMenu,
}: {
  setIsMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="bg-header flex p-4 space-x-4">
      <div
        onClick={() => setIsMenu(true)}
        className="border border-border p-1.5 rounded-md md:hidden"
      >
        <LuMenu className="text-border" />
      </div>
      <p className="text-white">Renz Vanni M. Bato</p>

      <div className="hidden md:flex flex-1 items-center justify-center space-x-4">
        {navigationData.map((item) => (
          <Link
            key={item.id}
            to={item.navigate}
            smooth={true}
            offset={50}
            duration={500}
            className="text-white text-md font-semibold cursor-pointer hover:scale-105"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
