import React, { useState } from "react";
import SubBanner from "../../../../../Component/MobileDashboard/SubBanner/SubBanner";
import TabMenu from "../../../../../Component/MobileDashboard/TabMenu/TabMenu";

const ClassPerformance = () => {
  const [currentTab, setCurrentTab] = useState("day");
  return (
    <div>
      <SubBanner
        url={"/student-dashboard/1"}
        // icon={<FaRegLightbulb className="text-[28px] " />}
        title={"Performance"}
      />
      <TabMenu
        options={["day", "week", "month", "years"]}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
      <div className="px-[10px] grid grid-cols-3 gap-[10px] my-[30px]">
        <div className="border border-l-[#07A698] border-l-[3px] shadow-lg rounded-[10px] p-[10px] text-center">
          <p className="font-bold text-[20px]">10</p>
          <h2>Present</h2>
        </div>
        <div className="border border-l-[#f14040] border-l-[3px] shadow-lg rounded-[10px] p-[10px] text-center">
          <p className="font-bold text-[20px]">10</p>
          <h2>Absent</h2>
        </div>
        <div className="border border-l-[#e0ec5e] border-l-[3px] shadow-lg rounded-[10px] p-[10px] text-center">
          <p className="font-bold text-[20px]">10</p>
          <h2>Leave</h2>
        </div>
      </div>
    </div>
  );
};

export default ClassPerformance;
