import React, { useState } from "react";
import DashboardBanner from "../../../../Component/MobileDashboard/DashboardBanner/DashboardBanner";
import MenuCategory from "../../../../Component/MobileDashboard/MenuCategory/MenuCategory";
import StudentClassPeriod from "../../../../Component/MobileDashboard/StudentClassPeriod/StudentClassPeriod";
import { RiPencilRuler2Line } from "react-icons/ri";
import { SlBookOpen } from "react-icons/sl";
import { MdOutlineCalendarMonth, MdOutlineCoPresent } from "react-icons/md";
import { TbCoinTaka } from "react-icons/tb";
import { FaRegLightbulb } from "react-icons/fa";

const StudentMobileDashboard = () => {
  // ===== menu options ======//
  const options = [
    {
      url: "/student-class",
      icon: <RiPencilRuler2Line className="text-[30px] text-[#043334]" />,
      title: "Class",
    },
    {
      url: "/student-home-work",
      icon: <SlBookOpen className="text-[28px] text-[#043334]" />,
      title: "Home Work",
    },
    {
      url: "/student-exam-result",
      icon: <MdOutlineCoPresent className="text-[30px] text-[#043334]" />,
      title: "Exam",
    },
    {
      url: "/student-fees",
      icon: <TbCoinTaka className="text-[30px] text-[#043334]" />,
      title: "Fees",
    },
    {
      url: "/leave",
      icon: <MdOutlineCalendarMonth className="text-[30px] text-[#043334]" />,
      title: "Leave",
    },
    {
      url: "/notice-board",
      icon: <FaRegLightbulb className="text-[30px] text-[#043334]" />,
      title: "Notice",
    },
  ];
  return (
    <div>
      <DashboardBanner dashboardTitle={"Student"} />
      <MenuCategory options={options} />
      <StudentClassPeriod />
    </div>
  );
};

export default StudentMobileDashboard;
