import React from "react";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import Banner from "../Layout/Banner";
import { useSelector } from "react-redux";

const CommonLayout = ({ children }) => {
  const { darkModeEnabled } = useSelector((state) => state.darkMode);
  return (
    <div>
      <Header />
      <Banner />
      <section
        className={`h-full w-full  flex justify-around items-center ${
          darkModeEnabled ? "bg-[#1A202C]" : "bg-white"
        }`}
      >
        {children}
      </section>
      <Footer />
    </div>
  );
};

export default CommonLayout;
