import React from "react";
import Reveal from "../../../../Component/Reveal/Reveal";

const ClassPeriodCard = ({ subject, time, img, name, period }) => {
  return (
    <Reveal>
      {" "}
      <div className="border-[#07A698] border rounded-[20px] p-[10px]">
        <h2 className="text-[23px]">{subject}</h2>
        <p className="text-gray-400">{time}</p>
        <div className="border border-gray-300 my-[10px]"></div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[5px]">
            <div className="h-[30px] w-[30px] rounded-full border-[#07A698] border-2 overflow-hidden">
              <img
                className="w-full h-full rounded-full"
                src={img}
                alt="user image"
              />
            </div>
            <h2>{name}</h2>
          </div>
          <h2 className="bg-[#07A698] text-white px-[10px] py-[2px] rounded-[8px]">
            Period {period}
          </h2>
        </div>
      </div>
    </Reveal>
  );
};

export default ClassPeriodCard;
