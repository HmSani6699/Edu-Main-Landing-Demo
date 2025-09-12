import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import AboutBanner from "./AboutBanner/AboutBanner";
import author from "../../../public/bgre.jpg";
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
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10 lg:border-2  border-[#53DFC3] bg-[#F5F5F5] rounded-[12px]">
            <div className="w-full ">
              <Reveal>
                <img
                  className="h-[340px] w-full lg:rounded-l-[10px]"
                  src={author}
                  alt=""
                />
              </Reveal>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <Reveal>
                  <h1 className=" text_black text-[14px] font-[400] leading-[18px] ">
                    অত্র প্রতিষ্ঠানের প্রতিষ্ঠাতা একজন মেধাবী, অভিজ্ঞ ও
                    শিক্ষানুরাগী ব্যক্তিত্ব, যিনি শিক্ষার্থীদের নৈতিকতা ও আধুনিক
                    শিক্ষার সমন্বয়ে গড়ে তুলতে দৃঢ় প্রতিশ্রুতিবদ্ধ। তাঁর দক্ষ
                    নেতৃত্বে প্রতিষ্ঠানটি শিক্ষাক্ষেত্রে একটি গ্রহণযোগ্য অবস্থান
                    তৈরি করেছে।
                  </h1>
                </Reveal>
              </div>
              <div>
                <Reveal>
                  <h1 className=" text-[#2872A4] text-[20px] font-[600] leading-[28px] ">
                    হাফেজ সাদিকুর রহমান সানি
                  </h1>
                </Reveal>
                <Reveal>
                  <h1 className=" text_black_tow text-[14px] font-[500] leading-[18px] ">
                    অত্র প্রতিষ্ঠানের প্রতিষ্ঠাতা
                  </h1>
                </Reveal>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* =====> Instructor <====== */}
      <div className="w-full lg:max-w-[1096px] mx-auto py-10  bg-[#F5F5F5] rounded-[10px] px-5 relative lg:mt-[40px] mb-[50px]">
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
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
