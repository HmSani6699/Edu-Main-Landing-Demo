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
    <div className=" bg-[#07A698] lg:mt-[100px] mt-[50px] relative py-[60px] p-[10px]">
      <div className="max-w-[1100px] mx-auto">
        <div className="absolute top-0 right-0">
          <img className="w-[500px]" src={shap_image} alt="shape" />
        </div>
        {/* ======> <====== */}
        video
      </div>
    </div>
  );
};

export default ClassCurriculum;
