import React, { useState } from "react";
import logo from "../../../public/logo.png";
import { GoPerson } from "react-icons/go";
import { IoMoon, IoSearch, IoSunnyOutline } from "react-icons/io5";
const Header = () => {
  const [dark, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!dark);
  };
  return (
    <section
      className={`h-28 w-full  flex justify-around items-center ${
        dark ? "bg-[#1A202C]" : "bg-white"
      }`}
    >
      <div className="flex h-auto gap-4 items-center">
        <img src={logo} />
        <div
          className={`flex w-[18rem] items-center rounded-xl shadow-lg ${
            dark ? "bg-[#093134]" : "bg-slate-200"
          }`}
        >
          <input
            className={`h-[3rem] w-[16rem]  text-lg px-3 rounded-xl ${
              dark ? "bg-[#093134] text-white" : "bg-slate-200"
            }`}
            type="search"
            placeholder="Company Name / Symbol"
          />
          <div className="text-2xl text-[#38A169]">
            <IoSearch />
          </div>
        </div>
      </div>
      <div className="h-[88px] w-[544px] flex bg-slate-200 justify-center items-center text-2xl rounded-lg shadow-lg">
        Ad Space (Banner Section)
      </div>
      <div className="flex gap-3">
        <button className="flex bg-[#093134] w-28 h-10 rounded-lg items-center justify-center text-white gap-2 shadow-lg">
          <GoPerson />
          Login
        </button>
        <button className="flex bg-[#093134] w-28 h-10 rounded-lg items-center justify-center text-white gap-2 shadow-lg">
          Sign Up
        </button>
        <button
          className="flex h-10 w-10 rounded-full justify-center items-center text-2xl border-[1px] border-slate-200 shadow-md"
          onClick={toggleMode}
        >
          <div
            className={`${
              dark ? "bg-[#1A202C] text-white" : "bg-white text-black"
            }`}
          >
            {dark ? <IoSunnyOutline /> : <IoMoon />}
          </div>
        </button>
      </div>
    </section>
  );
};

export default Header;
