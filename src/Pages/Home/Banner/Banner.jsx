import React from "react";
import "./Banner.css";
import student from "../../../../public/student.png";
import teacher from "../../../../public/teacher.png";
import staff from "../../../../public/staff.png";
import section from "../../../../public/section.png";

const Banner = () => {
  return (
    <div>
      <div className="bg-[#1e567bb5] h-screen flex items-center justify-center text-white">
        <h2 className="text-[40px]">Banner Design Comming Soon .....!</h2>
      </div>
      <div className="bg-white flex items-center justify-between max-w-[1100px] mx-auto -mt-[60px] rounded-[10px] p-[30px]">
        <div className="flex items-center gap-[10px] ">
          <img className="w-[50px]" src={student} alt="student" />
          <div>
            <h2 className="text-[#1d5276] text-[25px] font-bold">200 জন+</h2>
            <p className="text-[#1d5276]">শিক্ষার্থী</p>
          </div>
        </div>
        <div className="flex items-center gap-[10px] ">
          <img className="w-[50px]" src={teacher} alt="student" />
          <div>
            <h2 className="text-[#1d5276] text-[25px] font-bold">200 জন+</h2>
            <p className="text-[#1d5276]">শিক্ষার্থী</p>
          </div>
        </div>
        <div className="flex items-center gap-[10px] ">
          <img className="w-[50px]" src={staff} alt="student" />
          <div>
            <h2 className="text-[#1d5276] text-[25px] font-bold">200 জন+</h2>
            <p className="text-[#1d5276]">শিক্ষার্থী</p>
          </div>
        </div>
        <div className="flex items-center gap-[10px] ">
          <img src={section} alt="student" />
          <div>
            <h2 className="text-[#1d5276] text-[25px] font-bold">200 জন+</h2>
            <p className="text-[#1d5276]">শিক্ষার্থী</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
