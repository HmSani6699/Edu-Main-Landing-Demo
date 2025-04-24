import React from "react";
import teacher_img from "../../../public/teacher1.png";
import Reveal from "../Reveal/Reveal";

const TeacherCard = ({ img }) => {
  return (
    <Reveal>
      {" "}
      <div className="border-[1px] rounded-[10px] shadow-md">
        <div className="teacher_bg_image h-[300px]  overflow-hidden">
          <img className="h-full w-full" src={img} alt="teacher image" />
        </div>
        <div className="p-[20px]">
          <h2 className="text-[#1D5276] text-center text-[20px] font-semibold">
            Md Sadiqur Rahman
          </h2>
          <h2 className="text-white text-center text-[14px] font-semibold bg-[#07A698] py-[5px] rounded-full mt-[10px]">
            Classs: Five
          </h2>
        </div>
      </div>
    </Reveal>
  );
};

export default TeacherCard;
