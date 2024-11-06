import { motion } from "framer-motion";
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
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ opacity: { duration: 0.8 } }}
          >
            <a key={index} href={linkData[index]} target="_blank">
              <Icon
                key={index}
                className={`text-white ${
                  size ? `text-${size}` : "text-3xl"
                }hover:scale-110 cursor-pointer`}
              />
            </a>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ opacity: { duration: 1, delay: 0.3 } }}
          >
            <Icon
              key={index}
              className={`text-white ${size ? `text-${size}` : "text-3xl"}`}
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default Icons;
