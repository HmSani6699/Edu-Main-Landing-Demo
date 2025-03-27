import React from "react";
import SubBanner from "../SubBanner/SubBanner";
import { FaRegLightbulb } from "react-icons/fa";

const NoticeBoard = () => {
  return (
    <div>
      <SubBanner
        url={"/student-dashboard/1"}
        icon={<FaRegLightbulb className="text-[28px] " />}
        title={"Notice Board"}
      />
    </div>
  );
};

export default NoticeBoard;
