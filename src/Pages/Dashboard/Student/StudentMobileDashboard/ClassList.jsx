import React, { useState } from "react";
import shap_image from "../../../../../public/testi-shape-1.png";
import teacher from "../../../../../public/teacher1.png";
import { RiPencilRuler2Line } from "react-icons/ri";
import { IoArrowBackOutline } from "react-icons/io5";
import ClassPeriodCard from "./ClassPeriodCard";
import { Link } from "react-router-dom";
import SubBanner from "../../../../Component/MobileDashboard/SubBanner/SubBanner";
import TabMenu from "../../../../Component/MobileDashboard/TabMenu/TabMenu";
import StudentClassPeriod from "../../../../Component/MobileDashboard/StudentClassPeriod/StudentClassPeriod";

const ClassList = () => {
  return (
    <div>
      <SubBanner
        url={"/student-dashboard/1"}
        icon={<RiPencilRuler2Line className="text-[28px]" />}
        title={"All Class"}
      />
      <div className="mt-[30px]">
        <StudentClassPeriod />
      </div>
    </div>
  );
};

export default ClassList;
