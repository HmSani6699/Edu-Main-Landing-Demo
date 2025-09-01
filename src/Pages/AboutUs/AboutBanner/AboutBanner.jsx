import React from "react";
import "./AboutBanner.css";
import about from "../../../../public/about1.jpg";
import video_play from "../../../../public/video_play_green.svg";
import Reveal from "../../../Component/Reveal/Reveal";
import logo from "../../../../public/logo1.png";

const AboutBanner = () => {
  return (
    <Reveal>
      {" "}
      <div className="about_banner_container  w-full py-[60px]">
        <div className="max-w-[1200px] mx-auto lg:flex items-center justify-center gap-[30px] px-[10px]">
          <div className="lg:w-1/2">
            <Reveal>
              <img src={logo} alt="" />
              <p className="text-white mt-[10px] text-[18px] text-center lg:text-start">
                EduSadiq হলো একটি আধুনিক শিক্ষাপ্রতিষ্ঠান ব্যবস্থাপনা
                প্ল্যাটফর্ম, যেখানে প্রযুক্তির মাধ্যমে শিক্ষা পরিচালনা আরও সহজ,
                স্মার্ট ও কার্যকর করা হয়। ইতিমধ্যেই ১৫০+ প্রতিষ্ঠান, ২০,০০০+
                শিক্ষার্থী, ৮০০+ শিক্ষক এবং ১৯,০০০+ অভিভাবক আমাদের সেবার সাথে
                যুক্ত হয়ে উপকৃত হচ্ছেন।
              </p>
            </Reveal>
          </div>
          <div className="lg:w-1/2 lg:mt-0 mt-[20px]">
            <Reveal>
              <div className="h-full w-full border-[5px] rounded-[20px] relative">
                <img
                  className=" h-full w-full rounded-[18px]"
                  src={about}
                  alt=""
                />
                <img
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  src={video_play}
                  alt=""
                />
              </div>{" "}
            </Reveal>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default AboutBanner;
