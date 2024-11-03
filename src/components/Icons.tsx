import { IconType } from "react-icons";

const Icons = ({
  icons,
  size,
  link,
  linkData,
}: {
  icons: IconType[];
  size?: string;
  link?: boolean;
  linkData?: string[];
}) => {
  return (
    <div className="flex items-center gap-4 flex-wrap">
      {icons.map((item, index) => {
        const Icon = item;
        return link && linkData ? (
          <a key={index} href={linkData[index]} target="_blank">
            <Icon
              key={index}
              className={`text-white ${
                size ? `text-${size}` : "text-3xl"
              }hover:scale-110 cursor-pointer`}
            />
          </a>
        ) : (
          <Icon
            key={index}
            className={`text-white ${size ? `text-${size}` : "text-3xl"}`}
          />
        );
      })}
    </div>
  );
};

export default Icons;
