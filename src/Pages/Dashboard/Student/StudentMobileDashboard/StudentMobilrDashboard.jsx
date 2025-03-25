import React, { useState } from "react";
import DashboardBanner from "../../../../Component/MobileDashboard/DashboardBanner/DashboardBanner";
import MenuCategory from "../../../../Component/MobileDashboard/MenuCategory/MenuCategory";
import TabMenu from "../../../../Component/MobileDashboard/TabMenu/TabMenu";
import StudentClassPeriod from "../../../../Component/MobileDashboard/StudentClassPeriod/StudentClassPeriod";

const StudentMobilrDashboard = () => {
  const [currentTab, setCurrentTab] = useState("Sat");
  return (
    <div>
      <DashboardBanner />
      <MenuCategory />
      <TabMenu currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <StudentClassPeriod />
    </div>
  );
};

export default StudentMobilrDashboard;
