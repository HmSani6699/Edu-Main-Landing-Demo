import React from "react";
import { FaDownload } from "react-icons/fa6";
import student from "../../../../../../public/student/student1.jpeg";
import shap_image from "../../../../../../public/testi-shape-1.png";
import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";

const TeacherSalary = () => {
  return (
    <div>
      <div className="pb-[50px]">
        {/* =======> Basic <==== */}

        <div className="banner_container text-white p-[20px]  relative h-[100px]">
          <div className="absolute top-0 right-0">
            <img className="w-[100px]" src={shap_image} alt="shape" />
          </div>
          <div className=" flex items-center gap-[5px]">
            <Link to={"/teacher-dashboard/1"}>
              <IoArrowBackOutline className="text-[20px]" />
            </Link>
            <h2>Sadiq</h2>
          </div>

          <div className="h-[100px] w-[100px] rounded-full border-white border-2 absolute bottom-[-50px] left-1/2 transform -translate-x-1/2">
            <img
              className="w-full h-full rounded-full"
              src={student}
              alt="user avatar"
            />
          </div>
        </div>
      </div>
      <div className=" px-[20px] mb-[30px]">
        {/* Profile Section */}

        <div className="text-center mt-[10px]">
          <h2 className="text-lg font-semibold text-gray-800">
            Sarah Anderson
          </h2>
          <p className="text-sm text-gray-500">Senior Mathematics Teacher</p>
        </div>

        {/* Apply for Leave Button */}
        <button className="w-full bg-[#07A698] text-white py-2 rounded-md font-medium mb-6 mt-[30px]">
          + Apply for Leave
        </button>

        {/* Leave Status */}
        <div className="mb-6">
          <h3 className="text-md font-semibold text-gray-800 mb-4">
            Leave Status
          </h3>

          <div className="flex justify-between items-start mb-4">
            <div>
              <span className="bg-green-100 text-green-600 text-xs font-semibold px-2 py-1 rounded-full">
                Approved
              </span>
              <p className="text-sm text-gray-700 mt-2">Sick Leave</p>
              <p className="text-xs text-gray-400">15 Feb - 16 Feb, 2025</p>
            </div>
            <p className="text-sm text-gray-600">2 days</p>
          </div>

          <div className="flex justify-between items-start">
            <div>
              <span className="bg-yellow-100 text-yellow-600 text-xs font-semibold px-2 py-1 rounded-full">
                Pending
              </span>
              <p className="text-sm text-gray-700 mt-2">Personal Leave</p>
              <p className="text-xs text-gray-400">20 Feb, 2025</p>
            </div>
            <p className="text-sm text-gray-600">1 day</p>
          </div>
        </div>

        {/* Salary Details */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-md font-semibold text-gray-800">
              Salary Details
            </h3>
            <a
              href="#"
              className="flex items-center gap-1 text-sm text-blue-600 hover:underline"
            >
              <FaDownload className="text-xs" /> Download Slip
            </a>
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <p className="text-gray-700 font-medium">January 2025</p>
              <p className="text-green-600 font-semibold">Credited</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600">Basic Salary</p>
              <p className="text-gray-800">$4,500</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600">Allowances</p>
              <p className="text-gray-800">$800</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600">Deductions</p>
              <p className="text-red-600">- $350</p>
            </div>

            <div className="border-t pt-2 flex justify-between font-semibold">
              <p className="text-gray-800">Net Pay</p>
              <p className="text-blue-600">$4,950</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherSalary;
