import React from "react";
import InputField from "../../../../../../Component/InputField/InputField";

const HomeworkCreateUpdate = () => {
  return (
    <div className="px-[20px] py-[20px] bg-white flex flex-col gap-[20px] ">
      <InputField title={"Subject"} placeholder={"Select the subject"} />
      <InputField title={"Assigen Date"} type={"date"} />
      <InputField title={"Submission Date"} type={"date"} />
      <div>
        <p className="text-[16px] mb-[8px] ">Description</p>
        <textarea
          placeholder="Enter your Message"
          className="w-full border-none outline-none py-[6px] px-[25px] rounded-[8px] text-black bg-gray-100 h-[150px] "
        ></textarea>
      </div>
      <div>
        <button
          onClick={() => setFilterOpen(false)}
          className="flex items-center bg-[#07A698] text-white  px-[10px] py-[4px] rounded-[8px] "
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default HomeworkCreateUpdate;
