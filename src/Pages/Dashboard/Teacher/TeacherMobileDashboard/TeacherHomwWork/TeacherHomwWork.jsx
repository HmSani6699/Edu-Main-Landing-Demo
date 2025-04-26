import React, { useState } from "react";
import { SlBookOpen } from "react-icons/sl";
import SubBanner from "../../../../../Component/MobileDashboard/SubBanner/SubBanner";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { FaRegPenToSquare } from "react-icons/fa6";
import Homework from "../../../../../Component/MobileDashboard/Homework/Homework";

const TeacherHomwWork = () => {
  const [openTabe, setOpenTabe] = useState("homework");
  return (
    <div>
      <SubBanner
        url={"/teacher-dashboard/1"}
        icon={<SlBookOpen className="text-[28px] " />}
        title={"Home Work"}
      />

      {/* ==== Short Tab ==== */}
      <div className="flex items-center justify-around my-[20px]">
        <button
          onClick={() => setOpenTabe("homework")}
          className={`flex flex-col items-center justify-center ${
            openTabe === "homework" ? "text-[#07A698]" : "text-black"
          }`}
        >
          <SlBookOpen className="text-[30px]" />
          <h2 className="text-black mt-[5px]">Homework</h2>
        </button>
        <button
          onClick={() => setOpenTabe("create_homework")}
          className={`flex flex-col items-center justify-center ${
            openTabe === "create_homework" ? "text-[#07A698]" : "text-black"
          }`}
        >
          <FaRegPenToSquare className="text-[30px]" />
          <h2 className="text-black mt-[5px]">Create Homework</h2>
        </button>
        <button
          onClick={() => setOpenTabe("review_grade")}
          className={`flex flex-col items-center justify-center ${
            openTabe === "review_grade" ? "text-[#07A698]" : "text-black"
          }`}
        >
          <MdOutlineLibraryBooks className="text-[30px]" />
          <h2 className="text-black mt-[5px]">Review & Grade</h2>
        </button>
      </div>

      {/* ====> Homework part <===== */}
      <Homework />
    </div>
  );
};

export default TeacherHomwWork;
