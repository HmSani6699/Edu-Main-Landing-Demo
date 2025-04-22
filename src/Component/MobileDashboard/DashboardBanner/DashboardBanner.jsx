import React from "react";
import user from "../../../../public/teacher1.png";
import shap_image from "../../../../public/testi-shape-1.png";
import "./DashboardBanner.css";
import { MdDashboard } from "react-icons/md";

const DashboardBanner = ({ dashboardTitle }) => {
  return (
    <div className="banner_container text-white p-[20px]  relative">
      <div className="absolute top-0 right-0">
        <img className="w-[100px]" src={shap_image} alt="shape" />
      </div>

      <div className="flex items-center gap-[7px]">
        <MdDashboard className="text-white" />
        <h2>{dashboardTitle} Dashboard</h2>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <p className="mt-[15px]">Hallo,</p>
          <h2 className="text-[25px]">Md Sadiq</h2>
        </div>
        <div className="h-[100px] w-[100px] rounded-full border-white border-2">
          <img
            className="w-full h-full rounded-full"
            src={user}
            alt="user aveter"
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardBanner;
