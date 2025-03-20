import React from "react";
import ReactOdometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";
import Reveal from "../Reveal/Reveal";

const Countdown = ({ img, number, title, main_title }) => {
  return (
    <Reveal>
      <div className=" bg-white p-[20px] rounded-[15px] w-[160px] py-[20px] shadow-sm">
        <div className="flex items-center justify-center">
          <img className="w-[50px]" src={img} alt="student" />
        </div>
        <div className="text-center mt-[10px]">
          <h2 className="text-[#1d5276] text-[25px] font-bold">
            <ReactOdometer value={number} format="(.ddd),dd" /> {title}
          </h2>
          <p className="text-[#1d5276]">{main_title}</p>
        </div>
      </div>
    </Reveal>
  );
};

export default Countdown;
