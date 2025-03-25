import React from "react";
import TabBtn from "./TabBtn";

const TabMenu = ({ currentTab, setCurrentTab }) => {
  return (
    <div className="mx-[10px] my-[15px]  flex items-center justify-between  border-[#07A698] border-2 rounded-[20px]">
      <TabBtn
        title={"Sat"}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
      <TabBtn
        title={"Sun"}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
      <TabBtn
        title={"Mon"}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
      <TabBtn
        title={"Tue"}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
      <TabBtn
        title={"Wed"}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
      <TabBtn
        title={"Thu"}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
      <TabBtn
        title={"Fri"}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
    </div>
  );
};

export default TabMenu;
