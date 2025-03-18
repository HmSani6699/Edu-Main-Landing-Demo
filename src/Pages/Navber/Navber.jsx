import React from "react";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { MdAccessAlarms, MdHeadsetMic, MdWhatsapp } from "react-icons/md";
import logo from "../../../public/school.png";

const Navber = () => {
  return (
    <div>
      {/* ======> Sopurt navber <====== */}
      <div className="bg-[#1e567b] text-white py-[10px] font-semibold">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-[30px]">
            <p className="flex items-center gap-[5px]">
              <MdHeadsetMic /> 01996359111
            </p>
            <p className="flex items-center gap-[5px]">
              <MdWhatsapp /> 01996359111
            </p>
            <p className="flex items-center gap-[5px]">
              <MdAccessAlarms /> (10:00PM - 11:00AM)
            </p>
          </div>
          <div className="flex items-center gap-[10px]">
            <div className="text-blue-700 bg-white rounded-full p-[4px]">
              <FaFacebookF />
            </div>
            <div className="text-red-700 bg-white rounded-full p-[4px]">
              <FaYoutube />
            </div>
          </div>
        </div>
      </div>
      {/* ======> Main navber <====== */}
      <div className="flex items-center justify-between  max-w-[1060px] mx-auto">
        {/* ====> Edu English Name <==== */}
        <div className="text-center">
          <h2 className="text-[37px] font-bold text-[#1d5276]">
            Pakunda Islamia Madrasa
          </h2>
          <p className="font-semibold text-[#1d5276]">
            Pakunda, Sonargon, Narayongonj
          </p>
        </div>
        {/* ====> Edu Logo <==== */}
        <div className="w-[135px]">
          <img src={logo} alt="" />
        </div>
        {/* ====> Edu Bangla
         Name <==== */}
        <div className="text-center">
          <h2 className="text-[30px] font-bold text-[#1d5276]">
            পাকুন্ডা ইসলামিয়া হাফেজিয়া মাদ্রাসা
          </h2>
          <p className="font-semibold text-[#1d5276]">
            পাকুন্ডা, সোনারগাঁ, নারায়ণগঞ্জ
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navber;
