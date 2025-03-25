import React, { useState } from "react";
import DashboardBanner from "../../../../Component/MobileDashboard/DashboardBanner/DashboardBanner";
import MenuCategory from "../../../../Component/MobileDashboard/MenuCategory/MenuCategory";
import TabMenu from "../../../../Component/MobileDashboard/TabMenu/TabMenu";

const StudentMobilrDashboard = () => {
  const [currentTab, setCurrentTab] = useState("Sat");
  return (
    <div>
      <DashboardBanner />
      <MenuCategory />
      <TabMenu currentTab={currentTab} setCurrentTab={setCurrentTab} />
    </div>
  );
};

export default StudentMobilrDashboard;
