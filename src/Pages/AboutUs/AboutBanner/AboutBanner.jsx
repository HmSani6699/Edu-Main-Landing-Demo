import React from "react";
import "./AboutBanner.css";
import about from "../../../../public/about1.jpg";
import video_play from "../../../../public/video_play_green.svg";

const AboutBanner = () => {
  return (
    <div className="about_banner_container  w-full py-[60px]">
      <div className="max-w-[1200px] mx-auto lg:flex items-center justify-center gap-[30px] ">
        <div className="lg:w-1/2">
          <h2 className="text-[35px] text-white font-bold">
            শিখুন, নয়তো শেখান
          </h2>
          <p className="text-white mt-[10px] text-[18px]">
            পাকুন্ডা সরকারি প্রাথমিক বিদ্যালয়, ২০০০ সালে প্রতিষ্ঠিত বাংলাদেশের
            সর্বাধুনিক শিক্ষা প্রযুক্তি প্রতিষ্ঠান। দেশজুড়ে সবার জন্য মানসম্মত
            পড়াশোনা নিশ্চিত করতে অভিজ্ঞ শিক্ষক শিক্ষিকা এবং অত্যাধুনিক
            প্রযুক্তির সাহায্যে আমরা গড়ে তুলেছি সহজে শেখার এবং সহজে জেতার এক
            নতুন দুনিয়া!
          </p>
        </div>
        <div className="lg:w-1/2">
          <div className="h-full w-full border-[5px] rounded-[20px] relative">
            <img className=" h-full w-full rounded-[18px]" src={about} alt="" />
            <img
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              src={video_play}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
