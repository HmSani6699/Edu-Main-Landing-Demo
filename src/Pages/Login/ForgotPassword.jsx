import React, { useState } from "react";
import { FaQuoteLeft, FaQuoteRight, FaStarOfLife } from "react-icons/fa";
import logo from "../../../public/school.png";
import InputField from "../../Component/InputField/InputField";
import OtpField from "../../Component/OtpField/OtpField";

const ForgotPassword = () => {
  const [currentForm, setCurrentForm] = useState(true);
  return (
    <div className="flex items-center justify-center lg:h-screen w-full ">
      <div className="lg:flex items-center  lg:w-[700px] w-full h-full  lg:h-[500px] lg:border-[#07A698] lg:bg-white lg:border-2 lg:rounded-[20px] p-[20px] lg:p-0 my-[40px] lg:my-0">
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

        {currentForm ? (
          <div className="lg:w-1/2 w-full h-full  p-[20px] lg:pt-[20px]  py-[40px] bg-white   border-[#07A698] border-t-[3px]  lg:border-none rounded-[20px] lg:rounded-[20px]">
            <div className="flex items-center justify-center p-[20px]">
              <div className="w-[70px] bg-white rounded-full border-[#07A698] border-2">
                <img src={logo} alt="" />
              </div>
            </div>
            <h2 className="lg:text-[35px] text-[25px] whitespace-nowrap font-bold text-[#07A698] text-center mb-[20px]">
              Reset Password
            </h2>
            <div className="flex flex-col gap-[20px]">
              <InputField
                type="text"
                title="ফোন নম্বর"
                placeholder="আপনার ফোন নম্বর লিখুন"
              />

              <div className="w-full">
                <button
                  onClick={() => setCurrentForm(false)}
                  className="w-full text-white bg-[#07A698] py-[6px] px-[15px] rounded-[6px] mt-[20px]"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="lg:w-1/2 w-full h-full  p-[20px] lg:pt-[20px]  py-[40px] bg-white   border-[#07A698] border-t-[3px]  lg:border-none rounded-[20px] lg:rounded-[20px]">
            <div className="flex items-center justify-center p-[20px]">
              <div className="w-[70px] bg-white rounded-full border-[#07A698] border-2">
                <img src={logo} alt="" />
              </div>
            </div>
            <h2 className="lg:text-[35px] text-[25px] whitespace-nowrap font-bold text-[#07A698] text-center mb-[20px]">
              OTP
            </h2>
            <p className="bg-gray-200 mb-[20px] text-[14px] px-[5px] py-[4px] flex gap-[6px] text-red-600 rounded-[6px]">
              <FaStarOfLife className="text-[10px] mt-[4px]" />
              আপনার নম্বর এ ৪ ডিজিটের কোড পাঠানো হয়েছে
            </p>
            <div className="flex flex-col gap-[20px]">
              <div className="flex items-center gap-[20px]">
                <OtpField placeholder={"0"} />
                <OtpField placeholder={"0"} />
                <OtpField placeholder={"0"} />
                <OtpField placeholder={"0"} />
              </div>

              <div className="w-full">
                <button className="w-full text-white bg-[#07A698] py-[6px] px-[15px] rounded-[6px] mt-[20px]">
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
