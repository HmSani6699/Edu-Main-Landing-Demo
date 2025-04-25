import React from "react";
import ProfileBanner from "./ProfileBanner/ProfileBanner";
import { MdOutlineAddLocationAlt, MdOutlineLocationOn } from "react-icons/md";

const StudentMobileProfile = () => {
  return (
    <div>
      <ProfileBanner />
      <div className="p-4 max-w-md mx-auto">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          Performance Overview
        </h2>
        {/*=============  */}
        <div className="bg-blue-50 rounded-lg p-4 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <p className="text-gray-500 font-medium">Overall Grade</p>
            <p className="text-[#07A698] font-bold text-xl">A+</p>
          </div>

          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="bg-white rounded-lg py-3 shadow-sm">
              <p className="text-gray-500 text-sm">Average</p>
              <p className="text-[#07A698] font-semibold text-lg">92%</p>
            </div>
            <div className="bg-white rounded-lg py-3 shadow-sm">
              <p className="text-gray-500 text-sm">Rank</p>
              <p className="text-[#07A698] font-semibold text-lg">#2</p>
            </div>
            <div className="bg-white rounded-lg py-3 shadow-sm">
              <p className="text-gray-500 text-sm">Attendance</p>
              <p className="text-[#07A698] font-semibold text-lg">95%</p>
            </div>
          </div>
        </div>
        {/* ========== */}
        <div className="border-t p-[20px]">
          <h2 className="text-[#202C4B] text-[16px] font-[500]  py-[15px] border-b">
            Basic Information
          </h2>
          <div className="grid grid-cols-2 gap-[10px] mt-[15px]">
            <p className="text-[#202C4B] text-[14px] font-[400]">Roll No</p>
            <p className="text-[14px] text-gray-400">124</p>
            <p className="text-[#202C4B] text-[14px] font-[400]">Gender </p>
            <p className="text-[14px] text-gray-400">Male</p>
            <p className="text-[#202C4B] text-[14px] font-[400]">
              Date Of Birth
            </p>
            <p className="text-[14px] text-gray-400">10/11/2002</p>
            <p className="text-[#202C4B] text-[14px] font-[400]">Blood Group</p>
            <p className="text-[14px] text-gray-400">AB-</p>
            <p className="text-[#202C4B] text-[14px] font-[400]">Category</p>
            <p className="text-[14px] text-gray-400">OB</p>
          </div>
        </div>
        {/* ======= */}
        <div className="card_shadow mt-[0px]">
          <h2 className="text-[#202C4B] text-[16px] font-[500] px-[20px] py-[15px] border-b">
            Address
          </h2>

          <div className="p-[10px]">
            <div className="p-[10px] rounded-[5px]  ">
              <div className="flex items-center gap-[10px]">
                <div className=" rounded-[5px] bg-white text-[16px] p-[5px] font-semibold">
                  <MdOutlineAddLocationAlt className="text-gray-500" />
                </div>
                <div>
                  <h2 className="text-[#202C4B] text-[14px] font-semibold">
                    Current Address
                  </h2>
                  <p className="text-[14px] text-gray-500 mt-[4px]">
                    3495 Red Hawk Road, Buffalo Lake, MN 55314
                  </p>
                </div>
              </div>
            </div>
            <div className="p-[10px] rounded-[5px] ">
              <div className="flex items-center gap-[10px]">
                <div className=" rounded-[5px] bg-white text-[16px] p-[5px] font-semibold">
                  <MdOutlineLocationOn className="text-gray-500" />
                </div>
                <div>
                  <h2 className="text-[#202C4B] text-[14px] font-semibold">
                    Current Address
                  </h2>
                  <p className="text-[14px] text-gray-500 mt-[4px]">
                    3495 Red Hawk Road, Buffalo Lake, MN 55314
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentMobileProfile;
