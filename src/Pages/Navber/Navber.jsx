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
  FaYoutube,
} from "react-icons/fa";
import { MdEmail, MdWhatsapp } from "react-icons/md";
import logo from "../../../public/logo1.png";
import NavLink from "../../Component/NavLink/NavLink";
import { RiCloseLargeLine, RiMenu3Fill } from "react-icons/ri";
import { IoLogoTwitter } from "react-icons/io";
import MobileNavlink from "../../Component/NavLink/MobileNavlink";
import { AiFillInstagram } from "react-icons/ai";
import { useState } from "react";
import DemoPage from "../../assets/DemoPage/DemoPage";

const Navber = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <div className="relative">
      {/* ======> Sopurt navber <====== */}
      <div className=" bg-[#043334] text-white py-[10px] font-semibold border-b border-gray-500 px-[3px]">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <div className="flex items-center lg:gap-[30px] gap-[10px]">
            <Link to={"https://whatsapp.com.me/"}>
              <p className="flex items-center gap-[5px] text-[14px] lg:text-[16px]">
                <MdWhatsapp />
                +8801830-630365
              </p>
            </Link>
            <p className="flex items-center gap-[5px] text-[14px] lg:text-[16px]">
              <MdEmail />
              info.edusadiq@gmail.com
            </p>
          </div>
          <div className=" justify-center lg:justify-start gap-[15px] hidden lg:flex">
            <a href="https://www.facebook.com/official.edusadiq">
              <div className="group hover:bg-[#07A698] h-[35px] w-[35px] flex items-center justify-center rounded-full bg-slate-200 transition-colors duration-500 cursor-pointer">
                <FaFacebookF className="text-black text-[20px] group-hover:text-white " />
              </div>
            </a>
            <a href="https://www.youtube.com/@Edusadiq1">
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
            <NavLink url={"/aboutUs"} title={"আমাদের সম্পর্কে"} />
            {/* <NavLink url={"/"} title={"সার্ভিস"} />
            <NavLink url={"/"} title={"প্রোডাক্ট"} /> */}
            <NavLink url={"/contact"} title={"যোগাযোগ"} />
            {/* <NavLink url={"/"} title={"ব্লগ"} /> */}
          </div>

          <Link to={"/"}>
            <button
              onClick={() => setIsDemoOpen(true)}
              className="py-[8px] px-[30px] rounded-[8px] bg-[#07A698] text-white font-bold btn btn-pulse"
            >
              ডেমো এক্সেস নিন
            </button>
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
        <div className="flex items-center gap-[20px]">
          <Link to={"/"}>
            <button
              onClick={() => setIsDemoOpen(true)}
              className="py-[6px] px-[20px] rounded-[8px] bg-[#07A698] text-white text-[14px] font-bold btn btn-pulse"
            >
              ডেমো এক্সেস নিন
            </button>
          </Link>
          <button onClick={() => setIsOpenMenu(!isOpenMenu)}>
            {isOpenMenu ? (
              <RiCloseLargeLine className="font-bold text-[25px]" />
            ) : (
              <RiMenu3Fill className="font-bold text-[25px]" />
            )}
          </button>
        </div>
      </div>

      {/* ========> Click three doete menu <======= */}

      {isOpenMenu && (
        <div
          className={`absolute top-[107px] left-0 bg-white w-full z-[100] p-[20px]  
                  transition-all duration-500 ease-in-out 
                  border-t border`}
        >
          <div className="flex flex-col gap-[20px] mb-[20px]">
            <MobileNavlink
              setIsOpenMenu={setIsOpenMenu}
              url={"/"}
              title={"হোম"}
              icon={<FaHome />}
            />
            <MobileNavlink
              setIsOpenMenu={setIsOpenMenu}
              url={"/aboutUs"}
              title={"আমাদের সম্পর্কে"}
              icon={<FaInfoCircle />}
            />
            {/* <MobileNavlink
              url={"/services"}
              title={"সার্ভিস"}
              icon={<FaServicestack />}
            />
            <MobileNavlink
              url={"/products"}
              title={"প্রোডাক্ট"}
              icon={<FaBox />}
            /> */}
            <MobileNavlink
              setIsOpenMenu={setIsOpenMenu}
              url={"/contact"}
              title={"যোগাযোগ"}
              icon={<FaPhoneAlt />}
            />
            {/* <MobileNavlink url={"/blog"} title={"ব্লগ"} icon={<FaBlog />} /> */}
          </div>

          <button
            onClick={() => setIsDemoOpen(true)}
            className="py-[8px] px-[30px] rounded-[8px] bg-[#07A698] text-white font-bold btn btn-pulse"
          >
            ডেমো এক্সেস নিন
          </button>
        </div>
      )}

      {/* ==== Demo pag e=== */}
      {isDemoOpen ? <DemoPage setIsDemoOpen={setIsDemoOpen} /> : ""}
    </div>
  );
};

export default Navber;
