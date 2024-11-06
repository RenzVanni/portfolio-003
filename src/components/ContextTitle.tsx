import { motion } from "framer-motion";
import React from "react";

const ContextTitle = ({
  children,
  size,
}: {
  children: React.ReactNode;
  size?: string;
}) => {
  return (
    <motion.div
      initial={{ x: size ? 0 : 50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{
        x: { type: "spring", stiffness: 50 },
        opacity: { duration: 0.5 },
      }}
      className={`text-white ${
        size ? `text-${size}` : "text-lg"
      } font-semibold w-fit`}
    >
      {children}
    </motion.div>
  );
};

export default ContextTitle;
