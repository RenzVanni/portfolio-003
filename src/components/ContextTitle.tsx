import { motion } from "framer-motion";
import React from "react";
import { DURATION } from "../constants/animations";

const ContextTitle = ({
  children,
  size,
  isProject,
}: {
  children: React.ReactNode;
  size?: string;
  isProject?: boolean;
}) => {
  return (
    <motion.div
      initial={{ x: size ? 0 : 50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{
        x: { type: "spring", stiffness: 50 },
        opacity: { duration: DURATION },
      }}
      className={`text-white ${
        size ? `text-${size}` : "text-xl"
      } font-semibold w-fit ${!isProject && "mb-1"}`}
    >
      {children}
    </motion.div>
  );
};

export default ContextTitle;
