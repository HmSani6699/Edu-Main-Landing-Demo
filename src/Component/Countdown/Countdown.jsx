import React from "react";
import ReactOdometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";

const Countdown = ({ img, number, title, main_title }) => {
  return (
    <div className="flex items-center gap-[10px] ">
      <img className="w-[50px]" src={img} alt="student" />
      <div>
        <h2 className="text-[#1d5276] text-[25px] font-bold">
          {" "}
          <ReactOdometer value={number} format="(.ddd),dd" /> {title}
        </h2>
        <p className="text-[#1d5276]">{main_title}</p>
      </div>
    </div>
  );
};

export default Countdown;
