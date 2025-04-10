import React from "react";
import SubBanner from "../../../../../Component/MobileDashboard/SubBanner/SubBanner";
import { TbCoinTaka } from "react-icons/tb";

const Fees = () => {
  return (
    <div>
      <SubBanner
        url={"/student-dashboard/1"}
        icon={<TbCoinTaka className="text-[28px] " />}
        title={"Fees"}
      />
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-[20px] px-[10px] my-[30px]">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <div className="relative bg-green-300 text-green-600 py-[5px] px-[10px] rounded-[6px] text-center">
            <span className="absolute top-[8px] left-0 bg-white text-black text-[12px] px-[5px] rounded-r-full">
              Paid
            </span>
            January
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fees;
