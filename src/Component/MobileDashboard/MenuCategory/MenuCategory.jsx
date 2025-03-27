import React from "react";
import { FaRegLightbulb } from "react-icons/fa";
import {
  MdHeadsetMic,
  MdOutlineCalendarMonth,
  MdOutlineCoPresent,
} from "react-icons/md";
import { RiPassPendingLine, RiPencilRuler2Line } from "react-icons/ri";
import { SlBookOpen } from "react-icons/sl";
import { TbCoinTaka } from "react-icons/tb";
import MenuCategoryNavLink from "../../NavLink/MenuCategoryNavLink";

const MenuCategory = () => {
  return (
    <div className="my-[30px] grid grid-cols-3 px-[10px] gap-[20px] ">
      <MenuCategoryNavLink
        url={"/student-class"}
        icon={<RiPencilRuler2Line className="text-[30px] text-[#043334]" />}
        title={"Class"}
      />
      <MenuCategoryNavLink
        url={"/student-home-work"}
        icon={<SlBookOpen className="text-[28px] text-[#043334]" />}
        title={"Home Work"}
      />
      <MenuCategoryNavLink
        url={"/student-exam-result"}
        icon={<MdOutlineCoPresent className="text-[30px] text-[#043334]" />}
        title={"Exam"}
      />

      <MenuCategoryNavLink
        url={"/student-fees"}
        icon={<TbCoinTaka className="text-[30px] text-[#043334]" />}
        title={"Fees"}
      />

      <MenuCategoryNavLink
        url={"/notice"}
        icon={<FaRegLightbulb className="text-[30px] text-[#043334]" />}
        title={"Notice"}
      />
      <MenuCategoryNavLink
        url={"/student-leave"}
        icon={<MdOutlineCalendarMonth className="text-[30px] text-[#043334]" />}
        title={"Leave"}
      />
    </div>
  );
};

export default MenuCategory;
