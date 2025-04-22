import React, { useState } from "react";
import DashboardBanner from "../../../../Component/MobileDashboard/DashboardBanner/DashboardBanner";
import MenuCategory from "../../../../Component/MobileDashboard/MenuCategory/MenuCategory";
import StudentClassPeriod from "../../../../Component/MobileDashboard/StudentClassPeriod/StudentClassPeriod";

const StudentMobilrDashboard = () => {
  return (
    <div>
      <DashboardBanner />
      <MenuCategory />
      <StudentClassPeriod />
    </div>
  );
};

export default StudentMobilrDashboard;
