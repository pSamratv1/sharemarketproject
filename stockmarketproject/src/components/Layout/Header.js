import React, { useState } from "react";
import logo from "../../../public/sharehub-yIE25QB_.svg";
import { GoPerson } from "react-icons/go";
import { IoMoon, IoSearch, IoSunnyOutline } from "react-icons/io5";
import Image from "next/image";
import { toggleDarkMode } from "@/redux/slice/AppSlice";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();

  const { darkModeEnabled } = useSelector((state) => state.darkMode);
  console.log(darkModeEnabled, "dasdasda");
  const toggleMode = () => {
    dispatch(toggleDarkMode());
  };
  return (
    <section
      className={`h-28 w-full  flex justify-around items-center ${
        darkModeEnabled ? "bg-[#1A202C]" : "bg-white"
      }`}
    >
      <div className="flex h-auto gap-4 items-center">
        <Image src={logo} width={100} height={100} />
        <div
          className={`flex w-[18rem] items-center rounded-xl shadow-lg ${
            darkModeEnabled ? "bg-[#093134]" : "bg-slate-200"
          }`}
        >
          <input
            className={`h-[3rem] w-[16rem]  text-lg px-3 rounded-xl ${
              darkModeEnabled ? "bg-[#093134] text-white" : "bg-slate-200"
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
              darkModeEnabled
                ? "bg-[#1A202C] text-white"
                : "bg-white text-black"
            }`}
          >
            {darkModeEnabled ? <IoSunnyOutline /> : <IoMoon />}
          </div>
        </button>
      </div>
    </section>
  );
};

export default Header;
