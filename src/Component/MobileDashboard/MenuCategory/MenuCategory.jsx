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
        url={"/"}
        icon={<RiPencilRuler2Line className="text-[30px]" />}
        title={"Class"}
      />
      <MenuCategoryNavLink
        url={"/"}
        icon={<SlBookOpen className="text-[30px]" />}
        title={"Home Work"}
      />
      <MenuCategoryNavLink
        url={"/"}
        icon={<MdOutlineCoPresent className="text-[30px]" />}
        title={"Exam & Result"}
      />
      <MenuCategoryNavLink
        url={"/"}
        icon={<TbCoinTaka className="text-[30px]" />}
        title={"Fees"}
      />

      <MenuCategoryNavLink
        url={"/"}
        icon={<FaRegLightbulb className="text-[30px]" />}
        title={"Notice"}
      />
      <MenuCategoryNavLink
        url={"/"}
        icon={<MdOutlineCalendarMonth className="text-[30px]" />}
        title={"Leave"}
      />
    </div>
  );
};

export default MenuCategory;
