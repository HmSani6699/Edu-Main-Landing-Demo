import React, { useState } from "react";
import { Link } from "react-router-dom";
// Import your images
import academy from "../../../../public/office.jpeg";
import founder from "../../../../public/Teacher/teacher6-2.png";
import shap_image from "../../../../public/about_shape.png";
import Reveal from "../../../Component/Reveal/Reveal";
import { BiSolidZap } from "react-icons/bi";

// Assuming you already have a Reveal component
// import Reveal from "../components/Reveal";

const About = () => {
  const [openTab, setOpenTab] = useState(1);

  const tabs = [
    { id: 1, title: "আমাদের লক্ষ্য" },
    { id: 2, title: "আমাদের দৃষ্টিভঙ্গি" },
    { id: 3, title: "আমাদের গোল" },
  ];

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 mt-[40px]">
        <img className="w-[400px]" src={shap_image} alt="shape" />
      </div>
      <div className="lg:mt-[150px] mt-[220px] relative p-[10px] lg:flex  gap-[85px] lg:max-w-[900px] lg:mx-auto ">
        <div className="relative lg:h-[350px] ">
          <div className="rounded-[15px]  bg-white  h-[300px] w-[400px]">
            <img
              className="w-full h-full rounded-[15px]  "
              src={academy}
              alt="academy"
            />
          </div>
          <div className=" absolute lg:-bottom-[20px] lg:-right-[50px] lg:block hidden w-[200px] h-[210px] rounded-t-full border-[3px] p-[3px]  bg-white rounded-b-[6px] ">
            <img
              className="w-full h-full rounded-t-full rounded-b-[6px] border-t-2 border-white"
              src={founder}
              alt="academy"
            />
          </div>
          <div className="lg:hidden  flex items-center justify-center">
            <div className=" absolute lg:-bottom-[20px] lg:-right-[50px]  w-[200px] h-[210px] rounded-t-full border-[3px] p-[3px]  bg-white rounded-b-[6px] ">
              <img
                className="w-full h-full rounded-t-full rounded-b-[6px] border-t-2 border-white"
                src={founder}
                alt="academy"
              />
            </div>
          </div>
        </div>

        <div className="lg:mt-0 mt-[140px]">
          <div>
            <Reveal>
              <div className="flex items-center mb-[15px]">
                <button className="bg-white flex p-[5px]  rounded-full gap-[8px] pr-[10px] text-[14px] ">
                  <div className="bg-[#07a69826] p-[4px] rounded-full">
                    <BiSolidZap className="text-[#07A698]" />
                  </div>
                  ক্লাস পাঠ্যক্রম
                </button>
              </div>
            </Reveal>
            <Reveal>
              <h2 className="text-[30px] font-bold text-black">
                ফিচার ক্লাস কারিকুলাম
              </h2>
            </Reveal>
          </div>
          {/* Tab Buttons */}
          <div className="flex items-center gap-[10px] mb-[15px] mt-[10px] flex-wrap">
            {tabs.map((item) => (
              <Reveal key={item.id}>
                <button
                  onClick={() => setOpenTab(item.id)}
                  className={`${
                    openTab === item.id
                      ? "bg-[#07A698] text-white"
                      : "text-black bg-white"
                  } hover:bg-[#07A698] hover:text-white border rounded-full py-[4px] px-[10px] text-[14px]`}
                >
                  {item.title}
                </button>
              </Reveal>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-4">
            {openTab === 1 && (
              <Reveal>
                <p className="text-[13px] mb-[20px]">
                  আমাদের লক্ষ্য হলো উচ্চমানের, সহজলভ্য শিক্ষা প্রদান করা যা
                  জ্ঞান এবং বাস্তব-জগতের প্রয়োগের মধ্যে ব্যবধান পূরণ করে।
                </p>
                <div className="flex flex-col gap-[10px]">
                  <div className="flex items-center gap-[10px]">
                    <button className="text-[#07A698] bg-white shadow-lg h-[30px] w-[30px] rounded-full text-[14px]">
                      01
                    </button>
                    <p className="text-[14px]">
                      মানসম্মত ক্লাস পাঠ্যক্রম এবং বিশেষজ্ঞ শিক্ষক
                    </p>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <button className="text-[#07A698] bg-white shadow-lg h-[30px] w-[30px] rounded-full text-[14px]">
                      02
                    </button>
                    <p className="text-[14px]">
                      ছাত্রদের অংশগ্রহণ এবং ধরে রাখা
                    </p>
                  </div>
                </div>
              </Reveal>
            )}

            {openTab === 2 && (
              <Reveal>
                <p className="text-[13px] mb-[20px]">
                  আমরা একটি অগ্রণী শিক্ষা প্রতিষ্ঠান হিসেবে নিজেদের গড়ে তুলতে
                  চাই, যেখানে প্রযুক্তিনির্ভর, গবেষণাভিত্তিক এবং জীবনমুখী
                  শিক্ষার সমন্বয়ে ছাত্রছাত্রীরা আগামী দিনের বিশ্বনাগরিক হিসেবে
                  প্রস্তুত হবে।
                </p>
              </Reveal>
            )}

            {openTab === 3 && (
              <div className="flex flex-col gap-[10px]">
                <div className="flex items-center gap-[10px]">
                  <button className="text-[#07A698] bg-white shadow-lg h-[30px] w-[30px] rounded-full text-[14px]">
                    01
                  </button>
                  <p className="text-[14px]">
                    শিক্ষার্থীদের মধ্যে নেতৃত্ব, সৃজনশীলতা এবং সমস্যা সমাধানের
                    দক্ষতা তৈরি করা।
                  </p>
                </div>
                <div className="flex items-center gap-[10px]">
                  <button className="text-[#07A698] bg-white shadow-lg h-[30px] w-[30px] rounded-full text-[14px]">
                    02
                  </button>
                  <p className="text-[14px]">
                    প্রযুক্তি ও আধুনিক শিক্ষাদান পদ্ধতির ব্যবহার নিশ্চিত করা।
                  </p>
                </div>
                <div className="flex items-center gap-[10px]">
                  <button className="text-[#07A698] bg-white shadow-lg h-[30px] w-[30px] rounded-full text-[14px]">
                    03
                  </button>
                  <p className="text-[14px]">
                    নৈতিকতা ও মূল্যবোধ ভিত্তিক শিক্ষা বিস্তারে কাজ করা।
                  </p>
                </div>
                <div className="flex items-center gap-[10px]">
                  <button className="text-[#07A698] bg-white shadow-lg h-[30px] w-[30px] rounded-full text-[14px]">
                    04
                  </button>
                  <p className="text-[14px]">
                    জাতীয় ও আন্তর্জাতিক পর্যায়ে শিক্ষার মান উন্নয়ন ও স্বীকৃতি
                    অর্জন।
                  </p>
                </div>
              </div>
            )}

            {/* See More Button */}
            <Link to="/aboutUs">
              <button className="bg-[#07A698] text-white rounded-full py-[4px] px-[10px] text-[14px] mt-[25px]">
                আরও দেখুন
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
