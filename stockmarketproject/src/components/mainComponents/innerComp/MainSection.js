import React from "react";
import NepseIndex from "./NepseIndex";
import Summary from "./Summary";

const MainSection = () => {
  const darkModeEnabled = (state) => state.darkModeSlice;
  return (
    <div className=" w-full h-full px-3 py-3 bg-slate-100 grid grid-cols-12 grid-row-12 gap-4">
      <div className="col-span-8 row-span-7">
        <NepseIndex />
      </div>
      <div className="col-span-4 row-span-4">
        <Summary />
      </div>
    </div>
  );
};

export default MainSection;
