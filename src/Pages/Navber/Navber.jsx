import React, { useState } from "react";
import { FaFacebookF, FaHome, FaUserFriends, FaYoutube } from "react-icons/fa";
import {
  MdAccessAlarms,
  MdContactMail,
  MdHeadsetMic,
  MdWhatsapp,
} from "react-icons/md";
import logo from "../../../public/school.png";
import NavLink from "../../Component/NavLink/NavLink";
import { TbLogin2 } from "react-icons/tb";
import { RiCloseLargeLine, RiMenu3Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import user from "../../../public/Teacher/teacher6-2.png";
import { IoMdSchool } from "react-icons/io";
import MobileNavlink from "../../Component/NavLink/MobileNavlink";

const Navber = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenLargeMenu, setIsOpenLargeMenu] = useState(false);

  return (
    <div className="relative">
      {/* ======> Sopurt navber <====== */}
      <div className="hidden lg:block bg-[#043334] text-white py-[10px] font-semibold border-b border-gray-500">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-[30px]">
            <p className="flex items-center gap-[5px]">
              <MdHeadsetMic /> 01996359111
            </p>
            <p className="flex items-center gap-[5px]">
              <MdWhatsapp /> 01996359111
            </p>
            <p className="flex items-center gap-[5px]">
              <MdAccessAlarms /> (10:00PM - 11:00AM)
            </p>
          </div>
          <div className="flex items-center gap-[10px]">
            <div className="text-blue-700 bg-white rounded-full p-[4px]">
              <FaFacebookF />
            </div>
            <div className="text-red-700 bg-white rounded-full p-[4px]">
              <FaYoutube />
            </div>
          </div>
        </div>
      </div>

      {/* ========= */}

      <div className="lg:flex items-center justify-between  max-w-[1060px] mx-auto hidden">
        {/* ====> Edu English Name <==== */}
        <div className="text-center">
          <h2 className="text-[30px] font-bold">Al-Quranul Kareem Academy</h2>
          <p className="font-semibold">Pakunda, Sonargon, Narayongonj</p>
        </div>
        {/* ====> Edu Logo <==== */}
        <div className="w-[135px]">
          <img src={logo} alt="" />
        </div>
        {/* ====> Edu Bangla
          Name <==== */}
        <div className="text-center">
          <h2 className="text-[30px] font-bold">
            أكاديمية القرآن الكريم الإسلامية التعليمية
          </h2>
          <p className="font-semibold">
            بَكُونْدَا، سُونَارْغَاوْ، نَارَايَنْغَنْج
          </p>
        </div>
      </div>

      {/* ========= */}
      {/* ======> Main navber <====== */}
      <div className="bg-white ">
        <div className="hidden max-w-[1200px] mx-auto py-[10px] lg:flex items-center justify-between">
          <div className="flex items-center justify-center ">
            <div className="w-[40px] bg-white rounded-full border-[#07A698] border-2">
              <img src={logo} alt="" />
            </div>
          </div>
          <div className="flex items-center gap-[30px]">
            <NavLink url={"/"} title={"হোম"} />
            <NavLink url={"/aboutUs"} title={"আমাদের সম্পর্কে"} />
            <NavLink url={"/admission"} title={"ভর্তি"} />
            <NavLink url={"/contact"} title={"যোগাযোগ"} />
            {/* <NavLink title={"ব্লগ"} /> */}
          </div>
          {/* <Link to={"/login"}>
            <button className="flex items-center gap-[6px] text-white bg-[#07A698] py-[4px] px-[15px] rounded-[6px]">
              Log In <TbLogin2 />
            </button>
          </Link> */}
          <div className="relative">
            <div
              onClick={() => setIsOpenLargeMenu(!isOpenLargeMenu)}
              className="flex items-center justify-center cursor-pointer"
            >
              <div className="w-[40px] h-[40px] bg-white rounded-full border-[#07A698] border-2 overflow-hidden">
                <img className="w-[40px]" src={user} alt="" />
              </div>
            </div>
            {isOpenLargeMenu && (
              <div className="absolute top-[50px] right-0 bg-white z-40 border rounded-[8px] shadow-md  p-[20px]">
                <div className="flex items-center justify-center">
                  <div className="w-[50px] h-[50px] bg-white rounded-full border-[#07A698] border-2 overflow-hidden">
                    <img className="w-[50px]" src={user} alt="" />
                  </div>
                </div>
                <h2 className="text-[20px] whitespace-nowrap font-bold text-[#1d5276] text-center ">
                  MD: Sadiqur Rahman
                </h2>
                <div className="border-[#07A698] border my-[5px]"></div>

                <div className="flex flex-col gap-[15px] mt-[20px]">
                  <div className="flex items-center gap-[10px] ">
                    <div className="w-[30px] h-[30px] bg-white rounded-full border-[#07A698] border-2 overflow-hidden">
                      <img className="w-[30px]" src={user} alt="" />
                    </div>
                    <h2 className="text-[16px] whitespace-nowrap  text-[#1d5276] ">
                      MD: Sadiq
                    </h2>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <div className="w-[30px] h-[30px] bg-white rounded-full border-[#07A698] border-2 overflow-hidden">
                      <img className="w-[30px]" src={user} alt="" />
                    </div>
                    <h2 className="text-[16px] whitespace-nowrap  text-[#1d5276] ">
                      MD: Sadiq
                    </h2>
                  </div>

                  <Link to={"/login"}>
                    <button className="flex items-center justify-center gap-[6px] text-white bg-[#07A698] py-[4px] px-[15px] rounded-[6px] w-full">
                      Log In <TbLogin2 />
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ======> Mobile nav  Main navber <====== */}
      <div className="lg:hidden flex items-center justify-between  bg-white max-w-[1200px] mx-auto py-[15px] px-[10px] ">
        <div className="flex items-center gap-[6px] ">
          <div className="w-[40px] bg-white rounded-full border-[#07A698] border-2">
            <img src={logo} alt="" />
          </div>
          <h2 className="lg:text-[35px] text-[20px] whitespace-nowrap font-bold text-[#1d5276] ">
            পাকুন্ডা সরকারি প্রাথমিক বি:
          </h2>
        </div>
        <button onClick={() => setIsOpenMenu(!isOpenMenu)}>
          {isOpenMenu ? (
            <RiCloseLargeLine />
          ) : (
            <RiMenu3Fill className="font-bold text-[20px]" />
          )}
        </button>
      </div>

      {/* ========> Click three doete menu <======= */}

      {isOpenMenu && (
        <div
          className={`absolute top-[60px] left-0 bg-white w-full z-[100] p-[20px]  
                  transition-all duration-500 ease-in-out 
                 `}
        >
          <div className="mb-[15px]">
            <div className="flex items-center justify-center">
              <div className="w-[50px] h-[50px] bg-white rounded-full border-[#07A698] border-2 overflow-hidden">
                <img className="w-[50px]" src={user} alt="" />
              </div>
            </div>
            <h2 className="text-[20px] whitespace-nowrap font-bold text-[#1d5276] text-center ">
              MD: Sadiqur Rahman
            </h2>
            <div className="border-[#07A698] border my-[10px]"></div>

            <div className="flex flex-col gap-[15px] mt-[20px]">
              <MobileNavlink
                url={"/student-dashboard/1"}
                icon={<img className="w-[30px]" src={user} alt="" />}
                title={"Student"}
                setIsOpenMenu={setIsOpenMenu}
              />
              <MobileNavlink
                url={"/teacher-dashboard/1"}
                icon={<img className="w-[30px]" src={user} alt="" />}
                title={"Teacher"}
                setIsOpenMenu={setIsOpenMenu}
              />

              {/* <Link to={"/login"}>
                <button className="flex items-center justify-center gap-[6px] text-white bg-[#07A698] py-[4px] px-[15px] rounded-[6px] w-full">
                  Log In <TbLogin2 />
                </button>
              </Link> */}
            </div>
          </div>

          <div className="flex flex-col gap-[10px]">
            <MobileNavlink
              url={"/"}
              icon={<FaHome />}
              title={"হোম"}
              setIsOpenMenu={setIsOpenMenu}
            />
            <MobileNavlink
              url={"/aboutUs"}
              title={"আমাদের সম্পর্কে"}
              icon={<FaUserFriends />}
              setIsOpenMenu={setIsOpenMenu}
            />
            <MobileNavlink
              url={"/admission"}
              title={"ভর্তি"}
              icon={<IoMdSchool />}
              setIsOpenMenu={setIsOpenMenu}
            />
            <MobileNavlink
              url={"/contact"}
              title={"যোগাযোগ"}
              icon={<MdContactMail />}
              setIsOpenMenu={setIsOpenMenu}
            />

            {/* <NavLink title={"ব্লগ"} /> */}
          </div>
          <Link to={"/login"}>
            <button
              onClick={() => setIsOpenMenu(false)}
              className="flex items-center justify-center gap-[6px] text-white bg-[#07A698] py-[4px] px-[15px] rounded-[6px] mt-[20px] w-full"
            >
              Log In <TbLogin2 />
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navber;
