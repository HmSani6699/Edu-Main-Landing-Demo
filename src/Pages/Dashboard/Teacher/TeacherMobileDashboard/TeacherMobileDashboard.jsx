import React from "react";
import DashboardBanner from "../../../../Component/MobileDashboard/DashboardBanner/DashboardBanner";
import MenuCategory from "../../../../Component/MobileDashboard/MenuCategory/MenuCategory";

const TeacherMobileDashboard = () => {
  return (
    <div>
      <DashboardBanner dashboardTitle={"Teacher"} />
      <MenuCategory />
    </div>
  );
};

export default TeacherMobileDashboard;
