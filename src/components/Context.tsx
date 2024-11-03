import React from "react";

const Context = ({ children }: { children: React.ReactNode }) => {
  return <div className="text-white text-sm mb-3">{children}</div>;
};

export default Context;
