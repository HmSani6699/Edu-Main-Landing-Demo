import React from "react";
import { MdOutlineCalendarMonth } from "react-icons/md";
import SubBanner from "../SubBanner/SubBanner";

const Leave = () => {
  return (
    <div>
      <SubBanner
        url={"/student-dashboard/1"}
        icon={<MdOutlineCalendarMonth className="text-[28px] " />}
        title={"Leave"}
      />

      <div className="px-[10px] flex items-end justify-end gap-[20px]">
        <button className=" text-white bg-[#07A698] py-[4px] px-[15px] rounded-[6px] mt-[20px]">
          Filter
        </button>
        <button className=" text-white bg-[#07A698] py-[4px] px-[15px] rounded-[6px] mt-[20px]">
          Apply Leave
        </button>
      </div>

      <div className="px-[10px] my-[30px]">
        <div className=" ">
          <div className="flex items-center justify-between mb-[8px]">
            <h2 className="bg-[#b2ece78e] text-[#07a698] px-[10px] py-[2px] text-[14px] rounded-[6px] font-semibold ">
              Approved
            </h2>
            <p className="text-[14px] text-gray-500">3 days</p>
          </div>
          <h2>Personal Leave</h2>
          <p className="text-[14px] text-gray-500">10 April 2025</p>
        </div>
        <div className="border-b my-[15px]"></div>
        <div className=" ">
          <div className="flex items-center justify-between mb-[8px]">
            <h2 className="bg-[#b2ece78e] text-[#07a698] px-[10px] py-[2px] text-[14px] rounded-[6px] font-semibold ">
              Approved
            </h2>
            <p className="text-[14px] text-gray-500">3 days</p>
          </div>
          <h2>Personal Leave</h2>
          <p className="text-[14px] text-gray-500">10 April 2025</p>
        </div>
        <div className="border-b my-[15px]"></div>
        <div className=" ">
          <div className="flex items-center justify-between mb-[8px]">
            <h2 className="bg-[#b2ece78e] text-[#07a698] px-[10px] py-[2px] text-[14px] rounded-[6px] font-semibold ">
              Approved
            </h2>
            <p className="text-[14px] text-gray-500">3 days</p>
          </div>
          <h2>Personal Leave</h2>
          <p className="text-[14px] text-gray-500">10 April 2025</p>
        </div>
      </div>
    </div>
  );
};

export default Leave;
