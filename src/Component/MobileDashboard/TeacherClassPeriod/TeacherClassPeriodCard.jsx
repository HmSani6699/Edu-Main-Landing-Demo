import React from "react";
import { useNavigate } from "react-router-dom";
import Reveal from "../../Reveal/Reveal";

const TeacherClassPeriodCard = ({ subject, time, img, name, period }) => {
  const navigate = useNavigate();
  return (
    <Reveal>
      <div
        onClick={() => navigate("/class_managment")}
        className="border-[#07A698] border rounded-[20px] p-[10px]"
      >
        <div>
          <h2 className="text-[23px] text-[#043334]">{subject}</h2>
          <p className="text-gray-400">{time}</p>
        </div>

        <div className="border border-gray-300 my-[10px]"></div>
        <div className="flex items-center justify-between">
          <h2>Total Student: 50 </h2>

          <h2 className="bg-[#07A698] text-white px-[10px] py-[2px] rounded-[8px]">
            Period {period}
          </h2>
        </div>
      </div>
    </Reveal>
  );
};

export default TeacherClassPeriodCard;
