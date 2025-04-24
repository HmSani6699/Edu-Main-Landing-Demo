import React from "react";
import { BiSolidZap } from "react-icons/bi";
import TeacherCard from "../../../Component/TeacherCard/TeacherCard";
import Reveal from "../../../Component/Reveal/Reveal";
import teacher1 from "../../../../public/Teacher/teacher5.png";
import teacher2 from "../../../../public/Teacher/teacher6.png";

const AllTeacher = () => {
  return (
    <div className="max-w-[900px] mx-auto lg:mt-[50px] p-[10px]">
      <div>
        <Reveal>
          <div className="flex items-center justify-center">
            <button className="bg-white flex p-[5px]  rounded-full gap-[8px] pr-[10px] text-[14px] ">
              <div className="bg-[#07a69826] p-[4px] rounded-full">
                <BiSolidZap className="text-[#07A698]" />
              </div>
              আমাদের শিক্ষক
            </button>
          </div>
        </Reveal>
        <Reveal>
          <p className="font-Baloo text-[#1D5276] mt-[20px] text-[30px] text-center  leading-[28px] font-[600]">
            আমাদের বিশেষজ্ঞ শিক্ষক বৃন্দ
          </p>
        </Reveal>
      </div>

      {/* =====> Teacher card <===== */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[20px] mt-[50px] ">
        <TeacherCard img={teacher1} />
        <TeacherCard img={teacher2} />
        <TeacherCard img={teacher1} />
      </div>
    </div>
  );
};

export default AllTeacher;
