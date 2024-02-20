import React from "react";
import CardSection from "../CardSection";
import LineChart, { generateMarketData } from "../LineChart";

const NepseIndex = () => {
  return (
    <CardSection>
      <div className="flex flex-col">
        <div className="flex  justify-between px-6 items-center">
          <div className="flex flex-col">
            <div className="text-2xl font-bold">Nepse Index</div>
            <div className="text-lg font-bold text-green-600">
              2034.78 -0.03 0%
            </div>
          </div>
          <div className="flex h-fit py-2 gap-3">
            <div className="flex items-center">5.12 lakh</div>
            <div className="flex items-center">Feb 20 | 10:45 AM</div>
            <div className="flex items-center h-10 w-24 justify-center bg-slate-100 border-[3px] border-blue-300 rounded-3xl">
              <button className="h-6 w-16 text-white font-semibold blur-blur-1 bg-green-600  rounded-2xl transition ease-in-out duration-300">
                Live
              </button>
            </div>
            <button className="flex items-center">refresh</button>
          </div>
        </div>
        <div className="flex  justify-end">
          <div className="flex gap-2">
            <div className="flex h-10 w-10 justify-center items-center active:text-white bg-slate-100 active:bg-[#093134] rounded-lg">
              1D
            </div>
            <div className="flex h-10 w-10 justify-center items-center active:text-white bg-slate-100 active:bg-[#093134] rounded-lg">
              1W
            </div>
            <div className="flex h-10 w-10 justify-center items-center active:text-white bg-slate-100 active:bg-[#093134] rounded-lg">
              1M
            </div>
            <div className="flex h-10 w-10 justify-center items-center active:text-white bg-slate-100 active:bg-[#093134] rounded-lg">
              3M
            </div>
            <div className="flex h-10 w-10 justify-center items-center active:text-white bg-slate-100 active:bg-[#093134] rounded-lg">
              6M
            </div>
            <div className="flex h-10 w-10 justify-center items-center active:text-white bg-slate-100 active:bg-[#093134] rounded-lg">
              1Y
            </div>
            <div className="flex h-10 w-10 justify-center items-center active:text-white bg-slate-100 active:bg-[#093134] rounded-lg">
              5Y
            </div>
            <div className="flex h-10 w-10 justify-center items-center active:text-white bg-slate-100 active:bg-[#093134] rounded-lg">
              ALL
            </div>
          </div>
        </div>
      </div>
      <div>
        <LineChart />
      </div>
      <div></div>
    </CardSection>
  );
};

export default NepseIndex;
