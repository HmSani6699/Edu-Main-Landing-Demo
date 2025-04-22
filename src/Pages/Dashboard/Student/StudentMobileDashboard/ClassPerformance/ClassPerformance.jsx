import React, { useState } from "react";
import SubBanner from "../../../../../Component/MobileDashboard/SubBanner/SubBanner";
import TabMenu from "../../../../../Component/MobileDashboard/TabMenu/TabMenu";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import teacher from "../../../../../../public/teacher1.png";

const ClassPerformance = () => {
  const [currentTab, setCurrentTab] = useState("day");

  const data = [
    { name: "Performance", value: 75 },
    { name: "Remaining", value: 25 },
  ];

  const COLORS = ["#008080", "#e0e0e0"]; // Teal & Light Gray

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

      {/* ====chat === */}
      <div style={{ width: "100%", height: 250 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              x="50%"
              y="10%"
              innerRadius={70}
              outerRadius={100}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize={24}
              fontWeight="bold"
            >
              75%
            </text>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* ==== */}
      <div className="flex items-center gap-[5px] shadow-lg bg-white mx-[10px] mb-[20px] p-[20px]">
        <div className="h-[50px] w-[50px]   overflow-hidden">
          <img className="w-full h-full " src={teacher} alt="user image" />
        </div>
        <h2>Md Sadiq</h2>
      </div>
    </div>
  );
};

export default ClassPerformance;
