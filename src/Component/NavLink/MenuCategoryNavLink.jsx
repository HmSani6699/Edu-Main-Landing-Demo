import React from "react";
import { Link } from "react-router-dom";

const MenuCategoryNavLink = ({ url, icon, title }) => {
  return (
    <Link to={url}>
      <div className="flex flex-col items-center justify-center">
        {icon}
        <h2 className="mt-[5px] font-semibold whitespace-nowrap">{title}</h2>
      </div>
    </Link>
  );
};

export default MenuCategoryNavLink;
