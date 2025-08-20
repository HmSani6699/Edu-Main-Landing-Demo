import React from "react";
import "./Banner.css";
import student from "../../../../public/student.png";
import teacher from "../../../../public/teacher.png";
import staff from "../../../../public/staff.png";
import section from "../../../../public/section.png";
import Countdown from "../../../Component/Countdown/Countdown";
import "./Banner.css";
import logo from "../../../../public/logo2.png";
import bannerLeft from "../../../../public/bannerLeft.png";
import bannerRight from "../../../../public/bannerRight.png";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import Reveal from "../../../Component/Reveal/Reveal";

import img1 from "../../../../public/im1.png";
import img2 from "../../../../public/im2.png";

const Banner = () => {
  return (
    <div className=" h-[560px] ">
      <div className="bg-[#1e567bb5] h-full lg:flex   text-white hero-section  pt-[50px] ">
        {/* =====>left  content <==== */}

        <Reveal>
          <div className="hidden lg:block mt-[50px]">
            <img src={img1} alt="" />
          </div>
        </Reveal>
        {/* =====>Middle content <==== */}
        <div className="text-center">
          <Reveal>
            <div className="flex items-center justify-center">
              <div className="w-[205px]">
                <img src={logo} alt="logo" className="w-full h-full" />
              </div>
            </div>
          </Reveal>
          <Reveal>
            <h2 className="lg:text-[30px] text-[23px]  font-bold text-white lg:mt-[20px] mt-[30px]">
              আপনার শিক্ষা-প্রতিষ্ঠান
              <span className="text-[#07A698] ml-[8px] mr-[8px]">
                পরিচালনার সকল কাজকে
              </span>
              <br className="lg:block hidden" />
              সহজ এবং Smooth করবে।
            </h2>
          </Reveal>
          <Reveal>
            <div className=" text-center flex items-center justify-center">
              <p className="font-semibold text-[#07A698] text-[16px] lg:mt-[20px] mt-[10px]  lg:w-[75%]">
                আপনি যদি কোনো মাদ্রাসা, স্কুল, কোচিং অথবা যেকোনো
                শিক্ষা-প্রতিষ্ঠান পরিচালনার দায়িত্বে থাকেন, তাহলে এই
                সফটওয়্যারটি আপনার জন্য।
              </p>
            </div>
          </Reveal>

          <div className="flex items-center justify-center gap-[20px] lg:mt-[40px] mt-[20px]">
            <Reveal>
              <div className="flex items-center gap-[10px]">
                <IoCheckmarkDoneCircle className="text-[#07A698]" />
                <p className="underline">ফিচারসমূহ</p>
              </div>
            </Reveal>
            <Reveal>
              <div className="flex items-center gap-[10px]">
                <button className="py-[8px] px-[30px] rounded-[8px] bg-[#07A698] text-white font-bold">
                  ডেমো এক্সেস নিন
                </button>
              </div>
            </Reveal>
          </div>
        </div>
        {/* =====>right  content <==== */}
        <Reveal>
          <div className="relative -z-50 hidden lg:block mt-[70px]">
            <img src={img2} alt="" />
          </div>
        </Reveal>
      </div>
      <div>
        <div className=" grid grid-cols-2 lg:grid-cols-4 lg:gap-[20px] gap-[10px] relative z-50  lg:-mt-[140px] -mt-[160px] rounded-[10px] lg:p-[30px] p-[10px] lg:max-w-[790px] mx-auto">
          <Countdown
            img={section}
            number={"05"}
            title={" টি+"}
            main_title={"প্রতিষ্ঠান"}
          />
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
            main_title={"অভিভাবক"}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
