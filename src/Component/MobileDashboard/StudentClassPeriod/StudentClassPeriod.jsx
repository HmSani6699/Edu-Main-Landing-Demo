import React, { useState } from "react";
import ClassPeriodCard from "../../../Pages/Dashboard/Student/StudentMobileDashboard/ClassPeriodCard";
import teacher from "../../../../public/teacher1.png";
import TabMenu from "../TabMenu/TabMenu";

const StudentClassPeriod = () => {
  const [currentTab, setCurrentTab] = useState("Sat");
  return (
    <div>
      <TabMenu currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <div className="px-[10px] flex flex-col gap-[20px] my-[30px]">
        <ClassPeriodCard
          subject={"Bangla"}
          time={"09:00 AM - 10:00 AM"}
          img={teacher}
          name={"Md: Sadiq"}
          period={"1"}
        />
        <ClassPeriodCard
          subject={"Bangla"}
          time={"09:00 AM - 10:00 AM"}
          img={teacher}
          name={"Md: Sadiq"}
          period={"1"}
        />
        <ClassPeriodCard
          subject={"Bangla"}
          time={"09:00 AM - 10:00 AM"}
          img={teacher}
          name={"Md: Sadiq"}
          period={"1"}
        />
        <ClassPeriodCard
          subject={"Bangla"}
          time={"09:00 AM - 10:00 AM"}
          img={teacher}
          name={"Md: Sadiq"}
          period={"1"}
        />
        <ClassPeriodCard
          subject={"Bangla"}
          time={"09:00 AM - 10:00 AM"}
          img={teacher}
          name={"Md: Sadiq"}
          period={"1"}
        />
        <ClassPeriodCard
          subject={"Bangla"}
          time={"09:00 AM - 10:00 AM"}
          img={teacher}
          name={"Md: Sadiq"}
          period={"1"}
        />
      </div>
    </div>
  );
};

export default StudentClassPeriod;
