import React from "react";
import Reveal from "../../../../../Component/Reveal/Reveal";
import { FaBook } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const ExamResultViewCard = ({
  id,
  examName,
  subject,
  maxMarks,
  minMarks,
  MarksObtained,
  status,
  examResultDetailsOpen,
  setExamResultDetailsOpen,
}) => {
  return (
    <Reveal>
      <div className="border-[#07A698] border rounded-[5px]">
        <div
          onClick={() => setExamResultDetailsOpen(id)}
          className="bg-[#07A698] px-[10px] py-[5px] rounded-t-[5px] flex items-center justify-between text-white"
        >
          <div className="flex items-center gap-[6px] ">
            <FaBook className="text-white" />
            <h2 className="text-[20px] text-white">{examName}</h2>
          </div>
          <IoIosArrowDown />
        </div>

        {/* */}
        {examResultDetailsOpen === id && (
          <div className="p-[20px] overflow-x-auto">
            <table className="overflow-auto whitespace-nowrap">
              <thead>
                <tr className="bg-[#cdced161] text-[#202c4b]">
                  <th className="px-[20px] py-[10px]">Subject</th>
                  <th className="px-[20px] py-[10px]">Max Marks</th>
                  <th className="px-[20px] py-[10px]">Min Marks</th>
                  <th className="px-[20px] py-[10px]">Marks Obtained</th>
                  <th className="px-[20px] py-[10px]">Result</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-[20px] py-[10px]">Bangla</td>
                  <td className="px-[20px] py-[10px] text-center">100</td>
                  <td className="px-[20px] py-[10px] text-center">33</td>
                  <td className="px-[20px] py-[10px] text-center">50</td>
                  <td className="px-[20px] py-[10px] ">
                    <h1 className="bg-green-200 px-[10px] rounded-[4px]">
                      Pass
                    </h1>
                  </td>
                </tr>
                <tr>
                  <td className="px-[20px] py-[10px]">English</td>
                  <td className="px-[20px] py-[10px] text-center">100</td>
                  <td className="px-[20px] py-[10px] text-center">33</td>
                  <td className="px-[20px] py-[10px] text-center">20</td>
                  <td className="px-[20px] py-[10px] ">
                    <h1 className="bg-red-200 px-[10px] rounded-[4px]">Fale</h1>
                  </td>
                </tr>
                <tr>
                  <td className="px-[20px] py-[10px]">Arabic</td>
                  <td className="px-[20px] py-[10px] text-center">100</td>
                  <td className="px-[20px] py-[10px] text-center">33</td>
                  <td className="px-[20px] py-[10px] text-center">50</td>
                  <td className="px-[20px] py-[10px] ">
                    <h1 className="bg-green-200 px-[10px] rounded-[4px]">
                      Pass
                    </h1>
                  </td>
                </tr>
                <tr className="bg-[#043334] text-white">
                  <td className="px-[20px] py-[10px]"></td>
                  <td className="px-[20px] py-[10px] text-center">500</td>
                  <td className="px-[20px] py-[10px] text-center">100</td>
                  <td className="px-[20px] py-[10px] text-center">70</td>
                  <td className="px-[20px] py-[10px] text-center"></td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </Reveal>
  );
};

export default ExamResultViewCard;
