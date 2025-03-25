import React from "react";

const TabBtn = ({ title, currentTab, setCurrentTab }) => {
  return (
    <button
      onClick={() => setCurrentTab(title)}
      className={` px-[10px] rounded-[10px] text-[14px] py-[2px] uppercase ${
        currentTab === title
          ? "bg-[#07A698] text-white"
          : "text-[#043334] bg-inherit"
      }`}
    >
      {title}
    </button>
  );
};

export default TabBtn;
