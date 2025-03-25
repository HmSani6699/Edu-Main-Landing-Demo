import React from "react";
import shap_image from "../../../../../public/testi-shape-1.png";
import teacher from "../../../../../public/teacher1.png";
import { RiPencilRuler2Line } from "react-icons/ri";
import { IoArrowBackOutline } from "react-icons/io5";
import ClassPeriodCard from "./ClassPeriodCard";
import { Link } from "react-router-dom";

const ClassList = () => {
  return (
    <div>
      <div className="banner_container text-white p-[20px]  relative">
        <div className="absolute top-0 right-0">
          <img className="w-[100px]" src={shap_image} alt="shape" />
        </div>
        <Link to={"/student-dashboard/1"}>
          <IoArrowBackOutline className="text-[20px]" />
        </Link>

        <div className="flex flex-col items-center justify-center">
          <RiPencilRuler2Line className="text-[20px]" />
          <h2 className="text-[25px]">Class</h2>
        </div>
      </div>
      {/* ===== */}
      <div className="px-[10px] flex flex-col gap-[20px] my-[30px]">
        <ClassPeriodCard
          subject={"Bangla"}
          time={"09:00 AM - 10:00 AM"}
          img={teacher}
          name={"Md: Sadiq"}
          period={"1"}
        />
        <ClassPeriodCard
          subject={"Bangla"}
          time={"09:00 AM - 10:00 AM"}
          img={teacher}
          name={"Md: Sadiq"}
          period={"1"}
        />
        <ClassPeriodCard
          subject={"Bangla"}
          time={"09:00 AM - 10:00 AM"}
          img={teacher}
          name={"Md: Sadiq"}
          period={"1"}
        />
        <ClassPeriodCard
          subject={"Bangla"}
          time={"09:00 AM - 10:00 AM"}
          img={teacher}
          name={"Md: Sadiq"}
          period={"1"}
        />
        <ClassPeriodCard
          subject={"Bangla"}
          time={"09:00 AM - 10:00 AM"}
          img={teacher}
          name={"Md: Sadiq"}
          period={"1"}
        />
        <ClassPeriodCard
          subject={"Bangla"}
          time={"09:00 AM - 10:00 AM"}
          img={teacher}
          name={"Md: Sadiq"}
          period={"1"}
        />
      </div>
    </div>
  );
};

export default ClassList;
