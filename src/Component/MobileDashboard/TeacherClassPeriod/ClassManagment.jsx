import React from "react";
import SubBanner from "../SubBanner/SubBanner";
import { RiPencilRuler2Line } from "react-icons/ri";
import { PiStudentFill } from "react-icons/pi";
import { MdOutlineLibraryBooks } from "react-icons/md";

const ClassManagment = () => {
  return (
    <div>
      <SubBanner
        url={"/student-dashboard/1"}
        icon={<RiPencilRuler2Line className="text-[28px] " />}
        title={"Class Management"}
      />

      {/* ==== Short Tab ==== */}
      <div className="flex items-center justify-around my-[20px]">
        <button className="flex flex-col items-center justify-center">
          <PiStudentFill className="text-[40px]" />
          <h2>Student</h2>
        </button>
        <button className="flex flex-col items-center justify-center">
          <MdOutlineLibraryBooks className="text-[40px]" />
          <h2>Attendance</h2>
        </button>
      </div>
    </div>
  );
};

export default ClassManagment;
