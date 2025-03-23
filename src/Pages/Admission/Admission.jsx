import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import avatar from "../../../public/teacher1.png";
import comment_arrow from "../../../public/comment.svg";
import comment_down from "../../../public/down_comment.svg";
import CallNow from "../../Component/CallNow/CallNow";
import shap_image from "../../../public/testi-shape-1.png";
import { FaArrowLeft } from "react-icons/fa";
import { BiSolidZap } from "react-icons/bi";
import GalleryCard from "../../Component/GalleryCard/GalleryCard";

const Admission = () => {
  const [reviewUserChange, setReviewUserChange] = useState("1");
  return (
    <div>
      {/* =====> Menu Derication <==== */}
      {/* <div className="flex items-center gap-[10px] py-[40px] max-w-[1200px] mx-auto">
        <IoHomeOutline className="text-[#1d5276]" />
        <p className="text-[#1d5276]">হোম</p>
        <IoIosArrowForward className="text-[#1d5276]" />
        <p className="text-gray-500">আমাদের সম্পর্কে</p>
      </div> */}
      {/* =====> Menu Derication <==== */}
      <div className="contact_us_bg bg-[#F4FBFF]">
        <div>
          <div className="py-14 flex flex-col gap-3 text-center">
            <h1 className="text-[#2E3138] text-[21px] md:text-[24px] lg:text-[28px] font-[600] lg:font-[700] leading-[28px] md:leading-[36px] text-center ">
              ভর্তি
            </h1>
            <p className="text-[#464A53] text-[21px] md:text-[14px] lg:text-[18px] font-[400] lg:font-[500] leading-[25px] md:leading-[28px] w-[343px] md:w-[580px] lg:w-[883px] mx-auto">
              যে কোনো প্রয়োজনে যোগাযোগ করতে সরাসরি আমাদের অফিস ভিজিট করতে
              পারেন। তাছাড়া হটলাইন নম্বরে কল করে জেনে নিতে পারেন ট্রেইনিং
              সংক্রান্ত যেকোনো তথ্য। এছাড়াও উল্লেখিত মেইলে কিংবা ফেসবুক
              ম্যাসেঞ্জারেও নক দিতে পারেন।
            </p>
          </div>
        </div>
      </div>
      {/* =====> Main contect <===== */}
      <div className=" bg-[#07A698] mt-[50px] relative">
        <div className="absolute top-0 right-0">
          <img className="w-[500px]" src={shap_image} alt="shape" />
        </div>
        <div className=" lg:max-w-[1200px] mx-auto overflow-hidden lg:py-[80px] py-[40px] px-[10px]">
          <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-24  overflow-hidden">
            <div className="w-full md:w-1/2 flex flex-col gap-4">
              <div className="relative">
                <div
                  onClick={() => setReviewUserChange("1")}
                  className={`${
                    reviewUserChange === "1"
                      ? "bg-[#D4E9E7] rounded-[8px] h-fit p-4 flex flex-col gap-2 min-w-[250px] cursor-pointer text-primary_color"
                      : "rounded-[8px] h-fit p-4 flex flex-col gap-2 min-w-[250px] cursor-pointer text-white"
                  }`}
                >
                  <div className="flex gap-2 ">
                    <div className="w-[50px] h-[50px]  overflow-hidden bg-white rounded-[6px]">
                      <img
                        className="w-full h-full rounded-[6px] "
                        alt="avatar"
                        src={avatar}
                      />
                    </div>
                    <div>
                      <h4 className="font-inter text-lg leading-[22px] font-[600]">
                        Class One
                      </h4>
                      <div className="flex items-center gap-[10px] mt-[5px]">
                        <p className=" font-inter text-sm leading-[18px] font-[400] text-start">
                          Subject:
                          <span className=" font-bold pl-[3px]">4</span>
                        </p>
                        <p className=" font-inter text-sm leading-[18px] font-[400] text-start">
                          Student:{" "}
                          <span className=" font-bold pl-[3px]">30</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {reviewUserChange === "1" && (
                  <>
                    {" "}
                    <img
                      alt="icon"
                      src={comment_arrow}
                      className="absolute bottom-4 -right-[30px] hidden md:block"
                    />
                    <img
                      alt="icon"
                      src={comment_down}
                      className="absolute -bottom-5 right-1 block md:hidden"
                    />
                  </>
                )}
              </div>

              <div className="relative">
                <div
                  onClick={() => setReviewUserChange("2")}
                  className={`${
                    reviewUserChange === "2"
                      ? "bg-[#D4E9E7] rounded-[8px] h-fit p-4 flex flex-col gap-2 min-w-[250px] cursor-pointer text-primary_color"
                      : "rounded-[8px] h-fit p-4 flex flex-col gap-2 min-w-[250px] cursor-pointer text-white"
                  }`}
                >
                  <div className="flex gap-2">
                    <div className="w-[50px] h-[50px]  overflow-hidden bg-white rounded-[6px]">
                      <img
                        className="w-full h-full rounded-[6px] "
                        alt="avatar"
                        src={avatar}
                      />
                    </div>
                    <div>
                      <h4 className="font-inter text-lg leading-[22px] font-[600]">
                        Class Two
                      </h4>
                      <div className="flex items-center gap-[10px] mt-[5px]">
                        <p className=" font-inter text-sm leading-[18px] font-[400] text-start">
                          Subject:
                          <span className=" font-bold pl-[3px]">4</span>
                        </p>
                        <p className=" font-inter text-sm leading-[18px] font-[400] text-start">
                          Student:{" "}
                          <span className=" font-bold pl-[3px]">30</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {reviewUserChange === "2" && (
                  <>
                    <img
                      alt="icon"
                      src={comment_arrow}
                      className="absolute bottom-4 -right-[30px] hidden md:block"
                    />
                    <img
                      alt="icon"
                      src={comment_down}
                      className="absolute -bottom-5 right-1 block md:hidden"
                    />
                  </>
                )}
              </div>

              <div className="relative">
                <div
                  onClick={() => setReviewUserChange("3")}
                  className={`${
                    reviewUserChange === "3"
                      ? "bg-[#D4E9E7] rounded-[8px] h-fit p-4 flex flex-col gap-2 min-w-[250px] cursor-pointer text-primary_color"
                      : "rounded-[8px] h-fit p-4 flex flex-col gap-2 min-w-[250px] cursor-pointer text-white"
                  }`}
                >
                  <div className="flex gap-2">
                    <div className="w-[50px] h-[50px]  overflow-hidden bg-white rounded-[6px]">
                      <img
                        className="w-full h-full  rounded-[6px]"
                        alt="avatar"
                        src={avatar}
                      />
                    </div>
                    <div>
                      <h4 className="font-inter text-lg leading-[22px] font-[600]">
                        Class Three
                      </h4>
                      <div className="flex items-center gap-[10px] mt-[5px]">
                        <p className=" font-inter text-sm leading-[18px] font-[400] text-start">
                          Subject:
                          <span className=" font-bold pl-[3px]">4</span>
                        </p>
                        <p className=" font-inter text-sm leading-[18px] font-[400] text-start">
                          Student:{" "}
                          <span className=" font-bold pl-[3px]">30</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {reviewUserChange === "3" && (
                  <>
                    <img
                      alt="icon"
                      src={comment_arrow}
                      className="absolute bottom-4 rotate-180 scale-x-[-1] -right-[30px] hidden md:block"
                    />
                    <img
                      alt="icon"
                      src={comment_down}
                      className="absolute -bottom-5 right-1 block md:hidden"
                    />
                  </>
                )}
              </div>
            </div>

            {reviewUserChange === "1" && (
              <div className="bg-[#D4E9E7] rounded-[8px] w-full px-[20px] py-[30px] flex items-center justify-between  h-fit relative z-20">
                <div className="lg:w-1/2 w-full">
                  <h2 className="font-Baloo font-bold text-[#464A53] text-[20px] text-center mb-[10px]">
                    অনাবাসিক
                  </h2>
                  <div className="border border-gray-500 rounded-[12px] mr-[20px]">
                    <div className="flex items-center justify-between bg-[#043334] text-white px-[30px] py-[6px] rounded-t-[10px]">
                      <h2>মেনু</h2>
                      <h2>টাকা</h2>
                    </div>
                    <div className="flex items-center justify-between border-b-2 border-gray-400  px-[30px] py-[6px] rounded-t-[10px]">
                      <h2>ভর্তি ফি</h2>
                      <h2>২০০০</h2>
                    </div>
                    <div className="flex items-center justify-between border-b-2 border-gray-400  px-[30px] py-[6px] rounded-t-[10px]">
                      <h2>বেতন</h2>
                      <h2>১০০০</h2>
                    </div>
                    <div className="flex items-center justify-between border-b-2   px-[30px] py-[6px] rounded-t-[10px]">
                      <h2>প্রাইভেট</h2>
                      <h2>১০০০</h2>
                    </div>
                    <div className=" bg-[#043334] text-white px-[30px] py-[6px] rounded-b-[10px]">
                      <h2 className="text-end">মোট ২০০০</h2>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 w-full border-l-[3px] border-[#07A698]">
                  <h2 className="font-Baloo font-bold text-[#464A53] text-[20px] text-center mb-[10px]">
                    আবাসিক
                  </h2>
                  <div className="border border-gray-500 rounded-[12px] ml-[20px]">
                    <div className="flex items-center justify-between bg-[#043334] text-white px-[30px] py-[6px] rounded-t-[10px]">
                      <h2>মেনু</h2>
                      <h2>টাকা</h2>
                    </div>
                    <div className="flex items-center justify-between border-b-2 border-gray-400  px-[30px] py-[6px] rounded-t-[10px]">
                      <h2>ভর্তি ফি</h2>
                      <h2>২০০০</h2>
                    </div>
                    <div className="flex items-center justify-between border-b-2 border-gray-400  px-[30px] py-[6px] rounded-t-[10px]">
                      <h2>বেতন</h2>
                      <h2>১০০০</h2>
                    </div>
                    <div className="flex items-center justify-between border-b-2   px-[30px] py-[6px] rounded-t-[10px]">
                      <h2>প্রাইভেট</h2>
                      <h2>১০০০</h2>
                    </div>
                    <div className=" bg-[#043334] text-white px-[30px] py-[6px] rounded-b-[10px]">
                      <h2 className="text-end">মোট ২০০০</h2>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {reviewUserChange === "2" && (
              <div className="bg-[#D4E9E7] rounded-[8px] w-full px-[20px] py-[30px] flex items-center justify-between  h-fit relative z-20">
                <div className="lg:w-1/2 w-full">
                  <h2 className="font-Baloo font-bold text-[#464A53] text-[20px] text-center mb-[10px]">
                    অনাবাসিক
                  </h2>
                  <div className="border border-gray-500 rounded-[12px] mr-[20px]">
                    <div className="flex items-center justify-between bg-[#043334] text-white px-[30px] py-[6px] rounded-t-[10px]">
                      <h2>মেনু</h2>
                      <h2>টাকা</h2>
                    </div>
                    <div className="flex items-center justify-between border-b-2 border-gray-400  px-[30px] py-[6px] rounded-t-[10px]">
                      <h2>ভর্তি ফি</h2>
                      <h2>২০০০</h2>
                    </div>
                    <div className="flex items-center justify-between border-b-2 border-gray-400  px-[30px] py-[6px] rounded-t-[10px]">
                      <h2>বেতন</h2>
                      <h2>১০০০</h2>
                    </div>
                    <div className="flex items-center justify-between border-b-2   px-[30px] py-[6px] rounded-t-[10px]">
                      <h2>প্রাইভেট</h2>
                      <h2>১০০০</h2>
                    </div>
                    <div className=" bg-[#043334] text-white px-[30px] py-[6px] rounded-b-[10px]">
                      <h2 className="text-end">মোট ২০০০</h2>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 w-full border-l-[3px] border-[#07A698]">
                  <h2 className="font-Baloo font-bold text-[#464A53] text-[20px] text-center mb-[10px]">
                    আবাসিক
                  </h2>
                  <div className="border border-gray-500 rounded-[12px] ml-[20px]">
                    <div className="flex items-center justify-between bg-[#043334] text-white px-[30px] py-[6px] rounded-t-[10px]">
                      <h2>মেনু</h2>
                      <h2>টাকা</h2>
                    </div>
                    <div className="flex items-center justify-between border-b-2 border-gray-400  px-[30px] py-[6px] rounded-t-[10px]">
                      <h2>ভর্তি ফি</h2>
                      <h2>২০০০</h2>
                    </div>
                    <div className="flex items-center justify-between border-b-2 border-gray-400  px-[30px] py-[6px] rounded-t-[10px]">
                      <h2>বেতন</h2>
                      <h2>১০০০</h2>
                    </div>
                    <div className="flex items-center justify-between border-b-2   px-[30px] py-[6px] rounded-t-[10px]">
                      <h2>প্রাইভেট</h2>
                      <h2>১০০০</h2>
                    </div>
                    <div className=" bg-[#043334] text-white px-[30px] py-[6px] rounded-b-[10px]">
                      <h2 className="text-end">মোট ২০০০</h2>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {reviewUserChange === "3" && (
              <div className="bg-[#D4E9E7] rounded-[8px] w-full px-[20px] py-[30px] flex items-center justify-between  h-fit relative z-20">
                <div className="lg:w-1/2 w-full">
                  <h2 className="font-Baloo font-bold text-[#464A53] text-[20px] text-center mb-[10px]">
                    অনাবাসিক
                  </h2>
                  <div className="border border-gray-500 rounded-[12px] mr-[20px]">
                    <div className="flex items-center justify-between bg-[#043334] text-white px-[30px] py-[6px] rounded-t-[10px]">
                      <h2>মেনু</h2>
                      <h2>টাকা</h2>
                    </div>
                    <div className="flex items-center justify-between border-b-2 border-gray-400  px-[30px] py-[6px] rounded-t-[10px]">
                      <h2>ভর্তি ফি</h2>
                      <h2>২০০০</h2>
                    </div>
                    <div className="flex items-center justify-between border-b-2 border-gray-400  px-[30px] py-[6px] rounded-t-[10px]">
                      <h2>বেতন</h2>
                      <h2>১০০০</h2>
                    </div>
                    <div className="flex items-center justify-between border-b-2   px-[30px] py-[6px] rounded-t-[10px]">
                      <h2>প্রাইভেট</h2>
                      <h2>১০০০</h2>
                    </div>
                    <div className=" bg-[#043334] text-white px-[30px] py-[6px] rounded-b-[10px]">
                      <h2 className="text-end">মোট ২০০০</h2>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 w-full border-l-[3px] border-[#07A698]">
                  <h2 className="font-Baloo font-bold text-[#464A53] text-[20px] text-center mb-[10px]">
                    আবাসিক
                  </h2>
                  <div className="border border-gray-500 rounded-[12px] ml-[20px]">
                    <div className="flex items-center justify-between bg-[#043334] text-white px-[30px] py-[6px] rounded-t-[10px]">
                      <h2>মেনু</h2>
                      <h2>টাকা</h2>
                    </div>
                    <div className="flex items-center justify-between border-b-2 border-gray-400  px-[30px] py-[6px] rounded-t-[10px]">
                      <h2>ভর্তি ফি</h2>
                      <h2>২০০০</h2>
                    </div>
                    <div className="flex items-center justify-between border-b-2 border-gray-400  px-[30px] py-[6px] rounded-t-[10px]">
                      <h2>বেতন</h2>
                      <h2>১০০০</h2>
                    </div>
                    <div className="flex items-center justify-between border-b-2   px-[30px] py-[6px] rounded-t-[10px]">
                      <h2>প্রাইভেট</h2>
                      <h2>১০০০</h2>
                    </div>
                    <div className=" bg-[#043334] text-white px-[30px] py-[6px] rounded-b-[10px]">
                      <h2 className="text-end">মোট ২০০০</h2>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ======> Call now <===== */}
      <CallNow />
      {/* ======>Gallery part<===== */}
      <div className="max-w-[1100px] mx-auto    lg:mt-[50px]  relative py-[40px] p-[10px]">
        <div className="lg:flex items-center justify-between">
          <div>
            <button className="bg-white flex p-[5px]  rounded-full gap-[8px] pr-[10px] text-[14px] ">
              <div className="bg-[#07a69826] p-[4px] rounded-full">
                <BiSolidZap className="text-[#07A698]" />
              </div>
              ভিডিও গ্যালারি
            </button>

            <h2 className="text-[30px] font-bold my-[20px] text-[#1d5276]">
              আমাদের একাডেমির ভিডিও গ্যালারি ঘুরে দেখুন
            </h2>
          </div>
          <div className="lg:flex items-center gap-[20px] relative z-40 hidden ">
            <button className=" cursor-pointer  text-white p-[10px] rounded-full bg-[#07A698]">
              <FaArrowLeft />
            </button>
            <button className=" cursor-pointer  bg-gray-300 p-[10px] rounded-full text-[#07A698] rotate-[180deg]">
              <FaArrowLeft />
            </button>
          </div>
        </div>

        {/* ======>  Gallery <===== */}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-[20px]  mt-[20px]">
          <GalleryCard />
          <GalleryCard />
          <GalleryCard />
          <GalleryCard />
        </div>
      </div>
    </div>
  );
};

export default Admission;
