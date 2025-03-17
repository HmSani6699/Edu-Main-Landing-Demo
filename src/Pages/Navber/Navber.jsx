import React from "react";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { MdAccessAlarms, MdHeadsetMic, MdWhatsapp } from "react-icons/md";

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
      <div>suport</div>
    </div>
  );
};

export default Navber;
