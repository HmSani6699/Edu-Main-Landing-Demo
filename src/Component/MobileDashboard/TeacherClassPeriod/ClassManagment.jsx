import React, { useState } from "react";
import SubBanner from "../SubBanner/SubBanner";
import { RiPencilRuler2Line } from "react-icons/ri";
import { PiStudentFill } from "react-icons/pi";
import { MdOutlineLibraryBooks } from "react-icons/md";
import ClassStudents from "../../../Pages/Dashboard/Teacher/TeacherMobileDashboard/ClassStudents/ClassStudents";

const ClassManagment = () => {
  const [openTabe, setOpenTabe] = useState("student");
  return (
    <div>
      <SubBanner
        url={"/teacher-dashboard/1"}
        icon={<RiPencilRuler2Line className="text-[28px] " />}
        title={"Class Management"}
      />

      {/* ==== Short Tab ==== */}
      <div className="flex items-center justify-around my-[20px]">
        <button
          onClick={() => setOpenTabe("student")}
          className={`flex flex-col items-center justify-center ${
            openTabe === "student" ? "text-[#07A698]" : "text-black"
          }`}
        >
          <PiStudentFill className="text-[40px]" />
          <h2 className="text-black">Student</h2>
        </button>
        <button
          onClick={() => setOpenTabe("attendance")}
          className={`flex flex-col items-center justify-center ${
            openTabe === "attendance" ? "text-[#07A698]" : "text-black"
          }`}
        >
          <MdOutlineLibraryBooks className="text-[40px]" />
          <h2 className="text-black">Attendance</h2>
        </button>
      </div>

      {/* ==== Class Studetn ===== */}
      <ClassStudents studentShowRole={openTabe} />
    </div>
  );
};

export default ClassManagment;
