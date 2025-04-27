import React from "react";
import SubBanner from "../SubBanner/SubBanner";
import { FaRegLightbulb } from "react-icons/fa";
import user from "../../../../public/teacher1.png";
import { IoMdNotifications } from "react-icons/io";

const NoticeBoard = () => {
  return (
    <div>
      <SubBanner
        url={"/student-dashboard/1"}
        icon={<FaRegLightbulb className="text-[28px] " />}
        title={"Notice Board"}
      />
      <div className="px-[10px] my-[30px]">
        <div className="flex  ">
          <div className="w-[15%]">
            <IoMdNotifications className="text-[35px]" />
          </div>
          <div className="w-[85%]">
            <h2 className="text-[18px] font-semibold">Personal Leave</h2>
            <p className="text-[14px] text-gray-500">10 April 2025</p>
            <p className="text-[14px] text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
              veritatis iste velit, possimus consequatur!
            </p>
          </div>
        </div>
        <div className="border-b my-[15px]"></div>
        <div className="flex  ">
          <div className="w-[15%]">
            <IoMdNotifications className="text-[35px]" />
          </div>
          <div className="w-[85%]">
            <h2 className="text-[18px] font-semibold">Personal Leave</h2>
            <p className="text-[14px] text-gray-500">10 April 2025</p>
            <p className="text-[14px] text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
              veritatis iste velit, possimus consequatur!
            </p>
          </div>
        </div>
        <div className="border-b my-[15px]"></div>
        <div className="flex  ">
          <div className="w-[15%]">
            <IoMdNotifications className="text-[35px]" />
          </div>
          <div className="w-[85%]">
            <h2 className="text-[18px] font-semibold">Personal Leave</h2>
            <p className="text-[14px] text-gray-500">10 April 2025</p>
            <p className="text-[14px] text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
              veritatis iste velit, possimus consequatur!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeBoard;
