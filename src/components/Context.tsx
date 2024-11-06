import { motion } from "framer-motion";
import React from "react";

const Context = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ opacity: { duration: 0.8 } }}
      className="text-white text-sm mb-3"
    >
      {children}
    </motion.div>
  );
};

export default Context;
