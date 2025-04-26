import React, { useState } from "react";
import SubBanner from "../../../../../Component/MobileDashboard/SubBanner/SubBanner";
import { SlBookOpen } from "react-icons/sl";
import Homework from "../../../../../Component/MobileDashboard/Homework/Homework";

const StudentHomeWork = () => {
  return (
    <div>
      <SubBanner
        url={"/student-dashboard/1"}
        icon={<SlBookOpen className="text-[28px] " />}
        title={"Home Work"}
      />
      {/* ===== */}
      <Homework />
    </div>
  );
};

export default StudentHomeWork;
