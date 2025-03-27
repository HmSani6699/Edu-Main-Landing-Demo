import React from "react";
import shap_image from "../../../../public/testi-shape-1.png";
import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";

const SubBanner = ({ url, icon, title }) => {
  return (
    <div className="banner_container text-white p-[20px]  relative">
      <div className="absolute top-0 right-0">
        <img className="w-[100px]" src={shap_image} alt="shape" />
      </div>
      <Link to={url}>
        <IoArrowBackOutline className="text-[20px]" />
      </Link>

      <div className="flex flex-col items-center justify-center">
        {icon}
        <h2 className="text-[25px] mt-[10px]">{title}</h2>
      </div>
    </div>
  );
};

export default SubBanner;
