import React from "react";

const CardSection = ({ children }) => {
  return (
    <div className="w-full h-auto bg-white rounded-xl shadow-[0_5px_5px_0_rgba(0,0,0,0.2)] p-5">
      {children}
    </div>
  );
};

export default CardSection;
