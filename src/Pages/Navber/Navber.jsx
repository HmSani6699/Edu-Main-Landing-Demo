import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBlog,
  FaBox,
  FaFacebookF,
  FaHome,
  FaInfoCircle,
  FaLinkedinIn,
  FaPhoneAlt,
  FaServicestack,
  FaUserFriends,
  FaYoutube,
} from "react-icons/fa";
import {
  MdAccessAlarms,
  MdContactMail,
  MdEmail,
  MdHeadsetMic,
  MdWhatsapp,
} from "react-icons/md";
import logo from "../../../public/logo1.png";
import NavLink from "../../Component/NavLink/NavLink";
import { TbLogin2 } from "react-icons/tb";
import { RiCloseLargeLine, RiMenu3Fill } from "react-icons/ri";
import user from "../../../public/Teacher/teacher6-2.png";
import { IoLogoTwitter, IoMdSchool } from "react-icons/io";
import MobileNavlink from "../../Component/NavLink/MobileNavlink";
import { AiFillInstagram } from "react-icons/ai";
import { SiGmail } from "react-icons/si";

const Navber = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenLargeMenu, setIsOpenLargeMenu] = useState(false);

  return (
    <div className="relative">
      {/* ======> Sopurt navber <====== */}
      <div className=" bg-[#043334] text-white py-[10px] font-semibold border-b border-gray-500">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-[30px]">
            <p className="flex items-center gap-[5px]">
              <MdWhatsapp />
              +8801996-359111
            </p>
            <p className="flex items-center gap-[5px]">
              <MdEmail /> info@edusadiq.com
            </p>
          </div>
          <div className=" justify-center lg:justify-start gap-[15px] hidden lg:flex">
            <a href="https://www.facebook.com/official.edusadiq">
              <div className="group hover:bg-[#07A698] h-[35px] w-[35px] flex items-center justify-center rounded-full bg-slate-200 transition-colors duration-500 cursor-pointer">
                <FaFacebookF className="text-black text-[20px] group-hover:text-white " />
              </div>
            </a>
            <a href="https://www.facebook.com/official.edusadiq">
              {" "}
              <div className="group hover:bg-[#07A698] h-[35px] w-[35px] flex items-center justify-center rounded-full bg-slate-200 transition-colors duration-500 cursor-pointer">
                <FaYoutube className="text-black text-[20px] group-hover:text-white " />
              </div>
            </a>

            <a href="https://www.facebook.com/official.edusadiq">
              {" "}
              <div className="group hover:bg-[#07A698] h-[35px] w-[35px] flex items-center justify-center rounded-full bg-slate-200 transition-colors duration-500 cursor-pointer">
                <IoLogoTwitter className="text-black text-[20px] group-hover:text-white " />
              </div>
            </a>

            <a href="https://www.facebook.com/official.edusadiq">
              {" "}
              <div className="group hover:bg-[#07A698] h-[35px] w-[35px] flex items-center justify-center rounded-full bg-slate-200 transition-colors duration-500 cursor-pointer">
                <FaLinkedinIn className="text-black text-[20px] group-hover:text-white " />
              </div>
            </a>

            <a href="https://www.facebook.com/official.edusadiq">
              {" "}
              <div className="group hover:bg-[#07A698] h-[35px] w-[35px] flex items-center justify-center rounded-full bg-slate-200 transition-colors duration-500 cursor-pointer">
                <AiFillInstagram className="text-black text-[20px] group-hover:text-white " />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* ========= */}

      {/* ======> Main navber <====== */}
      <div className="bg-white ">
        <div className="hidden max-w-[1200px] mx-auto py-[10px] lg:flex items-center justify-between">
          <div className="flex items-center justify-center ">
            <div className="w-[203px]">
              <img src={logo} alt="logo" className="w-full h-full" />
            </div>
          </div>
          <div className="flex items-center gap-[30px]">
            <NavLink url={"/"} title={"হোম"} />
            <NavLink url={"/"} title={"আমাদের সম্পর্কে"} />
            <NavLink url={"/"} title={"সার্ভিস"} />
            <NavLink url={"/"} title={"প্রোডাক্ট"} />
            <NavLink url={"/"} title={"যোগাযোগ"} />
            <NavLink url={"/"} title={"ব্লগ"} />
          </div>

          <Link to={"/"}>
            {" "}
            <button className="py-[8px] px-[30px] rounded-[8px] bg-[#07A698] text-white font-bold">
              ডেমো এক্সেস নিন
            </button>{" "}
          </Link>
        </div>
      </div>

      {/* ======> Mobile nav  Main navber <====== */}
      <div className="lg:hidden flex items-center justify-between  bg-white max-w-[1200px] mx-auto py-[15px] px-[10px] ">
        <div className="flex items-center gap-[6px] ">
          <div className="w-[100px] ">
            <img src={logo} alt="" />
          </div>
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
          className={`absolute top-[57px] left-0 bg-white w-full z-[100] p-[20px]  
                  transition-all duration-500 ease-in-out 
                 `}
        >
          <div className="flex flex-col gap-[20px]">
            <MobileNavlink url={"/"} title={"হোম"} icon={<FaHome />} />
            <MobileNavlink
              url={"/aboutUs"}
              title={"আমাদের সম্পর্কে"}
              icon={<FaInfoCircle />}
            />
            <MobileNavlink
              url={"/services"}
              title={"সার্ভিস"}
              icon={<FaServicestack />}
            />
            <MobileNavlink
              url={"/products"}
              title={"প্রোডাক্ট"}
              icon={<FaBox />}
            />
            <MobileNavlink
              url={"/contact"}
              title={"যোগাযোগ"}
              icon={<FaPhoneAlt />}
            />
            <MobileNavlink url={"/blog"} title={"ব্লগ"} icon={<FaBlog />} />
          </div>

          <button
            onClick={() => setIsOpenMenu(false)}
            className="py-[8px] px-[30px] rounded-[8px] bg-[#07A698] text-white font-bold w-full mt-[20px]"
          >
            ডেমো এক্সেস নিন
          </button>
        </div>
      )}
    </div>
  );
};

export default Navber;
