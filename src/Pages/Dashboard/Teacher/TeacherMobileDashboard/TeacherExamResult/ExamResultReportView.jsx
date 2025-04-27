import React from "react";
import ProfileBanner from "../StudentMobileProfile/ProfileBanner/ProfileBanner";

const ExamResultReportView = () => {
  const subjects = [
    {
      name: "Mathematics",
      lastTest: "95/100",
      grade: "A+",
      status: "Improved",
      statusColor: "text-green-500",
    },
    {
      name: "Science",
      lastTest: "88/100",
      grade: "A",
      status: "Stable",
      statusColor: "text-orange-500",
    },
    {
      name: "Science",
      lastTest: "88/100",
      grade: "A",
      status: "Stable",
      statusColor: "text-orange-500",
    },
    {
      name: "Mathematics",
      lastTest: "95/100",
      grade: "A+",
      status: "Improved",
      statusColor: "text-green-500",
    },
  ];
  return (
    <div>
      <ProfileBanner url={"/teacher-exam-result-details"} />
      <div className="px-[10px] mt-[20px]">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          Performance Overview
        </h2>
        {/*=============  */}
        <div className="bg-blue-50 rounded-lg p-4 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <p className="text-gray-500 font-medium">Overall Grade</p>
            <p className="text-[#07A698] font-bold text-xl">A+</p>
          </div>

          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="bg-white rounded-lg py-3 shadow-sm">
              <p className="text-gray-500 text-sm">Average</p>
              <p className="text-[#07A698] font-semibold text-lg">92%</p>
            </div>
            <div className="bg-white rounded-lg py-3 shadow-sm">
              <p className="text-gray-500 text-sm">Rank</p>
              <p className="text-[#07A698] font-semibold text-lg">#2</p>
            </div>
            <div className="bg-white rounded-lg py-3 shadow-sm">
              <p className="text-gray-500 text-sm">Attendance</p>
              <p className="text-[#07A698] font-semibold text-lg">95%</p>
            </div>
          </div>
        </div>
      </div>

      {/* =====> Subject Performance <===== */}
      <div className="px-[10px] my-[30px]">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Subject Performance
        </h2>

        <div className="flex flex-col gap-4">
          {subjects.map((subject, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 flex items-center justify-between"
            >
              <div>
                <h3 className="text-md font-semibold text-gray-800">
                  {subject.name}
                </h3>
                <p className="text-gray-500 text-sm">
                  Last Test: {subject.lastTest}
                </p>
              </div>

              <div className="flex flex-col items-end mt-2 sm:mt-0">
                <span className="text-blue-600 font-bold">{subject.grade}</span>
                <span className={`${subject.statusColor} text-sm`}>
                  {subject.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExamResultReportView;
