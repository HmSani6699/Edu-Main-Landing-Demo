import React from "react";
import shap_image from "../../../../public/testi-shape-1.png";
import { BiSolidZap } from "react-icons/bi";
import CurriCulumCard from "../../../Component/CurriCulumCard/CurriCulumCard";
import {
  FaBook,
  FaStar,
  FaGraduationCap,
  FaChalkboardTeacher,
} from "react-icons/fa";
import Reveal from "../../../Component/Reveal/Reveal";

const ClassCurriculum = () => {
  const curriculums = [
    {
      name: "One",
      subject: "5",
      icon: <FaGraduationCap className="w-6 h-6 text-blue-500" />,
    },
    {
      name: "Two",
      subject: "5",
      icon: <FaBook className="w-6 h-6 text-green-500" />,
    },
    {
      name: "Three",
      subject: "5",
      icon: <FaStar className="w-6 h-6 text-yellow-500" />,
    },
    {
      name: "Four",
      subject: "5",
      icon: <FaChalkboardTeacher className="w-6 h-6 text-purple-500" />,
    },
    {
      name: "Four",
      subject: "5",
      icon: <FaChalkboardTeacher className="w-6 h-6 text-purple-500" />,
    },
    {
      name: "Four",
      subject: "5",
      icon: <FaChalkboardTeacher className="w-6 h-6 text-purple-500" />,
    },
  ];
  return (
    <div className=" bg-[#07A698] mt-[100px]  relative py-[60px]">
      <div className="max-w-[1100px] mx-auto">
        <div className="absolute top-0 right-0">
          <img className="w-[500px]" src={shap_image} alt="shape" />
        </div>
        {/* ======> <====== */}
        <div>
          <Reveal>
            <div className="flex items-center justify-center">
              <button className="bg-white flex p-[5px]  rounded-full gap-[8px] pr-[10px] text-[14px] ">
                <div className="bg-[#07a69826] p-[4px] rounded-full">
                  <BiSolidZap className="text-[#07A698]" />
                </div>
                ক্লাস পাঠ্যক্রম
              </button>
            </div>
          </Reveal>
          <Reveal>
            <h2 className="text-[30px] font-bold my-[20px] text-white text-center">
              ফিচার ক্লাস কারিকুলাম
            </h2>
          </Reveal>
        </div>

        {/* ======>Curriculum card <======= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[20px] mt-[40px]">
          {curriculums?.map((item) => (
            <CurriCulumCard
              icon={item?.icon}
              name={item?.name}
              subject={item?.subject}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClassCurriculum;
