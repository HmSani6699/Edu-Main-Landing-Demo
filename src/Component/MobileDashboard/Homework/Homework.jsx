import React, { useState } from "react";
import teacher from "../../../../public/Teacher/teacher1.png";
import HomeworkCard from "./HomeworkCard";
import { CiFilter } from "react-icons/ci";
import InputField from "../../InputField/InputField";

const Homework = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  return (
    <div>
      <div className="px-[10px] flex items-end justify-end my-[20px] relative">
        <button
          onClick={() => setFilterOpen(!filterOpen)}
          className="flex items-center bg-[#07A698] text-white px-[15px] py-[6px] rounded-[8px]"
        >
          <CiFilter />
          Filter
        </button>
        {filterOpen && (
          <div className="absolute top-[50px] right-[10px] bg-white border z-40 p-[20px] rounded-[10px] shadow-md">
            <div className="flex flex-col gap-[10px]">
              <InputField title={"Date"} type={"date"} />
              <InputField title={"Subject"} type={"text"} />
            </div>
            <div className="flex items-end justify-end gap-[10px] mt-[15px]">
              <button
                onClick={() => setFilterOpen(false)}
                className="flex items-center bg-[#07A698] text-white px-[10px] py-[4px] rounded-[8px]"
              >
                Resate
              </button>
              <button
                onClick={() => setFilterOpen(false)}
                className="flex items-center bg-[#07A698] text-white  px-[10px] py-[4px] rounded-[8px]"
              >
                Apply
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="px-[10px] flex flex-col gap-[10px] my-[20px]">
        {["Bangla", "English", "Arabic"].map((item, i) => (
          <HomeworkCard
            id={i + 1}
            subject={item}
            img={teacher}
            name={"Md: Sadiq"}
            page={"10"}
            assignDate={"10/02/2025"}
            submissionDate={"10/02/2025"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quasi autem natus quaerat, illo optio mollitia amet illum in explicabo?"
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Homework;
