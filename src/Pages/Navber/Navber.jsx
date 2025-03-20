import React from "react";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { MdAccessAlarms, MdHeadsetMic, MdWhatsapp } from "react-icons/md";
import logo from "../../../public/school.png";
import NavLink from "../../Component/NavLink/NavLink";
import { TbLogin2 } from "react-icons/tb";

const Navber = () => {
  return (
    <div>
      {/* ======> Sopurt navber <====== */}
      <div className="bg-[#043334] text-white py-[10px] font-semibold border-b border-gray-500">
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
      <div className="bg-white max-w-[1200px] mx-auto py-[10px] flex items-center justify-between">
        <div className="flex items-center justify-center">
          <div className="w-[40px] bg-white rounded-full border-[#07A698] border-2">
            <img src={logo} alt="" />
          </div>
        </div>
        <div className="flex items-center gap-[30px]">
          <NavLink title={"হোম"} />
          <NavLink title={"আমাদের সম্পর্কে"} />
          <NavLink title={"ভর্তি"} />
          <NavLink title={"যোগাযোগ"} />
          <NavLink title={"ব্লগ"} />
        </div>
        <button className="flex items-center gap-[6px] text-white bg-[#07A698] py-[4px] px-[15px] rounded-[6px]">
          Log In <TbLogin2 />
        </button>
      </div>
    </div>
  );
};

export default Navber;
