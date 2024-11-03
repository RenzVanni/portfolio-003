import React from "react";

const ContextTitle = ({ children }: { children: React.ReactNode }) => {
  return <div className="text-white text-lg font-semibold">{children}</div>;
};

export default ContextTitle;
