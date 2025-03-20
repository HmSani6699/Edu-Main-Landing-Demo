import React from "react";

const CurriCulumCard = ({ icon, name, subject }) => {
  return (
    <div className="border bg-[#e2e6ef] flex  items-center gap-[20px] p-[20px] rounded-[10px]">
      <div className="bg-white p-[15px] rounded-[10px]">{icon}</div>
      <div className="flex flex-col">
        <h2 className="font-semibold text-[20px]">Class {name}</h2>
        <p>Subject: {subject}</p>
      </div>
    </div>
  );
};

export default CurriCulumCard;
