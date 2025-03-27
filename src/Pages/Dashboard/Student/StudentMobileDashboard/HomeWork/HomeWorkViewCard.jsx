import React from "react";
import Reveal from "../../../../../Component/Reveal/Reveal";
import { FaBook } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const HomeWorkViewCard = ({
  id,
  subject,
  page,
  assignDate,
  submissionDate,
  description,
  img,
  name,
  homeWorkDetailsOpen,
  setHomeWorkDetailsOpen,
}) => {
  return (
    <Reveal>
      <div className="border-[#07A698] border rounded-[5px]">
        <div
          onClick={() => setHomeWorkDetailsOpen(id)}
          className="bg-[#07A698] px-[10px] py-[5px] rounded-t-[5px] flex items-center justify-between text-white"
        >
          <div className="flex items-center gap-[6px] ">
            <FaBook className="text-white" />
            <h2 className="text-[20px] text-white">{subject}</h2>
          </div>
          <IoIosArrowDown />
        </div>

        {/* */}
        {homeWorkDetailsOpen === id && (
          <div className="p-[20px]">
            <p className="text-[#043334]">
              Page: <span className="text-gray-400">{page}</span>
            </p>
            <p className="text-[#043334]">
              Assign Date:<span className="text-gray-400">{assignDate}</span>
            </p>
            <p className="text-[#043334]">
              Submission Date:
              <span className="text-gray-400">{submissionDate}</span>
            </p>

            <p className="text-gray-400 my-[20px]">{description}</p>

            <div className="border border-gray-300 my-[10px]"></div>
            <div className="flex items-center justify-center">
              <div className="flex items-center gap-[5px]">
                <div className="h-[30px] w-[30px] rounded-full border-[#07A698] border-2 overflow-hidden">
                  <img
                    className="w-full h-full rounded-full"
                    src={img}
                    alt="user image"
                  />
                </div>
                <h2>{name}</h2>
              </div>
            </div>
          </div>
        )}
      </div>
    </Reveal>
  );
};

export default HomeWorkViewCard;
