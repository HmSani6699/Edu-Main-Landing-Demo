import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaHome,
  FaInfoCircle,
  FaLinkedinIn,
  FaPhoneAlt,
  FaUserFriends,
  FaYoutube,
} from "react-icons/fa";
import { MdContactMail, MdEmail, MdWhatsapp } from "react-icons/md";
import { IoMdSchool } from "react-icons/io";
import logo from "../../../public/school.png";
import NavLink from "../../Component/NavLink/NavLink";
import { RiCloseLargeLine, RiMenu3Fill } from "react-icons/ri";
import { IoLogoTwitter } from "react-icons/io";
import MobileNavlink from "../../Component/NavLink/MobileNavlink";
import { useState } from "react";
import DemoPage from "../../assets/DemoPage/DemoPage";
import { AiFillInstagram } from "react-icons/ai";
import user from "../../../public/Teacher/teacher1.png";
import { TbLogin2 } from "react-icons/tb";

const Navber = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [isOpenLagreMenu, setIsOpenLargeMenu] = useState(false);

  return (
    <div className="relative">
      {/* ======> Sopurt navber <====== */}
      <div className="hidden lg:block bg-[#043334] text-white py-[10px] font-semibold border-b border-gray-500">
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
              onClick={() => setIsOpenLargeMenu(!isOpenLagreMenu)}
              className="flex items-center justify-center cursor-pointer"
            >
              <div className="w-[40px] h-[40px] bg-white rounded-full border-[#07A698] border-2 overflow-hidden">
                <img className="w-[40px]" src={user} alt="" />
              </div>
            </div>
            {isOpenLagreMenu && (
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
        </div>
        <h2 className="lg:text-[35px] text-[20px] whitespace-nowrap font-bold text-[#1d5276] ">
          পাকুন্ডা সরকারি প্রাথমিক বি:
        </h2>
        <div className="flex items-center gap-[20px]">
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
          className={`absolute top-[60px] left-0 bg-white w-full z-[100] p-[20px]
                  transition-all duration-500 ease-in-out 
                  border-t border`}
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
              url={"/contact"}
              title={"যোগাযোগ"}
              icon={<MdContactMail />}
              setIsOpenMenu={setIsOpenMenu}
            />
            {/* <MobileNavlink url={"/blog"} title={"ব্লগ"} icon={<FaBlog />} /> */}
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
