// Client use
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import BannerTabs from "./BannerTabs";

const Banner = ({ initialTime }) => {
  const [currentTime, setCurrentTime] = useState(dayjs(initialTime));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime((prevTime) => prevTime.add(1, "second"));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures that the effect runs only once

  return (
    <>
      <div className="daetime_banner flex h-7 w-full bg-slate-500 justify-between px-24 items-center">
        <div className="flex gap-3 items-center justify-center px-2">
          <MdOutlineDateRange />
          <div>{currentTime.format("DD MMMM YYYY, dddd")}</div>
        </div>
        <div>{currentTime ? currentTime.format("HH:mm A") : "Loading..."}</div>
      </div>
      <div className="flex h-12 bg-[#093134] text-white justify-around items-center">
        <div className="hover:text-[#FFC0CB] active:text-[#FFC0CB] hover:underline hover:underline-offset-8 active:underline active:underline-offset-8">
          HOME
        </div>
        <BannerTabs
          title={"NEWS"}
          options={["Arthakendra", "Announcement"]}
          isFlag={true}
        />
        <BannerTabs
          title={"NEPSE"}
          options={[
            "Live Nepse",
            "Stock Price",
            "Market Indices",
            "Floorsheet",
            "Top Gainers",
            "Top Losers",
            "Today's Top",
            "52 Week High/Low",
            "Sector Summary",
            "Mutual Fund",
            "Price Volume Analysis",
            "Datewise Summary",
            "Datewise Market Capital",
            "Market Depth",
          ]}
          isFlag={true}
        />
        <BannerTabs
          title={"INVESTMENT"}
          options={[
            "Proposed Dividend",
            "Existing Issues",
            "IPO Pipeline",
            "Auctions",
            "Broker List",
            "Promoter Unlock!",
            "Stock By Market Cap!",
            "Dividend King!",
            "Stock Heatmap!",
          ]}
          isFlag={true}
        />
        <BannerTabs
          title={"ECONOMY"}
          options={[
            "Inflation",
            "NRB Data",
            "Merger & Aquisition",
            "Forex Rate",
            "Gold & Silver",
            "Global Market",
            "Fuel Rate",
          ]}
          isFlag={true}
        />
        <BannerTabs
          title={"ANALYSIS"}
          options={[
            "Techinical Charts",
            "Fundamental Analysis",
            "Broker Analysis",
            "Financial Analysis",
            "Candle Stick Pattern!",
            "Stocks By Market Cap!",
            "Dividend King!",
            "Hot Stock!",
            "Bulk Transaction!",
          ]}
          isFlag={true}
        />
        <BannerTabs
          title={"MARKET TOOLS"}
          options={["Calculator", "Compare Stocks", "Mero Share"]}
          isFlag={true}
        />
        <BannerTabs
          title={"TRAINING"}
          options={["Live Training", "Videos"]}
          isFlag={true}
        />
        <div className="hover:text-[#FFC0CB] active:text-[#FFC0CB] hover:underline hover:underline-offset-8 active:underline active:underline-offset-8">
          ABOUT US
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Banner;
