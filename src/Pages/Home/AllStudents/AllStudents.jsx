import React from "react";
import StudentCard from "../../../Component/StudentCard/StudentCard";
import Marquee from "react-fast-marquee";
import student from "../../../../public/student.png";
import { BiSolidZap } from "react-icons/bi";
import Reveal from "../../../Component/Reveal/Reveal";

const AllStudents = () => {
  return (
    <Reveal>
      <div className=" max-w-[1471px] mx-auto mt-[60px] lg:mt-[100px] ">
        <div>
          <Reveal>
            <div className="flex items-center justify-center">
              <button className="bg-white flex p-[5px]  rounded-full gap-[8px] pr-[10px] text-[14px] ">
                <div className="bg-[#07a69826] p-[4px] rounded-full">
                  <BiSolidZap className="text-[#07A698]" />
                </div>
                আমাদের ছাত্র
              </button>
            </div>
          </Reveal>
          <Reveal>
            <p className="font-Baloo text-[#1D5276] mt-[20px] text-[30px] text-center  leading-[28px] font-[600]">
              আমাদের ছাত্র বৃন্দ
            </p>
          </Reveal>
        </div>
        <div className="flex items-center overflow-hidden mt-5 relative">
          <Marquee speed="40" pauseOnHover={true}>
            <div className="flex gap-5 mt-20">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9]?.map((allStudent, i) => (
                <StudentCard key={i} />
              ))}
            </div>
          </Marquee>
          <div className="absolute top-0 bottom-0 left-0 w-52 bg-gradient-to-r from-[#f5f5f5] to-transparent pointer-events-none z-10"></div>
          <div className="absolute top-0 bottom-0 right-0 w-52 bg-gradient-to-l from-[#f5f5f5] to-transparent pointer-events-none z-10"></div>
        </div>
      </div>
    </Reveal>
  );
};

export default AllStudents;
