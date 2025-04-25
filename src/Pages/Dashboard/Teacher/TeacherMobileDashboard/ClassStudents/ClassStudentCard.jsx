import React from "react";
import { Link } from "react-router-dom";

const ClassStudentCard = ({ item, studentShowRole }) => {
  return (
    <div
      className={`border-2 shadow-sm rounded-[10px] p-[10px] ${
        studentShowRole === "attendance"
          ? "flex items-center justify-between"
          : "block"
      } ${
        item?.status === "active"
          ? "border-l-[3px] border-l-green-500"
          : item?.status === "inactive"
          ? "border-l-[3px] border-l-red-500"
          : ""
      }`}
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
            <h2 className="font-semibold text-[18px]">{item?.name}</h2>
          </Link>
          <p className="text-[14px] text-gray-500">{item?.address}</p>
        </div>
      </div>
      {/* ====> Attendance content >===== */}
      {studentShowRole === "attendance" && (
        <div className="flex items-center gap-[10px]">
          <button className="hover:bg-[#07A698] hover:text-white bg-gray-300 rounded-[4px] px-[10px] py-[2px]">
            Pre
          </button>
          <button className="hover:bg-[#07A698] hover:text-white bg-gray-300 rounded-[4px] px-[10px] py-[2px]">
            Abs
          </button>
          <button className="hover:bg-[#07A698] hover:text-white bg-gray-300 rounded-[4px] px-[10px] py-[2px]">
            Lat
          </button>
        </div>
      )}
    </div>
  );
};

export default ClassStudentCard;
