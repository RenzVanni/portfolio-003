import { motion } from "framer-motion";
import React from "react";
import { DURATION } from "../constants/animations";

const Context = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ opacity: { duration: DURATION } }}
      className="text-white text-sm mb-3 "
    >
      {children}
    </motion.div>
  );
};

export default Context;
