import { NA } from "../constants/default";

const Cards = ({
  name = NA,
  role = NA,
  company = NA,
  isWork,
  startDate = NA,
  endDate = NA,
  logo,
}: {
  name?: string;
  role?: string;
  company?: string;
  isWork?: boolean;
  startDate?: string;
  endDate?: string;
  logo?: string;
}) => {
  return (
    <div className="border border-border flex justify-between p-3 rounded-md">
      <div className="">
        <p className="text-white font-semibold mb-2">{isWork ? role : name}</p>
        <p className="text-white mb-2">{isWork ? company : role}</p>
        {isWork && (
          <p className="text-white text-[12px]">
            {startDate} - {endDate || "Present"}
          </p>
        )}
      </div>
      {isWork && (
        <div className="w-[70px] flex items-center">
          <img src={logo} alt="logo" className="w-full object-cover" />
        </div>
      )}
    </div>
  );
};

export default Cards;
