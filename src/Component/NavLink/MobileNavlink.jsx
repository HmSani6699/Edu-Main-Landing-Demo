import React from "react";
import { Link } from "react-router-dom";

const MobileNavlink = ({ url, icon, title, setIsOpenMenu }) => {
  return (
    <Link to={url}>
      <div
        onClick={() => setIsOpenMenu(false)}
        className="flex items-center gap-[10px]"
      >
        <div className="w-[30px] h-[30px] flex items-center justify-center bg-white  overflow-hidden">
          {icon}
        </div>
        {title}
      </div>
    </Link>
  );
};

export default MobileNavlink;
