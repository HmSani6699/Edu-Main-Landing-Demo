import React from "react";
import DashboardBanner from "../../../../Component/MobileDashboard/DashboardBanner/DashboardBanner";
import MenuCategory from "../../../../Component/MobileDashboard/MenuCategory/MenuCategory";
import { RiPencilRuler2Line } from "react-icons/ri";
import { SlBookOpen } from "react-icons/sl";
import { MdOutlineCalendarMonth, MdOutlineCoPresent } from "react-icons/md";
import { TbCoinTaka } from "react-icons/tb";
import { FaRegLightbulb } from "react-icons/fa";
import TeacherClassPeriod from "../../../../Component/MobileDashboard/TeacherClassPeriod/TeacherClassPeriod";

const TeacherMobileDashboard = () => {
  const options = [
    {
      url: "/teacher_class",
      icon: <RiPencilRuler2Line className="text-[30px] text-[#043334]" />,
      title: "Class",
    },
    {
      url: "/teacher-home-work/1",
      icon: <SlBookOpen className="text-[28px] text-[#043334]" />,
      title: "Home Work",
    },
    {
      url: "/teacher-exam-result",
      icon: <MdOutlineCoPresent className="text-[30px] text-[#043334]" />,
      title: "Exam",
    },
    {
      url: "/teacher-salary",
      icon: <TbCoinTaka className="text-[30px] text-[#043334]" />,
      title: "Salary",
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
      <DashboardBanner dashboardTitle={"Teacher"} />
      <MenuCategory options={options} />
      <TeacherClassPeriod />
    </div>
  );
};

export default TeacherMobileDashboard;
