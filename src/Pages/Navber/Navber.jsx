import React, { useState } from "react";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { MdAccessAlarms, MdHeadsetMic, MdWhatsapp } from "react-icons/md";
import logo from "../../../public/school.png";
import NavLink from "../../Component/NavLink/NavLink";
import { TbLogin2 } from "react-icons/tb";
import { RiCloseLargeLine, RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navber = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

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
      {/* ======> Main navber <====== */}
      <div className="bg-white ">
        <div className="hidden max-w-[1200px] mx-auto py-[10px] lg:flex items-center justify-between">
          <div className="flex items-center justify-center">
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
          <Link to={"/login"}>
            <button className="flex items-center gap-[6px] text-white bg-[#07A698] py-[4px] px-[15px] rounded-[6px]">
              Log In <TbLogin2 />
            </button>
          </Link>
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
          className={`absolute top-[50px] left-0 bg-white w-full z-40 p-[20px] 
                  transition-all duration-500 ease-in-out 
                 `}
        >
          <div className="flex flex-col gap-[10px]">
            <NavLink url={"/"} title={"হোম"} />
            <NavLink url={"/aboutUs"} title={"আমাদের সম্পর্কে"} />
            <NavLink url={"/admission"} title={"ভর্তি"} />
            <NavLink url={"/contact"} title={"যোগাযোগ"} />
            {/* <NavLink title={"ব্লগ"} /> */}
          </div>
          <Link to={"/login"}>
            <button className="flex items-center gap-[6px] text-white bg-[#07A698] py-[4px] px-[15px] rounded-[6px] mt-[20px]">
              Log In <TbLogin2 />
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navber;
