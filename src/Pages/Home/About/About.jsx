import React from "react";
import academy from "../../../../public/madrasa.jpg";
import { BiSolidZap } from "react-icons/bi";

const About = () => {
  return (
    <div className="mt-[100px] flex items-center justify-center bg-[#F2F4F7]">
      {/* =======> Left Content <====== */}
      <div>
        <img src={academy} alt="academy" />
        <div className="flex items-end justify-end">
          <div className="w-[150px] h-[200px] rounded-t-full -m-[100px] ">
            <img
              className="w-full h-full rounded-t-full border-t-2 border-white"
              src={academy}
              alt="academy"
            />
          </div>
        </div>
      </div>
      {/* =======> Left Content <====== */}
      <div>
        <div className="bg-white flex p-[5px] rounded-full gap-[8px] pr-[10px]">
          <div className="bg-[#07a69826] p-[4px] rounded-full">
            <BiSolidZap className="text-[#07A698]" />
          </div>
          About Academay
        </div>
      </div>
    </div>
  );
};

export default About;
