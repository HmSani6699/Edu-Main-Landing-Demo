import React, { useState } from "react";
import "./Login.css";
import logo from "../../../public/school.png";
import InputField from "../../Component/InputField/InputField";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [isTypeText, setIsTypeText] = useState(false);

  return (
    <div className="flex items-center justify-center lg:h-screen w-full ">
      <div className="lg:flex items-center  lg:w-[700px] w-full h-full  lg:h-[500px] lg:bg-white lg:border-[#07A698] lg:border-2 lg:rounded-[20px] p-[20px] lg:p-0 my-[40px] lg:my-0">
        {/* ======> Left Content <==== */}
        <div className="login_page w-1/2 h-full rounded-r-[90px] rounded-l-[18px]  p-[20px] hidden lg:block">
          <div>
            <h2 className="lg:text-[35px] text-[25px] whitespace-nowrap font-bold text-white  mt-[60px]">
              স্বাগতম!
            </h2>

            <div className="relative mt-[30px] ">
              <FaQuoteLeft className="text-[#07A698]" />
              <p className="text-white ">
                জ্ঞান অর্জনের প্রতিটি ধাপ আপনাকে সাফল্যের আরও কাছে নিয়ে যায়।
                শেখার দরজা সবসময় খোলা, আর আপনি তারই এক গুরুত্বপূর্ণ অংশ! আজ
                নতুন কিছু জানুন, নতুন কিছু শিখুন, কারণ আপনার ভবিষ্যৎ আপনার
                হাতেই! শিক্ষা আপনার শক্তি এগিয়ে চলুন!
              </p>
              <FaQuoteRight className="text-[#07A698] absolute bottom-0 right-[75px]" />
            </div>
          </div>
        </div>

        {/* ======> Right Content <==== */}
        <div className="lg:w-1/2 w-full h-full  p-[20px] lg:pt-[20px]  py-[40px] bg-white lg:bg-inherit  border-[#07A698] border-t-[3px]  lg:border-none rounded-[20px] lg:rounded-[20px]">
          <div className="flex items-center justify-center p-[20px]">
            <div className="w-[70px] bg-white rounded-full border-[#07A698] border-2">
              <img src={logo} alt="" />
            </div>
          </div>
          <h2 className="lg:text-[35px] text-[25px] whitespace-nowrap font-bold text-[#07A698] text-center mb-[20px]">
            Log in
          </h2>
          <div className="flex flex-col gap-[20px]">
            <InputField
              type="text"
              title="ফোন নম্বর"
              placeholder="আপনার ফোন নম্বর লিখুন"
            />
            <div className="relative ">
              <InputField
                type={isTypeText ? "text" : "password"}
                title="পাসওয়ার্ড"
                placeholder="আপনার পাসওয়ার্ড নম্বর লিখুন"
              />
              <div className=" absolute top-[42px] right-[15px] z-10">
                {isTypeText ? (
                  <button onClick={() => setIsTypeText(false)}>
                    <IoMdEye className="text-gray-500 text-[23px]" />
                  </button>
                ) : (
                  <button onClick={() => setIsTypeText(true)}>
                    <IoMdEyeOff className="text-gray-500 text-[23px]" />
                  </button>
                )}
              </div>

              <Link to={"/forgotPassword"}>
                <p className="text-end text-[14px] text-[#07A698] mt-[5px]">
                  পাসওয়ার্ড রিসেট করুন
                </p>
              </Link>
            </div>
            <div className="w-full">
              <Link to={"/"}>
                <button className="w-full text-white bg-[#07A698] py-[6px] px-[15px] rounded-[6px] mt-[20px]">
                  Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
