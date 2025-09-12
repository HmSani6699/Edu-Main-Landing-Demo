import "./Footer.css";
import logo from "../../../public/logo2.png";

import { FaFacebookF } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import Reveal from "../../Component/Reveal/Reveal";
import { Link } from "react-router-dom";
import DemoPage from "../../assets/DemoPage/DemoPage";
import { useState } from "react";

const Footer = () => {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  return (
    <div>
      <Reveal>
        <div className="footer_container text-white w-full  relative p-[15px] bg-[#1e567b] ">
          <div className="footer_box h-full w-full  top-0 left-0 opacity-[0.30] absolute"></div>
          <div className="lg:flex items-center justify-between lg:px-[50px] lg:py-[30px]">
            <div className=" w-full mt-[40px] lg:mt-0 ">
              <div className="flex justify-center items-center lg:block   gap-[20px]">
                <div className="relative z-20  w-[200px] ">
                  <img className="w-[200px]" src={logo} alt="" />
                </div>
              </div>
              <p className="text-white text-[18px] mt-[30px]  lg:pr-[60px] text-center lg:text-left">
                Edusadiq মাদ্রাসা ম্যানেজমেন্ট সফটওয়্যার। ছাত্র, শিক্ষক, হিসাব
                ও ফলাফল ব্যবস্থাপনা সবকিছু এখন এক প্ল্যাটফর্মে সহজ ও
                সাশ্রয়ীভাবে।
              </p>
              {/* ====> Social link <===== */}
              <div className="flex justify-center lg:justify-start gap-[15px] mt-[30px]">
                <div className="group hover:bg-[#07A698] h-[35px] w-[35px] flex items-center justify-center rounded-full bg-slate-200 transition-colors duration-500 cursor-pointer">
                  <FaFacebookF className="text-black text-[20px] group-hover:text-white " />
                </div>
                <div className="group hover:bg-[#07A698] h-[35px] w-[35px] flex items-center justify-center rounded-full bg-slate-200 transition-colors duration-500 cursor-pointer">
                  <IoLogoTwitter className="text-black text-[20px] group-hover:text-white " />
                </div>
                <div className="group hover:bg-[#07A698] h-[35px] w-[35px] flex items-center justify-center rounded-full bg-slate-200 transition-colors duration-500 cursor-pointer">
                  <FaLinkedinIn className="text-black text-[20px] group-hover:text-white " />
                </div>
                <div className="group hover:bg-[#07A698] h-[35px] w-[35px] flex items-center justify-center rounded-full bg-slate-200 transition-colors duration-500 cursor-pointer">
                  <AiFillInstagram className="text-black text-[20px] group-hover:text-white " />
                </div>
              </div>
            </div>

            {/*  */}

            <div className=" w-full whitespace-nowrap mt-[40px] lg:mt-0">
              <h2 className="text-[25px] font-semibold  mb-[20px]">
                দ্রুত তথ্য
              </h2>

              <p className="text-[18px] mb-[10px] ">
                <Link to={"/"}>হোম </Link>
              </p>
              <p className="text-[18px] mb-[10px] ">
                <Link to={"aboutUs"}>আমাদের সম্পর্কে</Link>
              </p>
              <p className="text-[18px] mb-[10px] ">
                <Link to={"contact"}>যোগাযোগ</Link>
              </p>
            </div>
            {/* ======> Contact us <====== */}
            <div className="  whitespace-nowrap mt-[40px] lg:mt-0">
              <h2 className="text-[25px] font-semibold mb-[20px] ">
                যোগাযোগ করুন
              </h2>
              <p className="text-[18px] mb-[10px] ">
                <span>ফোন: </span> 01830-630365
              </p>
              <p className="text-[18px] mb-[10px] ">
                <span>ইমেইল: </span> info.edusadiq@gmail.com
              </p>

              <p className="text-[18px] mb-[10px] ">
                <span>সাপোর্ট : </span> 01830-630365
              </p>
            </div>
          </div>
          {/*  */}
          <div className="border-t-[1px] border-[#ffffff26] py-[20px]">
            <p className="text-center text-[14px]">
              © Edusadiq. All Rights Reserved.
            </p>
          </div>
        </div>
      </Reveal>
      {/* ==== Demo pag e=== */}
      {isDemoOpen ? <DemoPage setIsDemoOpen={setIsDemoOpen} /> : ""}
    </div>
  );
};

export default Footer;
