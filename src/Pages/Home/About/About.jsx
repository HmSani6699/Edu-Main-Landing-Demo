import React, { useState } from "react";
import academy from "../../../../public/teacher.jpg";
import { BiSolidZap } from "react-icons/bi";
import about_shap from "../../../../public/about_shape.png";
import about from "../../../../public/about1.jpg";
import Reveal from "../../../Component/Reveal/Reveal";
import { Link } from "react-router-dom";
import founder from "../../../../public/Teacher/teacher6-2.png";
import {
  FaBookOpen,
  FaClipboardCheck,
  FaHome,
  FaMoneyBillWave,
  FaSms,
  FaUserCheck,
} from "react-icons/fa";
import { FaWandMagicSparkles } from "react-icons/fa6";

const About = () => {
  const [openTabe, setOpenTabe] = useState(1);
  return (
    <div className="lg:mt-[150px] mt-[200px] relative p-[10px] ">
      {/* <div className="absolute top-[30px] left-0">
        <img className="w-[400px]" src={about_shap} alt="" />
      </div> */}
      <div className="max-w-[1100px] mx-auto ">
        <div className="flex items-center justify-center">
          <div>
            <Reveal>
              <div className="flex items-center justify-center">
                <button className="bg-white flex p-[5px]  rounded-full gap-[8px] pr-[10px] text-[14px] ">
                  <div className="bg-[#07a69826] p-[4px] rounded-full">
                    <BiSolidZap className="text-[#07A698]" />
                  </div>
                  আমাদের ফিচারসমূহ
                </button>
              </div>
            </Reveal>
            <Reveal>
              <h2 className="text-[30px] font-bold my-[20px] text-[#162726] text-center lg:text-start">
                আপনার প্রতিষ্ঠানের জন্য ডিজিটাল সমাধান
              </h2>
            </Reveal>
          </div>
        </div>
        {/* ====card === */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[20px] mt-[30px]">
          <Reveal>
            {" "}
            <div className="bg-white shadow-md p-[20px] relative z-10 rounded-[15px]">
              <div className="flex gap-[20px] mb-[20px]">
                <div className="bg-[#07a69826] text-[#07A698] h-[40px] w-[40px] rounded-full flex items-center justify-center">
                  <FaUserCheck className="text-[25px]" />
                </div>
                <div>
                  <h2 className="text-[20px] font-bold">উপস্থিতি</h2>
                  <p className="text-gray-600">স্মার্ট এটেনডেন্স সিস্টেম</p>
                </div>
              </div>
              <div className="flex items-center text-gray-600 gap-[10px] mb-[10px]">
                <p className="bg-gray-600 h-[6px] w-[6px] rounded-full"></p>
                পরীক্ষার ফলাফল SMS এর মাধ্যমে প্রেরণ
              </div>
              <div className="flex items-center text-gray-600 gap-[10px] mb-[10px]">
                <p className="bg-gray-600 h-[6px] w-[6px] rounded-full"></p>
                নোটিশ SMS এর মাধ্যমে প্রেরণ
              </div>
              <div className="flex items-center text-gray-600 gap-[10px] mb-[10px]">
                <p className="bg-gray-600 h-[6px] w-[6px] rounded-full"></p>
                মার্কেটিং SMS প্রেরণ
              </div>
              <div className="flex items-center text-gray-600 gap-[10px] mb-[10px]">
                <p className="bg-gray-600 h-[6px] w-[6px] rounded-full"></p>
                উপস্থিতি SMS নোটিফিকেশন
              </div>
              <div className="flex items-center text-gray-600 gap-[10px]">
                <p className="bg-gray-600 h-[6px] w-[6px] rounded-full"></p>
                SMS হিস্টরি ট্র্যাকিং
              </div>
            </div>
          </Reveal>

          <Reveal>
            {" "}
            <div className="bg-white shadow-md p-[20px] relative z-10 rounded-[15px]">
              <div className="flex gap-[20px] mb-[20px]">
                <div className="bg-[#07a69826] text-[#07A698] h-[40px] w-[40px] rounded-full flex items-center justify-center">
                  <FaClipboardCheck className="text-[25px]" />
                </div>
                <div>
                  <h2 className="text-[20px] font-bold">পরীক্ষা ব্যবস্থাপনা</h2>
                  <p className="text-gray-600">
                    অনলাইন ও অফলাইন পরীক্ষা সিস্টেম
                  </p>
                </div>
              </div>
              <div className="flex items-center text-gray-600 gap-[10px] mb-[10px]">
                <p className="bg-gray-600 h-[6px] w-[6px] rounded-full"></p>
                অনলাইন ও অফলাইন পরীক্ষা গ্রহণ
              </div>
              <div className="flex items-center text-gray-600 gap-[10px] mb-[10px]">
                <p className="bg-gray-600 h-[6px] w-[6px] rounded-full"></p>
                ফলাফল SMS নোটিফিকেশন
              </div>
              <div className="flex items-center text-gray-600 gap-[10px] mb-[10px]">
                <p className="bg-gray-600 h-[6px] w-[6px] rounded-full"></p>
                অনলাইন রেজাল্ট প্রকাশ
              </div>
              <div className="flex items-center text-gray-600 gap-[10px] mb-[10px]">
                <p className="bg-gray-600 h-[6px] w-[6px] rounded-full"></p>
                Students পারফরম্যান্স মেট্রিক্স
              </div>
              <div className="flex items-center text-gray-600 gap-[10px]">
                <p className="bg-gray-600 h-[6px] w-[6px] rounded-full"></p>
                পরীক্ষার বিস্তারিত রিপোর্ট
              </div>
            </div>
          </Reveal>

          <Reveal>
            {" "}
            <div className="bg-white shadow-md p-[20px] relative z-10 rounded-[15px]">
              <div className="flex gap-[20px] mb-[20px]">
                <div className="bg-[#07a69826] text-[#07A698] h-[40px] w-[40px] rounded-full flex items-center justify-center">
                  <FaMoneyBillWave className="text-[25px]" />
                </div>
                <div>
                  <h2 className="text-[20px] font-bold">আর্থিক ব্যবস্থাপনা</h2>
                  <p className="text-gray-600">
                    সম্পূর্ণ আর্থিক লেনদেন ব্যবস্থাপনা
                  </p>
                </div>
              </div>
              <div className="flex items-center text-gray-600 gap-[10px] mb-[10px]">
                <p className="bg-gray-600 h-[6px] w-[6px] rounded-full"></p>
                লেনদেন হিস্টরি
              </div>
              <div className="flex items-center text-gray-600 gap-[10px] mb-[10px]">
                <p className="bg-gray-600 h-[6px] w-[6px] rounded-full"></p>
                আর্থিক রিপোর্ট জেনারেট
              </div>
              <div className="flex items-center text-gray-600 gap-[10px] mb-[10px]">
                <p className="bg-gray-600 h-[6px] w-[6px] rounded-full"></p>
                পেমেন্ট নোটিফিকেশন - বকেয়া/পরিশোধিত
              </div>
              <div className="flex items-center text-gray-600 gap-[10px] mb-[10px]">
                <p className="bg-gray-600 h-[6px] w-[6px] rounded-full"></p>
                রশিদ জেনারেট
              </div>
              <div className="flex items-center text-gray-600 gap-[10px]">
                <p className="bg-gray-600 h-[6px] w-[6px] rounded-full"></p>
                আয়-ব্যয় ব্যবস্থাপনা
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-white shadow-md p-[20px] relative z-10 rounded-[15px]">
              <div className="flex gap-[20px] mb-[20px]">
                <div className="bg-[#07a69826] text-[#07A698] h-[40px] w-[40px] rounded-full flex items-center justify-center">
                  <FaWandMagicSparkles aHome className="text-[25px]" />
                </div>
                <div>
                  <h2 className="text-[20px] font-bold">
                    ওয়েবসাইট কাস্টমাইজেশন
                  </h2>
                  <p className="text-gray-600">
                    ডায়নামিক ওয়েবসাইট ব্যবস্থাপনা
                  </p>
                </div>
              </div>
              <div className="flex items-center text-gray-600 gap-[10px] mb-[10px]">
                <p className="bg-gray-600 h-[6px] w-[6px] rounded-full"></p>
                এডমিন প্যানেল থেকে সকল ফিচার নিয়ন্ত্রণ
              </div>
              <div className="flex items-center text-gray-600 gap-[10px] mb-[10px]">
                <p className="bg-gray-600 h-[6px] w-[6px] rounded-full"></p>
                নোটিশ ও ইভেন্ট আপডেট
              </div>
              <div className="flex items-center text-gray-600 gap-[10px] mb-[10px]">
                <p className="bg-gray-600 h-[6px] w-[6px] rounded-full"></p>
                কৃতি শিক্ষার্থী ও শিক্ষক প্রোাইল
              </div>
              <div className="flex items-center text-gray-600 gap-[10px] mb-[10px]">
                <p className="bg-gray-600 h-[6px] w-[6px] rounded-full"></p>
                ফিচার্ড কোর্স ম্যানেজমেন্ট
              </div>
              <div className="flex items-center text-gray-600 gap-[10px]">
                <p className="bg-gray-600 h-[6px] w-[6px] rounded-full"></p>
                ওয়েবসাইট কনটেন্ট আপডেট
              </div>
            </div>
          </Reveal>

          <Reveal>
            {" "}
            <div className="bg-white shadow-md p-[20px] relative z-10 rounded-[15px]">
              <div className="flex gap-[20px] mb-[20px]">
                <div className="bg-[#07a69826] text-[#07A698] h-[40px] w-[40px] rounded-full flex items-center justify-center">
                  <FaSms className="text-[25px]" />
                </div>
                <div>
                  <h2 className="text-[20px] font-bold">SMS সার্ভিস</h2>
                  <p className="text-gray-600">
                    সম্পূর্ণ SMS ব্যবস্থাপনা সিস্টেম
                  </p>
                </div>
              </div>
              <div className="flex items-center text-gray-600 gap-[10px] mb-[10px]">
                <p className="bg-gray-600 h-[6px] w-[6px] rounded-full"></p>
                পরীক্ষার ফলাফল SMS এর মাধ্যমে প্রেরণ
              </div>
              <div className="flex items-center text-gray-600 gap-[10px] mb-[10px]">
                <p className="bg-gray-600 h-[6px] w-[6px] rounded-full"></p>
                নোটিশ SMS এর মাধ্যমে প্রেরণ
              </div>
              <div className="flex items-center text-gray-600 gap-[10px] mb-[10px]">
                <p className="bg-gray-600 h-[6px] w-[6px] rounded-full"></p>
                মার্কেটিং SMS প্রেরণ
              </div>
              <div className="flex items-center text-gray-600 gap-[10px] mb-[10px]">
                <p className="bg-gray-600 h-[6px] w-[6px] rounded-full"></p>
                উপস্থিতি SMS নোটিফিকেশন
              </div>
              <div className="flex items-center text-gray-600 gap-[10px]">
                <p className="bg-gray-600 h-[6px] w-[6px] rounded-full"></p>
                SMS হিস্টরি ট্র্যাকিং
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-white shadow-md p-[20px] relative z-10 rounded-[15px]">
              <div className="flex gap-[20px] mb-[20px]">
                <div className="bg-[#07a69826] text-[#07A698] h-[40px] w-[40px] rounded-full flex items-center justify-center">
                  <FaBookOpen className="text-[25px]" />
                </div>
                <div>
                  <h2 className="text-[20px] font-bold">কোর্স ব্যবস্থাপনা</h2>
                  <p className="text-gray-600">
                    সম্পূর্ণ কোর্স ম্যানেজমেন্ট সিস্টেম
                  </p>
                </div>
              </div>
              <div className="flex items-center text-gray-600 gap-[10px] mb-[10px]">
                <p className="bg-gray-600 h-[6px] w-[6px] rounded-full"></p>
                অনলাইন ও অফলাইন কোর্স পরিচালনা
              </div>
              <div className="flex items-center text-gray-600 gap-[10px] mb-[10px]">
                <p className="bg-gray-600 h-[6px] w-[6px] rounded-full"></p>
                কোর্স সংক্রান্ত পরীক্ষা ব্যবস্থাপনা
              </div>
              <div className="flex items-center text-gray-600 gap-[10px] mb-[10px]">
                <p className="bg-gray-600 h-[6px] w-[6px] rounded-full"></p>
                ফেসবুক মার্কেটিং মেটা পিক্সেল সেটআপ
              </div>
              <div className="flex items-center text-gray-600 gap-[10px] mb-[10px]">
                <p className="bg-gray-600 h-[6px] w-[6px] rounded-full"></p>
                কোর্স প্রোগ্রেস ট্র্যাকিং
              </div>
              <div className="flex items-center text-gray-600 gap-[10px]">
                <p className="bg-gray-600 h-[6px] w-[6px] rounded-full"></p>
                কোর্স মেটেরিয়াল ব্যবস্থাপনা
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default About;
