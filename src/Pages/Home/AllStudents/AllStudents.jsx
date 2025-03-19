import React from "react";
import StudentCard from "../../../Component/StudentCard/StudentCard";
import Marquee from "react-fast-marquee";
import student from "../../../../public/student.png";

const AllStudents = () => {
  return (
    <div className="my-20 max-w-[1471px] mx-auto mt-[100px] ">
      <div>
        <div className="flex items-center justify-center gap-2">
          <img width={30} height={30} alt="icon" src={student} />
          <p className="font-Baloo text-[#1D5276]  text-[30px]  leading-[28px] font-[600]">
            আমাদের সকল ছাত্রছাত্রী সমূহ
          </p>
        </div>
        <p className="font-Baloo text-[#1D5276] mt-[10px] text-[14px] text-center  leading-[28px] font-[600]">
          শিক্ষা হলো ভবিষ্যতের চাবিকাঠি।
        </p>
        <p className="font-Baloo text-[#1D5276]  text-[14px] text-center  leading-[28px] font-[600]">
          আমরা প্রতিটি শিক্ষার্থীকে সফলতার পথে এগিয়ে নিতে প্রতিশ্রুতিবদ্ধ।
        </p>
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

      <div className="flex justify-center mt-10">
        <button
          type="button"
          className="font-Baloo text-white bg-secandary_color flex items-center justify-center py-[10px] px-5  gap-2 rounded-md"
        >
          সকল ছাত্রছাত্রী
          {/* <img alt="icon" src={arrow} /> */}
        </button>
      </div>
    </div>
  );
};

export default AllStudents;
