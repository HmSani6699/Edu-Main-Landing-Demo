import React, { useState } from "react";
import academy from "../../../../public/teacher.jpg";
import { BiSolidZap } from "react-icons/bi";
import about_shap from "../../../../public/about_shape.png";
import about from "../../../../public/about1.jpg";
import Reveal from "../../../Component/Reveal/Reveal";
import { Link } from "react-router-dom";
import founder from "../../../../public/Teacher/teacher6-2.png";

const About = () => {
  const [openTabe, setOpenTabe] = useState(1);
  return (
    <div className="lg:mt-[150px] mt-[220px] relative p-[10px]">
      <div className="absolute top-[30px] left-0">
        <img className="w-[400px]" src={about_shap} alt="" />
      </div>
      <div className="max-w-[900px] mx-auto lg:flex ">
        {/* =======> Left Content <====== */}
        <div className="lg:w-1/2">
          <img
            className="lg:w-[350px] h-[350px] rounded-[20px]"
            src={about}
            alt="academy"
          />
          <div className="flex lg:items-end items-center lg:justify-end justify-center lg:-mt-[180px] mt-[-140px]">
            <div className="w-[230px] h-[240px] rounded-t-full border-[3px] p-[3px]  bg-white rounded-b-[6px] ">
              <img
                className="w-full h-full rounded-t-full rounded-b-[6px] border-t-2 border-white"
                src={founder}
                alt="academy"
              />
            </div>
          </div>
        </div>
        {/* =======> Right Content <====== */}
        <div className="lg:w-1/2 lg:pl-[50px] mt-[30px] lg:mt-0">
          <Reveal>
            {" "}
            <button className="bg-white flex p-[5px]  rounded-full gap-[8px] pr-[10px] text-[14px]">
              <div className="bg-[#07a69826] p-[4px] rounded-full">
                <BiSolidZap className="text-[#07A698]" />
              </div>
              একাডেমি সম্পর্কে
            </button>
          </Reveal>
          <Reveal>
            <h2 className="text-[25px] font-bold my-[15px]">
              উদ্ভাবনী শিক্ষণ সমাধানের মাধ্যমে ভবিষ্যৎ গঠন
            </h2>
          </Reveal>

          <div className="flex items-center gap-[10px] mb-[15px]">
            {[
              { id: 1, title: " আমাদের লক্ষ্য" },
              { id: 2, title: "  আমাদের দৃষ্টিভঙ্গি" },
              { id: 3, title: "   আমাদের গোল" },
            ]?.map((item, i) => (
              <Reveal>
                <button
                  key={i}
                  onClick={() => setOpenTabe(item?.id)}
                  className={`${
                    openTabe === item?.id
                      ? "bg-[#07A698] text-white"
                      : "text-black bg-white"
                  } hover:bg-[#07A698] hover:text-white border  rounded-full py-[4px] px-[10px] text-[14px]`}
                >
                  {item?.title}
                </button>
              </Reveal>
            ))}
          </div>

          <div>
            <Reveal>
              {openTabe === 1 ? (
                <p className="text-[13px] mb-[20px]">
                  আমাদের লক্ষ্য হলো উচ্চমানের, সহজলভ্য শিক্ষা প্রদান করা যা
                  জ্ঞান এবং বাস্তব-জগতের প্রয়োগের মধ্যে ব্যবধান পূরণ করে।
                  বিশেষজ্ঞ-নেতৃত্বাধীন কোর্স, উন্নত প্রযুক্তি এবং একটি সহায়ক
                  সম্প্রদায়ের মাধ্যমে, আমরা শিক্ষার্থীদের তাদের ক্যারিয়ার এবং
                  তার পরেও সাফল্যের জন্য ক্ষমতায়িত করি।
                </p>
              ) : openTabe === 2 ? (
                <p className="text-[13px] mb-[20px]">
                  আমরা একটি অগ্রণী শিক্ষা প্রতিষ্ঠান হিসেবে নিজেদের গড়ে তুলতে
                  চাই, যেখানে প্রযুক্তিনির্ভর, গবেষণাভিত্তিক এবং জীবনমুখী
                  শিক্ষার সমন্বয়ে ছাত্রছাত্রীরা আগামী দিনের বিশ্বনাগরিক হিসেবে
                  প্রস্তুত হবে। আমাদের দৃষ্টিভঙ্গি হলো একটি আলোকিত ও শিক্ষিত
                  প্রজন্ম গড়ে তোলা।
                </p>
              ) : openTabe === 3 ? (
                <div className="flex flex-col gap-[10px]">
                  <div className="flex items-center gap-[10px]">
                    <button className="text-[#07A698] bg-white shadow-lg  h-[30px] w-[30px] rounded-full text-[14px] ">
                      01
                    </button>
                    <p className="text-[14px]">
                      শিক্ষার্থীদের মধ্যে নেতৃত্ব, সৃজনশীলতা এবং সমস্যা সমাধানের
                      দক্ষতা তৈরি করা।
                    </p>
                  </div>

                  <div className="flex items-center gap-[10px]">
                    <button className="text-[#07A698] bg-white shadow-lg  h-[30px] w-[30px] rounded-full text-[14px] ">
                      02
                    </button>
                    <p className="text-[14px]">
                      প্রযুক্তি ও আধুনিক শিক্ষাদান পদ্ধতির ব্যবহার নিশ্চিত করা।
                    </p>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <button className="text-[#07A698] bg-white shadow-lg  h-[30px] w-[30px] rounded-full text-[14px] ">
                      03
                    </button>
                    <p className="text-[14px]">
                      নৈতিকতা ও মূল্যবোধ ভিত্তিক শিক্ষা বিস্তারে কাজ করা।
                    </p>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <button className="text-[#07A698] bg-white shadow-lg  h-[30px] w-[30px] rounded-full text-[14px] ">
                      04
                    </button>
                    <p className="text-[14px]">
                      জাতীয় ও আন্তর্জাতিক পর্যায়ে শিক্ষার মান উন্নয়ন ও স্বীকৃতি
                      অর্জন।
                    </p>
                  </div>
                </div>
              ) : null}
            </Reveal>
            {openTabe !== 3 && (
              <div className="flex flex-col gap-[10px]">
                <div className="flex items-center gap-[10px]">
                  <button className="text-[#07A698] bg-white shadow-lg  h-[30px] w-[30px] rounded-full text-[14px] ">
                    01
                  </button>
                  <p className="text-[14px]">
                    মানসম্মত ক্লাস পাঠ্যক্রম এবং বিশেষজ্ঞ শিক্ষক
                  </p>
                </div>
                <div className="flex items-center gap-[10px]">
                  <button className="text-[#07A698] bg-white shadow-lg  h-[30px] w-[30px] rounded-full text-[14px]">
                    02
                  </button>
                  <p className="text-[14px]">ছাত্রদের অংশগ্রহণ এবং ধরে রাখা</p>
                </div>
              </div>
            )}
            <Link to="/aboutUs">
              <button className="bg-[#07A698]  text-white rounded-full py-[4px] px-[10px] text-[14px] mt-[25px]">
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
