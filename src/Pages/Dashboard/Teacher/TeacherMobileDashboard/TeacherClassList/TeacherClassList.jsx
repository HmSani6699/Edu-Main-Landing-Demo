import React from "react";
import SubBanner from "../../../../../Component/MobileDashboard/SubBanner/SubBanner";
import { RiPencilRuler2Line } from "react-icons/ri";
import TeacherClassPeriod from "../../../../../Component/MobileDashboard/TeacherClassPeriod/TeacherClassPeriod";

const TeacherClassList = () => {
  return (
    <div>
      <SubBanner
        url={"/teacher-dashboard/1"}
        icon={<RiPencilRuler2Line className="text-[28px]" />}
        title={"All Class"}
      />
      <div className="mt-[30px]">
        <TeacherClassPeriod />
      </div>
    </div>
  );
};

export default TeacherClassList;
