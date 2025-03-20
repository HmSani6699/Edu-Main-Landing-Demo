import React from "react";
import "./Banner.css";
import student from "../../../../public/student.png";
import teacher from "../../../../public/teacher.png";
import staff from "../../../../public/staff.png";
import section from "../../../../public/section.png";
import Countdown from "../../../Component/Countdown/Countdown";
import "./Banner.css";
import logo from "../../../../public/school.png";
import bannerLeft from "../../../../public/bannerLeft.png";
import bannerRight from "../../../../public/bannerRight.png";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

const Banner = () => {
  return (
    <div className="rounded-bl-[20px] h-[560px]">
      <div className="bg-[#1e567bb5] h-full flex   text-white hero-section  pt-[50px] ">
        {/* =====>left  content <==== */}
        <div>
          <img src={bannerLeft} alt="" />
        </div>
        {/* =====>Middle content <==== */}
        <div className="text-center ">
          <div className="flex items-center justify-center">
            <div className="w-[135px] bg-white rounded-full border-[#07A698] border-2">
              <img src={logo} alt="" />
            </div>
          </div>
          <h2 className="text-[35px] whitespace-nowrap font-bold text-white mt-[10px]">
            পাকুন্ডা ইসলামিয়া হাফেজিয়া মাদ্রাসা
          </h2>

          <p className="font-semibold text-[#07A698] text-[18px]">
            পাকুন্ডা, সোনারগাঁ, নারায়ণগঞ্জ
          </p>
          <div className="flex items-center justify-center gap-[20px] mt-[20px]">
            <div className="flex items-center gap-[10px]">
              <IoCheckmarkDoneCircle className="text-[#07A698]" />
              <p>গ্রেট লাইফ</p>
            </div>
            <div className="flex items-center gap-[10px]">
              <IoCheckmarkDoneCircle className="text-[#07A698]" />
              <p>গ্রেট সার্টিফিকেট</p>
            </div>
          </div>
        </div>
        {/* =====>right  content <==== */}
        <div className="relative -z-50">
          <img src={bannerRight} alt="" />
        </div>
      </div>
      <div>
        <div className=" flex items-center justify-center gap-[20px] relative z-50  -mt-[140px] rounded-[10px] p-[30px]">
          <Countdown
            img={student}
            number={"200"}
            title={"জন+"}
            main_title={"শিক্ষার্থী"}
          />
          <Countdown
            img={teacher}
            number={"10"}
            title={"জন+"}
            main_title={"শিক্ষক"}
          />
          <Countdown
            img={staff}
            number={"04"}
            title={"জন+"}
            main_title={"কর্মী"}
          />
          <Countdown
            img={section}
            number={"05"}
            title={" টি+"}
            main_title={"বিভাগ"}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
