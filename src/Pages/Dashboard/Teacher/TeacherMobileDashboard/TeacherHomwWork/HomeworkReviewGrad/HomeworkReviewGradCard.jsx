import React from "react";
import subject_image from "../../../../../../../public/test.png";
import SubBanner from "../../../../../../Component/MobileDashboard/SubBanner/SubBanner";
import { FaBook } from "react-icons/fa6";
import { Link } from "react-router-dom";
import student1 from "../../../../../../../public/student/student1.jpeg";
import student2 from "../../../../../../../public/student/student2.jpeg";
import student3 from "../../../../../../../public/student/student3.jpeg";
import student4 from "../../../../../../../public/student/student4.jpeg";
import student5 from "../../../../../../../public/student/student5.jpeg";
import student6 from "../../../../../../../public/student/student6.jpeg";
import student7 from "../../../../../../../public/student/student7.jpeg";
import student8 from "../../../../../../../public/student/student8.jpeg";
import CustomSearchForm from "../../../../../../Component/CustomSearchForm/CustomSearchForm";

const HomeworkReviewGradCard = () => {
  const allstudent = [
    { name: "Sadiq", image: student1, address: "Pakunda", status: "active" },
    { name: "Najmul", image: student2, address: "Rupgonj", status: "active" },
    {
      name: "Noman",
      image: student3,
      address: "Baliyapara",
      status: "inactive",
    },
    { name: "Thalha", image: student4, address: "Monohordi", status: "active" },
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
    <div>
      <SubBanner
        url={"/teacher-dashboard/1"}
        icon={<FaBook className="text-[28px] " />}
        title={"Review & Grade"}
      />
      <div className="px-[10px] my-[20px]">
        {/* ====== Subject <==== */}
        <div className="bg-[#eff6ff] rounded-[8px] p-[20px] flex items-center justify-between ">
          <div>
            <button className="px-[10px] bg-[#07a69824] text-[#07a698] rounded-[5px] mb-[10px]">
              <h2 className="text-[23px] ">Bangla</h2>
            </button>
            <p className="text-gray-400">Assigen Date: 5 April 2025</p>
            <p className="text-gray-400">Submission Date: 5 April 2025</p>
          </div>
          <div className=" h-[80px] w-[70px] rounded-[5px]">
            <img
              className="w-full h-full rounded-[5px]"
              src={subject_image}
              alt="subjct"
            />
          </div>
        </div>
        {/* =====> Student <==== */}
        <div className="mt-[20px]">
          <CustomSearchForm classAdd="w-full" />
        </div>
        <div className="flex flex-col gap-[20px] my-[30px]">
          {allstudent?.map((item, i) => (
            <div
              className={`border-2 shadow-sm rounded-[10px] p-[10px] flex  items-center justify-between   `}
            >
              <div className="flex items-center gap-[10px]">
                <div className=" relative">
                  {item?.status === "active" ? (
                    <div className="bg-green-500 h-[10px] w-[10px] rounded-full absolute top-0 left-0 z-30"></div>
                  ) : item?.status === "inactive" ? (
                    <div className="bg-red-500 h-[10px] w-[10px] rounded-full absolute top-0 left-0 z-30"></div>
                  ) : (
                    ""
                  )}
                  <div className="w-[45px] h-[45px] rounded-full overflow-hidden  flex items-center justify-center">
                    <img src={item?.image} alt="student image" />
                  </div>
                </div>
                <div>
                  <Link to={"/student_profile/1"}>
                    <h2 className="font-semibold text-[18px]">Sadiq</h2>
                  </Link>
                  <p className="text-[14px] text-gray-500">Pakunda</p>
                </div>
              </div>
              {/* ====> Attendance content >===== */}

              <div className="flex items-center gap-[10px]">
                <button className="hover:bg-[#07A698] hover:text-white bg-gray-300 rounded-[4px] px-[10px] py-[6px]">
                  Complete
                </button>
                <button className="hover:bg-[#07A698] hover:text-white bg-gray-300 rounded-[4px] px-[10px] py-[6px]">
                  Incomplete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeworkReviewGradCard;
