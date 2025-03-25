import React from "react";

const TabBtn = ({ title, currentTab, setCurrentTab }) => {
  return (
    <button
      onClick={() => setCurrentTab(title)}
      className={` px-[10px] rounded-[13px]  py-[2px] uppercase ${
        currentTab === title
          ? "bg-[#07A698] text-white"
          : "text-black bg-inherit"
      }`}
    >
      {title}
    </button>
  );
};

export default TabBtn;
