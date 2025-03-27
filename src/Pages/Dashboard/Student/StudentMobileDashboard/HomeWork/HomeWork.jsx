import React, { useState } from "react";
import SubBanner from "../../../../../Component/MobileDashboard/SubBanner/SubBanner";
import teacher from "../../../../../../public/teacher1.png";
import { SlBookOpen } from "react-icons/sl";
import HomeWorkViewCard from "./HomeWorkViewCard";
import { CiFilter } from "react-icons/ci";
import InputField from "../../../../../Component/InputField/InputField";

const HomeWork = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [homeWorkDetailsOpen, setHomeWorkDetailsOpen] = useState("1");

  return (
    <div>
      <SubBanner
        url={"/student-dashboard/1"}
        icon={<SlBookOpen className="text-[28px] " />}
        title={"Home Work"}
      />
      {/* ===== */}
      {/* <div className="px-[10px] flex items-end justify-end my-[20px] relative">
        <button
          onClick={() => setFilterOpen(!filterOpen)}
          className="flex items-center bg-[#07A698] text-white px-[15px] py-[6px] rounded-[8px]"
        >
          <CiFilter />
          Filter
        </button>
        {filterOpen && (
          <div className="absolute top-[50px] right-[10px] bg-white border z-40 p-[20px] rounded-[10px] shadow-md">
            <InputField type={"date"} />
            <InputField type={"date"} />
            <div className="flex items-end justify-end gap-[10px]">
              <button className="flex items-center bg-[#07A698] text-white px-[10px] py-[4px] rounded-[8px]">
                Resate
              </button>
              <button className="flex items-center bg-[#07A698] text-white  px-[10px] py-[4px] rounded-[8px]">
                Apply
              </button>
            </div>
          </div>
        )}
      </div> */}

      {/* ===== */}
      <div className="flex flex-col gap-[20px] px-[10px]  my-[30px]">
        {["Bangla", "English", "Arbi"].map((item, i) => (
          <HomeWorkViewCard
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
            homeWorkDetailsOpen={homeWorkDetailsOpen}
            setHomeWorkDetailsOpen={setHomeWorkDetailsOpen}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeWork;
