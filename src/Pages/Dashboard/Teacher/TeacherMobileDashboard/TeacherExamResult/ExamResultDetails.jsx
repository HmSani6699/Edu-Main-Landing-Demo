import React, { useState } from "react";
import SubBanner from "../../../../../Component/MobileDashboard/SubBanner/SubBanner";
import { MdOutlineCoPresent } from "react-icons/md";

import student1 from "../../../../../../public/student/student1.jpeg";
import student2 from "../../../../../../public/student/student2.jpeg";
import student3 from "../../../../../../public/student/student3.jpeg";
import student4 from "../../../../../../public/student/student4.jpeg";
import student5 from "../../../../../../public/student/student5.jpeg";
import student6 from "../../../../../../public/student/student6.jpeg";
import student7 from "../../../../../../public/student/student7.jpeg";
import student8 from "../../../../../../public/student/student8.jpeg";
import { Link, useNavigate } from "react-router-dom";
import CustomSearchForm from "../../../../../Component/CustomSearchForm/CustomSearchForm";

const ExamResultDetails = () => {
  const navigate = useNavigate();
  const allstudent = [
    { name: "Sadiq", image: student1, address: "Pakunda", status: "active" },
    {
      name: "Najmul",
      image: student2,
      address: "Rupgonj",
      status: "active",
    },
    {
      name: "Noman",
      image: student3,
      address: "Baliyapara",
      status: "inactive",
    },
    {
      name: "Thalha",
      image: student4,
      address: "Monohordi",
      status: "active",
    },
    {
      name: "Al-Amin",
      image: student5,
      address: "Gaptoli",
      status: "inactive",
    },
    {
      name: "Jakir",
      image: student6,
      address: "Araihajar",
      status: "inactive",
    },
    { name: "Roni", image: student7, address: "Taltola", status: "" },
    { name: "Parbase", image: student8, address: "Sirabo", status: "" },
  ];
  return (
    <div className="">
      <SubBanner
        url={"/teacher-exam-result"}
        icon={<MdOutlineCoPresent className="text-[28px] " />}
        title={"1st Semester"}
      />

      {/* =====> Student list <==== */}

      <div className="px-[10px] my-[30px] flex flex-col gap-[20px]">
        <CustomSearchForm classAdd="w-full" />
        {allstudent?.map((item, i) => (
          <div
            className={`border-2 shadow-sm rounded-[10px] p-[10px] flex items-center justify-between `}
          >
            <div className="flex items-center gap-[10px]">
              <div className="w-[45px] h-[45px] rounded-full overflow-hidden  flex items-center justify-center">
                <img src={item?.image} alt="student image" />
              </div>

              <div>
                <Link to={"/student_profile/1"}>
                  <h2 className="font-semibold text-[18px]">{item?.name}</h2>
                </Link>
                <p className="text-[14px] text-gray-500">{item?.address}</p>
              </div>
            </div>

            {/* ====> Attendance content >===== */}

            <div className="flex items-center gap-[10px]">
              <button
                onClick={() => navigate("/teacher-exam-result-report-view")}
                className="hover:bg-[#07A698] hover:text-white bg-gray-300 rounded-[4px] px-[10px] py-[2px]"
              >
                Report
              </button>
              <button
                onClick={() => navigate("/teacher-exam-result-create-update")}
                className="hover:bg-[#07A698] hover:text-white bg-gray-300 rounded-[4px] px-[10px] py-[2px]"
              >
                Open
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExamResultDetails;
