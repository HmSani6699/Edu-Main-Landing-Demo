import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

import student from "../../../../../../../public/student/student1.jpeg";
import shap_image from "../../../../../../../public/testi-shape-1.png";

const ProfileBanner = ({ url }) => {
  return (
    <div className="pb-[50px]">
      {/* =======> Basic <==== */}

      <div className="banner_container text-white p-[20px]  relative h-[100px]">
        <div className="absolute top-0 right-0">
          <img className="w-[100px]" src={shap_image} alt="shape" />
        </div>
        <div className=" flex items-center gap-[5px]">
          <Link to={url}>
            <IoArrowBackOutline className="text-[20px]" />
          </Link>
          <h2>Sadiq</h2>
        </div>

        <div className="h-[100px] w-[100px] rounded-full border-white border-2 absolute bottom-[-50px] left-1/2 transform -translate-x-1/2">
          <img
            className="w-full h-full rounded-full"
            src={student}
            alt="user avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
