import React from "react";
import TabBtn from "./TabBtn";

const TabMenu = ({ options, currentTab, setCurrentTab }) => {
  return (
    <div className="mx-[10px] my-[15px]  flex items-center justify-between  border-[#07A698] border-2 rounded-[20px]">
      {options?.map((item, i) => (
        <TabBtn
          key={i}
          title={item}
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        />
      ))}
    </div>
  );
};

export default TabMenu;
