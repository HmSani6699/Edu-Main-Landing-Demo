import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import AboutBanner from "./AboutBanner/AboutBanner";
import teacher from "../../../public/Teacher/teacher6.png";
import target_icon from "../../../public/target_icon.svg";
import target_bottom from "../../../public/target_bottom.png";
import about from "../../../public/about1.jpg";
import Reveal from "../../Component/Reveal/Reveal";

import teacher1 from "../../../public/Teacher/teacher1.png";
import teacher2 from "../../../public/Teacher/teacher2.png";
import teacher3 from "../../../public/Teacher/teacher3.png";
import teacher4 from "../../../public/Teacher/teacher4.png";
import teacher5 from "../../../public/Teacher/teacher5.png";
import teacher6 from "../../../public/Teacher/teacher6.png";

import office from "../../../public/office1.jpg";
import image1 from "../../../public/gallery/img1.jpg";
import image2 from "../../../public/gallery/img2.jpeg";
import image3 from "../../../public/gallery/img3.jpeg";
import image4 from "../../../public/gallery/img4.jpeg";
import image5 from "../../../public/gallery/img5.jpeg";
import image6 from "../../../public/gallery/img6.jpeg";
import image7 from "../../../public/gallery/img7.jpeg";
import image8 from "../../../public/gallery/img8.jpg";

const AboutUs = () => {
  const [openTabe, setOpenTabe] = useState(1);

  const allTeachers = [
    {
      id: 5,
      name: "Noman Hossain",
      position: "English Teacher",
      img: teacher5,
    },
    {
      id: 6,
      name: "Nasir Uddin",
      position: "Bangla Teacher",
      img: teacher6,
    },
    {
      id: 5,
      name: "Noman Hossain",
      position: "English Teacher",
      img: teacher5,
    },
    {
      id: 6,
      name: "Nasir Uddin",
      position: "Bangla Teacher",
      img: teacher6,
    },
    {
      id: 6,
      name: "Nasir Uddin",
      position: "Bangla Teacher",
      img: teacher6,
    },
    {
      id: 1,
      name: "Sadiqur Rahman",
      position: "Founder & Principal",
      img: teacher1,
    },
    {
      id: 2,
      name: "Mahfuj Alom",
      position: "Hadis Teacher",
      img: teacher2,
    },
    {
      id: 3,
      name: "Jubayer Hossain",
      position: "Bangla Teacher",
      img: teacher3,
    },
    {
      id: 4,
      name: "Mominul Islam",
      position: "Arabic Teacher",
      img: teacher4,
    },
    {
      id: 4,
      name: "Mominul Islam",
      position: "Arabic Teacher",
      img: teacher4,
    },
  ];

  const myGols = [
    { id: 1, title: "উদ্দেশ্য" },
    { id: 2, title: "লক্ষ্য" },
    { id: 3, title: "হিস্টোরি" },
    { id: 4, title: "ভ্যালু" },
  ];

  return (
    <div>
      {/* =====> Menu Derication <==== */}
      {/* <div className="flex items-center gap-[10px] py-[40px] max-w-[1200px] mx-auto">
        <IoHomeOutline className="text-[#1d5276]" />
        <p className="text-[#1d5276]">হোম</p>
        <IoIosArrowForward className="text-[#1d5276]" />
        <p className="text-gray-500">আমাদের সম্পর্কে</p>
      </div> */}

      {/* ======> About Banner <===== */}
      <AboutBanner />

      {/* ====> Funder <===== */}
      <div className=" w-full md:w-[754px] lg:w-[813px] mx-auto   mt-[50px]  px-[10px]">
        <Reveal>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10 border-2  border-[#53DFC3] bg-[#F5F5F5] rounded-[12px]">
            <div className="w-full ">
              <Reveal>
                <img className="h-[340px] w-full" src={teacher} alt="" />
              </Reveal>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <Reveal>
                  <h1 className=" text_black text-[14px] font-[400] leading-[18px] ">
                    অত্র একাডেমির প্রিন্সিপাল একজন মেধাবী, অভিজ্ঞ ও শিক্ষানুরাগী
                    ব্যক্তিত্ব, যিনি শিক্ষার্থীদের নৈতিকতা ও আধুনিক শিক্ষার
                    সমন্বয়ে গড়ে তুলতে দৃঢ় প্রতিশ্রুতিবদ্ধ। তাঁর দক্ষ নেতৃত্বে
                    প্রতিষ্ঠানটি শিক্ষাক্ষেত্রে একটি গ্রহণযোগ্য অবস্থান তৈরি
                    করেছে।
                  </h1>
                </Reveal>
              </div>
              <div>
                <Reveal>
                  <h1 className=" text-[#2872A4] text-[20px] font-[600] leading-[28px] ">
                    মাওলানা আবু বকর সিদ্দিক
                  </h1>
                </Reveal>
                <Reveal>
                  <h1 className=" text_black_tow text-[14px] font-[500] leading-[18px] ">
                    অত্র মাদ্রাসার প্রিন্সিপাল
                  </h1>
                </Reveal>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* =====> Instructor <====== */}
      <div className="w-full lg:max-w-[1096px] mx-auto py-10  bg-[#F5F5F5] rounded-[10px] px-5 relative lg:mt-[40px]">
        <div className="mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 ">
          {allTeachers?.map((item, i) => (
            <Reveal>
              <div key={i} className="w-[186px] mx-auto bg-white rounded-[5px]">
                <div className=" h-16 overflow-hidden bg-[#F5F5F5]"></div>
                <div className="mx-auto w-24 h-24 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                  <img
                    className="object-cover object-center h-32"
                    src={item?.img}
                  />
                </div>
                <div className="p-3 mt- text-center">
                  <h1 className=" text-black text-[20px] font-[600] leading-[28px] ">
                    {item?.name}
                  </h1>
                  <h1 className=" text_black_tow text-[14px] font-[500] leading-[18px] ">
                    {item?.position}
                  </h1>
                </div>
              </div>
            </Reveal>
          ))}

          <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 -bottom-7 ">
            <button className=" py-1.5 px-3 bg-white rounded-[50px] flex flex-row items-center text_black_gray text-[14px] font-[500] leading-[21px] justify-center gap-3 drop-shadow-xl">
              সব দেখুন
              {/* <img src={down_arrow_icon} alt="" /> */}
            </button>
          </div>
        </div>
      </div>

      {/*  */}
      <Reveal>
        <div className="bg-[#043334] w-full bg-center mt-[50px] px-[10px]">
          <div className="py-10 md:py-24 ">
            <div className="w-full lg:max-w-[818px] p-2 md:p-4 lg:p-10 bg-[#F1F2F3] rounded-[20px] mx-auto">
              <div className="flex flex-col md:flex-row gap-3 md:gap-5 relative">
                <div className="w-full md:max-w-[178px] flex flex-row md:flex-col gap-2.5 overflow-auto">
                  {myGols?.map((item, i) => (
                    <button
                      key={i}
                      onClick={() => setOpenTabe(item?.id)}
                      className={`w-full py-5 px-8 bg-white rounded-[5px] flex flex-row items-center  text-[20px] font-[500] leading-[18px] gap-2.5  justify-center ${
                        openTabe === item?.id
                          ? "border-s-2 border-[#20AC90] text-[#20AC90] "
                          : " text-black"
                      }`}
                    >
                      <img src={target_icon} alt="" />
                      {item?.title}
                    </button>
                  ))}
                </div>

                {openTabe === 1 ? (
                  <div className="bg-white rounded-[10px]">
                    <div className="w-full p-3 md:p-10 bg-white rounded-[10px]">
                      <h1 className="text_black text-[20px] md:text-[28px] font-[600] leading-[28px] md:leading-[48px]">
                        উদ্দেশ্য
                      </h1>
                      <h1 className="text_black text-[14px] lg:text-[18px] font-[400] lg:font-[500] leading-[18px] lg:leading-[28px] relative z-50">
                        আমাদের লক্ষ্য হলো উচ্চমানের, সহজলভ্য শিক্ষা প্রদান করা
                        যা জ্ঞান এবং বাস্তব-জগতের প্রয়োগের মধ্যে ব্যবধান পূরণ
                        করে। বিশেষজ্ঞ-নেতৃত্বাধীন কোর্স, উন্নত প্রযুক্তি এবং
                        একটি সহায়ক সম্প্রদায়ের মাধ্যমে, আমরা শিক্ষার্থীদের
                        তাদের ক্যারিয়ার এবং তার পরেও সাফল্যের জন্য ক্ষমতায়িত
                        করি।
                      </h1>
                    </div>
                    <div className="hidden md:block absolute right-4 bottom-0">
                      <img src={target_bottom} alt="" />
                    </div>
                  </div>
                ) : openTabe === 2 ? (
                  <div className="bg-white rounded-[10px]">
                    <div className="w-full p-3 md:p-10 bg-white rounded-[10px]">
                      <h1 className="text_black text-[20px] md:text-[28px] font-[600] leading-[28px] md:leading-[48px]">
                        লক্ষ্য
                      </h1>
                      <h1 className="text_black text-[14px] lg:text-[18px] font-[400] lg:font-[500] leading-[18px] lg:leading-[28px] relative z-50">
                        আমরা একটি অগ্রণী শিক্ষা প্রতিষ্ঠান হিসেবে নিজেদের গড়ে
                        তুলতে চাই, যেখানে প্রযুক্তিনির্ভর, গবেষণাভিত্তিক এবং
                        জীবনমুখী শিক্ষার সমন্বয়ে ছাত্রছাত্রীরা আগামী দিনের
                        বিশ্বনাগরিক হিসেবে প্রস্তুত হবে। আমাদের দৃষ্টিভঙ্গি হলো
                        একটি আলোকিত ও শিক্ষিত প্রজন্ম গড়ে তোলা।
                      </h1>
                    </div>
                    <div className="hidden md:block absolute right-4 bottom-0">
                      <img src={target_bottom} alt="" />
                    </div>
                  </div>
                ) : openTabe === 3 ? (
                  <div>
                    <div className="w-full p-3 md:p-10 bg-white rounded-[10px]">
                      <h1 className="text_black text-[20px] md:text-[28px] font-[600] leading-[28px] md:leading-[48px]">
                        হিস্টোরি
                      </h1>
                      <h1 className="text_black text-[14px] lg:text-[18px] font-[400] lg:font-[500] leading-[18px] lg:leading-[28px] relative z-50">
                        আমরা একটি অগ্রণী শিক্ষা প্রতিষ্ঠান হিসেবে নিজেদের গড়ে
                        তুলতে চাই, যেখানে প্রযুক্তিনির্ভর, গবেষণাভিত্তিক এবং
                        জীবনমুখী শিক্ষার সমন্বয়ে ছাত্রছাত্রীরা আগামী দিনের
                        বিশ্বনাগরিক হিসেবে প্রস্তুত হবে। আমাদের দৃষ্টিভঙ্গি হলো
                        একটি আলোকিত ও শিক্ষিত প্রজন্ম গড়ে তোলা।
                      </h1>
                    </div>
                    <div className="hidden md:block absolute right-4 bottom-0">
                      <img src={target_bottom} alt="" />
                    </div>
                  </div>
                ) : openTabe === 4 ? (
                  <div className="bg-white rounded-[10px]">
                    <div className="w-full p-3 md:p-10 bg-white rounded-[10px]">
                      <h1 className="text_black text-[20px] md:text-[28px] font-[600] leading-[28px] md:leading-[48px]">
                        ভ্যালু
                      </h1>
                      <h1 className="text_black text-[14px] lg:text-[18px] font-[400] lg:font-[500] leading-[18px] lg:leading-[28px]">
                        <div className="flex flex-col gap-[10px]">
                          <div className="flex items-center gap-[10px]">
                            <button className="text-[#07A698] bg-white shadow-lg  h-[30px] w-[30px] rounded-full text-[14px] ">
                              01
                            </button>
                            <p className="text-[14px]">
                              শিক্ষার্থীদের মধ্যে নেতৃত্ব, সৃজনশীলতা এবং সমস্যা
                              সমাধানের দক্ষতা তৈরি করা।
                            </p>
                          </div>

                          <div className="flex items-center gap-[10px]">
                            <button className="text-[#07A698] bg-white shadow-lg  h-[30px] w-[30px] rounded-full text-[14px] ">
                              02
                            </button>
                            <p className="text-[14px]">
                              প্রযুক্তি ও আধুনিক শিক্ষাদান পদ্ধতির ব্যবহার
                              নিশ্চিত করা।
                            </p>
                          </div>
                          <div className="flex items-center gap-[10px]">
                            <button className="text-[#07A698] bg-white shadow-lg  h-[30px] w-[30px] rounded-full text-[14px] ">
                              03
                            </button>
                            <p className="text-[14px] relative z-50">
                              নৈতিকতা ও মূল্যবোধ ভিত্তিক শিক্ষা বিস্তারে কাজ
                              করা।
                            </p>
                          </div>
                          <div className="flex items-center gap-[10px]">
                            <button className="text-[#07A698] bg-white shadow-lg  h-[30px] w-[30px] rounded-full text-[14px] ">
                              04
                            </button>
                            <p className="text-[14px] relative z-50">
                              জাতীয় ও আন্তর্জাতিক পর্যায়ে শিক্ষার মান উন্নয়ন ও
                              স্বীকৃতি অর্জন।
                            </p>
                          </div>
                        </div>
                      </h1>
                    </div>
                    <div className="hidden md:block absolute right-4 bottom-0">
                      <img src={target_bottom} alt="" />
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
      {/*  */}
      <Reveal>
        {" "}
        <div className="bg-white py-20 px-[10px]">
          <div className="flex flex-col items-center gap-6 ">
            <div>
              <h1 className="text-black text-[20px] md:text-[36px] lg:text-[40px] font-[600] lg:font-[700] leading-[28px] md:leading-[48px] text-center">
                অফিস এবং প্রশিক্ষণের স্থান
              </h1>
            </div>
            <div className="lg:w-[600px] h-[350px]">
              <img
                className="w-full h-full rounded-[20px]"
                src={office}
                alt=""
              />
            </div>
            <div className="flex flex-row gap-6  px-[10px]">
              {/* <img className="rounded-[20px]" src={about} alt="" />
              <img className="rounded-[20px]" src={about} alt="" />
              <img className="rounded-[20px]" src={about} alt="" />
              <img className="rounded-[20px]" src={about} alt="" />
              <img className="rounded-[20px]" src={about} alt="" />
              <img className="rounded-[20px]" src={about} alt="" />
              <img className="rounded-[20px]" src={about} alt="" /> */}

              {[
                image8,
                image1,
                image2,
                image7,
                image3,
                image4,
                image5,
                image6,
              ]?.map((img) => (
                <div className="w-[300px] h-[200px]  rounded-[20px] ">
                  <img
                    className="rounded-[20px] h-full w-full"
                    src={img}
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default AboutUs;
