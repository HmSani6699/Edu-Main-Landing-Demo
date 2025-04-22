import React from "react";
import MenuCategoryNavLink from "../../NavLink/MenuCategoryNavLink";

const MenuCategory = ({ options }) => {
  return (
    <div className="my-[30px] grid grid-cols-3 px-[10px] gap-[20px] ">
      {options?.map((item, i) => (
        <MenuCategoryNavLink
          url={item?.url}
          icon={item?.icon}
          title={item?.title}
        />
      ))}
    </div>
  );
};

export default MenuCategory;
