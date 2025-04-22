import React, { useState } from "react";
import { RiPencilRuler2Line } from "react-icons/ri";
import SubBanner from "../../../../Component/MobileDashboard/SubBanner/SubBanner";
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
