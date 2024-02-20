import React from "react";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { SlLocationPin } from "react-icons/sl";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { SiYoutube } from "react-icons/si";
import Download from "../../../public/351333.svg";
import logo from "../../../public/sharehub-yIE25QB_.svg";

import Image from "next/image";
const Footer = () => {
  return (
    <div className="h-fit w-full bg-[#093134] py-10 px-6 text-white">
      <div className="flex gap-5">
        <div className="flex flex-col flex-1 gap-3">
          <Image src={logo} width={100} height={100} />
          <div className="h-10 py-2 px-2 text-2xl font-semibold">
            Softshala Pvt. Ltd
          </div>
          <div className="flex gap-2 px-2">
            <div className="flex text-xl items-center">
              <FiPhone />
            </div>
            <div>
              <div>+977 9865231470,</div>
              <div>+977 9801234567</div>
            </div>
          </div>
          <div className="flex gap-2 px-2">
            <div className="flex text-xl items-center">
              <HiOutlineMailOpen />
            </div>
            <div>softshala@info.com</div>
          </div>
          <div className="flex gap-2 px-2">
            <div className="flex text-xl items-center">
              <SlLocationPin />
            </div>
            <div>Tinkune - 07, Kathmandu</div>
          </div>
        </div>
        <div className="flex flex-col gap-4 flex-1">
          <div className="text-xl">Product</div>
          <div className="flex flex-col gap-2">
            <div className="cursor-pointer">Live Market</div>
            <div className="cursor-pointer">Market</div>
            <div className="cursor-pointer">Floorsheet</div>
            <div className="cursor-pointer">Top Gainers</div>
            <div className="cursor-pointer">Top Losers</div>
          </div>
        </div>
        <div className="flex flex-col gap-4 flex-1">
          <div className="text-xl">Market</div>
          <div className="flex flex-col gap-2">
            <div className="cursor-pointer">IPO/FPO</div>
            <div className="cursor-pointer">Right Share</div>
            <div className="cursor-pointer">Debentures</div>
            <div className="cursor-pointer">Mutual Funds</div>
          </div>
        </div>
        <div className="flex flex-col gap-4 flex-1">
          <div className="text-xl">Info</div>
          <div className="flex flex-col gap-2">
            <div className="cursor-pointer">Write for us</div>
            <div className="cursor-pointer">Brokers list</div>
            <div className="cursor-pointer">Merchant Brokers</div>
            <div className="cursor-pointer">IPO Results</div>
            <div className="cursor-pointer">Existing Issues</div>
            <div className="cursor-pointer">Ongoing Auctions</div>
            <div className="cursor-pointer">Upcomming Issues</div>
          </div>
        </div>
        <div className="flex flex-col gap-4 flex-1">
          <div className="text-xl">Social Media</div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="text-3xl">
                <FaFacebook />
              </div>
              <div>Facebook</div>
            </div>
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="text-3xl">
                <FaInstagram />
              </div>
              <div>Instagram</div>
            </div>
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="text-3xl">
                <SiYoutube />
              </div>
              <div>Youtube</div>
            </div>
          </div>
          <div className="flex flex-col justify-start gap-3">
            <div className="text-xl">Download App</div>
            <Image src={Download} width={140} height={140} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
