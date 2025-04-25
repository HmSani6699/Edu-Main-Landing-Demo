import React from "react";
import CustomSearchForm from "../../../../../Component/CustomSearchForm/CustomSearchForm";
import ClassStudentCard from "./ClassStudentCard";
import student1 from "../../../../../../public/student/student1.jpeg";
import student2 from "../../../../../../public/student/student2.jpeg";
import student3 from "../../../../../../public/student/student3.jpeg";
import student4 from "../../../../../../public/student/student4.jpeg";
import student5 from "../../../../../../public/student/student5.jpeg";
import student6 from "../../../../../../public/student/student6.jpeg";
import student7 from "../../../../../../public/student/student7.jpeg";
import student8 from "../../../../../../public/student/student8.jpeg";

const ClassStudents = ({ studentShowRole }) => {
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
    <div className="px-[10px] my-[30px]">
      <CustomSearchForm classAdd="w-full" />

      {studentShowRole === "attendance" && (
        <div className="flex items-center justify-between gap-[10px] mt-[15px]">
          <div className="border rounded-[10px] shadow-md w-full p-[10px]">
            <p className="text-center font-bold text-[18px]">10</p>
            <h2 className="text-center text-gray-400 text-[14px]">Total Pre</h2>
          </div>
          <div className="border rounded-[10px] shadow-md w-full p-[10px]">
            <p className="text-center font-bold text-[18px]">08</p>
            <h2 className="text-center text-gray-400 text-[14px]">Total Abs</h2>
          </div>
          <div className="border rounded-[10px] shadow-md w-full p-[10px]">
            <p className="text-center font-bold text-[18px]">01</p>
            <h2 className="text-center text-gray-400 text-[14px]">Total Lat</h2>
          </div>
        </div>
      )}

      {/* =====> Student cart <===== */}

      <div className="flex flex-col gap-[10px] mt-[20px] ">
        {allstudent?.map((item, i) => (
          <ClassStudentCard
            key={i}
            item={item}
            studentShowRole={studentShowRole}
          />
        ))}
      </div>
    </div>
  );
};

export default ClassStudents;
