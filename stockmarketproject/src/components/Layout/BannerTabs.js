import React from "react";
import { IoChevronDown, IoDiamond } from "react-icons/io5";

const BannerTabs = ({ title = "", options = [], isFlag }) => {
  return (
    <div className="flex items-center group h-12 realtive">
      <div className="flex items-center gap-2 hover:text-[#FFC0CB] hover:underline hover:underline-offset-8 active:text-[#FFC0CB] active:underline active:underline-offset-8">
        {title} {isFlag ? <IoChevronDown /> : ""}
      </div>
      <div className="absolute h-auto w-[15rem] top-[180px] bg-white shadow-md p-2 text-black hidden group-hover:block">
        {options?.map((items, index) => (
          <div className="flex hover:bg-[#093134] hover:text-white px-3 py-1">
            {items.includes("!") ? (
              <div className="flex items-center gap-6">
                {items}
                <div className="justify-end text-[#FFD700]">
                  <IoDiamond />
                </div>
              </div>
            ) : (
              items
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerTabs;
