import React from "react";
import { BiSolidZap } from "react-icons/bi";
import TeacherCard from "../../../Component/TeacherCard/TeacherCard";
import Reveal from "../../../Component/Reveal/Reveal";

const AllTeacher = () => {
  return (
    <div className="max-w-[900px] mx-auto mt-[50px]">
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
        <TeacherCard />
        <TeacherCard />
        <TeacherCard />
      </div>
    </div>
  );
};

export default AllTeacher;
