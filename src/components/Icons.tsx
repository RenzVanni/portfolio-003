import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { DURATION } from "../constants/animations";

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
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ opacity: { duration: DURATION } }}
          >
            <a href={linkData[index]} target="_blank">
              <Icon
                className={`text-white ${
                  size ? `text-${size}` : "text-3xl"
                }hover:scale-110 cursor-pointer`}
              />
            </a>
          </motion.div>
        ) : (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ opacity: { duration: DURATION } }}
          >
            <Icon
              className={`text-white ${size ? `text-${size}` : "text-3xl"}`}
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default Icons;
