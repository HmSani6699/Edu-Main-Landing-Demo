import React from "react";
import { LuClock } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const ExamResultLIstCard = ({ examName, img, dateTime, discription }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/teacher-exam-result-details")}
      className={`border-2 shadow-sm rounded-[10px] p-[10px] cursor-pointer`}
    >
      <button className=" bg-[#07a6981c] text-[#07a698] px-[12px] py-[2px] mb-[8px] rounded-[4px]">
        <h2 className="whitespace-nowrap">{examName}</h2>
      </button>
      <div className="flex items-center gap-[10px]">
        <div className="w-[150px] h-[80px] rounded-[10px] overflow-hidden  flex items-center justify-center">
          <img
            className="rounded-[10px] h-full w-full"
            src={img}
            alt="student image"
          />
        </div>

        <div>
          <div className="flex items-center gap-[4px] mb-[4px] text-[#07a698]">
            <LuClock />
            <h2 className="font-semibold text-[16px]">{dateTime}</h2>
          </div>
          <p className="text-[14px] text-gray-500">{discription}</p>
        </div>
      </div>
    </div>
  );
};

export default ExamResultLIstCard;
