import React from "react";
import shap_image from "../../../../public/testi-shape-1.png";
import { BiSolidZap } from "react-icons/bi";

const ClassCurriculum = () => {
  return (
    <div className="h-screen bg-[#07A698] mt-[100px] flex  justify-center relative py-[60px]">
      <div>
        <div className="flex items-center justify-center">
          <button className="bg-white flex p-[5px]  rounded-full gap-[8px] pr-[10px] text-[14px] ">
            <div className="bg-[#07a69826] p-[4px] rounded-full">
              <BiSolidZap className="text-[#07A698]" />
            </div>
            Class Curriculuam
          </button>
        </div>

        <h2 className="text-[30px] font-bold my-[20px] text-white">
          Explore Featured Class Curriculuam
        </h2>
      </div>
      <div className="absolute top-0 right-0">
        <img className="w-[500px]" src={shap_image} alt="shape" />
      </div>
    </div>
  );
};

export default ClassCurriculum;
