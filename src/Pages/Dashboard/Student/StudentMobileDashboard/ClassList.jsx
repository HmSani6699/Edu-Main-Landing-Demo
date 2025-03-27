import React from "react";
import shap_image from "../../../../../public/testi-shape-1.png";
import teacher from "../../../../../public/teacher1.png";
import { RiPencilRuler2Line } from "react-icons/ri";
import { IoArrowBackOutline } from "react-icons/io5";
import ClassPeriodCard from "./ClassPeriodCard";
import { Link } from "react-router-dom";
import SubBanner from "../../../../Component/MobileDashboard/SubBanner/SubBanner";

const ClassList = () => {
  return (
    <div>
      <SubBanner
        url={"/student-dashboard/1"}
        icon={<RiPencilRuler2Line className="text-[28px]" />}
        title={"All Class"}
      />
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
