import React, { useState } from "react";
import TabMenu from "../TabMenu/TabMenu";
import TeacherClassPeriodCard from "./TeacherClassPeriodCard";

const TeacherClassPeriod = () => {
  const [currentTab, setCurrentTab] = useState("sat");
  return (
    <div>
      <div>
        <TabMenu
          options={["sat", "sun", "mon", "tue", "wed", "thu", "fri"]}
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        />
      </div>
      <div className="px-[10px] flex flex-col gap-[20px] my-[30px]">
        <TeacherClassPeriodCard
          subject={"Bangla"}
          time={"09:00 AM - 10:00 AM"}
          name={"Md: Sadiq"}
          period={"1"}
        />
        <TeacherClassPeriodCard
          subject={"Mathmatic"}
          time={"09:00 AM - 10:00 AM"}
          name={"Md: Sadiq"}
          period={"2"}
        />
        <TeacherClassPeriodCard
          subject={"English"}
          time={"09:00 AM - 10:00 AM"}
          name={"Md: Sadiq"}
          period={"3"}
        />
        <TeacherClassPeriodCard
          subject={"Arabic"}
          time={"09:00 AM - 10:00 AM"}
          name={"Md: Sadiq"}
          period={"4"}
        />
      </div>
    </div>
  );
};

export default TeacherClassPeriod;
