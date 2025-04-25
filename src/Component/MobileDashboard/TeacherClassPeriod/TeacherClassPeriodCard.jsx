import React from "react";
import { useNavigate } from "react-router-dom";
import Reveal from "../../Reveal/Reveal";

const TeacherClassPeriodCard = ({ subject, time, img, name, period }) => {
  const navigate = useNavigate();
  return (
    <Reveal>
      <div
        onClick={() => navigate("/student-class-performance")}
        className="border-[#07A698] border rounded-[20px] p-[10px] flex items-center justify-between"
      >
        <div>
          <h2 className="text-[23px] text-[#043334]">{subject}</h2>
          <p className="text-gray-400">{time}</p>
        </div>

        <div className=" border-[#07A698] border-[10px] h-[50px] w-[50px] rounded-full flex items-center justify-center">
          <div className=" rounded-full bg-white font-bold text-[30px]">
            {period}
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default TeacherClassPeriodCard;
