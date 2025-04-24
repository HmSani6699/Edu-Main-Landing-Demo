import React from "react";
import StudentCard from "../../../Component/StudentCard/StudentCard";
import Marquee from "react-fast-marquee";
import student from "../../../../public/student.png";
import { BiSolidZap } from "react-icons/bi";
import Reveal from "../../../Component/Reveal/Reveal";
import student1 from "../../../../public/student/student1.jpeg";
import student2 from "../../../../public/student/student2.jpeg";
import student3 from "../../../../public/student/student3.jpeg";
import student4 from "../../../../public/student/student4.jpeg";
import student5 from "../../../../public/student/student5.jpeg";
import student6 from "../../../../public/student/student6.jpeg";
import student7 from "../../../../public/student/student7.jpeg";
import student8 from "../../../../public/student/student8.jpeg";

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
                আমাদের শিক্ষার্থী
              </button>
            </div>
          </Reveal>
          <Reveal>
            <p className="font-Baloo text-[#1D5276] mt-[20px] text-[30px] text-center  leading-[28px] font-[600]">
              আমাদের শিক্ষার্থী বৃন্দ
            </p>
          </Reveal>
        </div>
        <div className="flex items-center overflow-hidden mt-5 relative">
          <Marquee speed="40" pauseOnHover={true}>
            <div className="flex gap-5 mt-20">
              {[
                { name: "Sadiq", image: student1, address: "Pakunda" },
                { name: "Najmul", image: student2, address: "Rupgonj" },
                { name: "Noman", image: student3, address: "Baliyapara" },
                { name: "Thalha", image: student4, address: "Monohordi" },
                { name: "Al-Amin", image: student5, address: "Gaptoli" },
                { name: "Jakir", image: student6, address: "Araihajar" },
                { name: "Roni", image: student7, address: "Taltola" },
                { name: "Parbase", image: student8, address: "Sirabo" },
              ]?.map((item, i) => (
                <StudentCard key={i} item={item} />
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
