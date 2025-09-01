import React, { useState } from "react";
import { RiCloseLargeLine } from "react-icons/ri";
import InputField from "../../Component/InputField/InputField";
import logo from "../../../public/logo1.png";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import axios from "axios";

const DemoPage = ({ setIsDemoOpen }) => {
  const [isopenPage, setIsOpenPgae] = useState("form");

  const [authorName, setAuthorName] = useState("");
  const [phone, setPhone] = useState("");
  const [academicName, setAcademicName] = useState("");
  const [totalStudent, setTotalStudent] = useState();
  const [address, setAddress] = useState("");

  const [isNameErros, setNameErrors] = useState("");
  const [isPhoneErros, setPhoneErrors] = useState("");

  const handlePostInfo = async () => {
    if (!authorName && !phone) {
      setNameErrors("দয়া করে আপনার নাম লিখুন");
      setPhoneErrors("আপনার ফোন নাম্বার লিখুন");
      return;
    }
    try {
      const payload = {
        authorName,
        phone,
        academicName,
        totalStudent,
        address,
      };

      console.log(payload);

      // POST request
      const response = await axios.post(
        "https://assignment-3-zeta-ten.vercel.app/api/user", // তোমার API URL
        payload
      );

      console.log("Server Response:", response.data);

      // যদি success হয়
      setIsOpenPgae("success");
    } catch (error) {
      console.error("Error posting info:", error);
      alert("Something went wrong! Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[100] bg-[#07a698eb] overflow-auto">
      <div className="relative bg-white rounded-2xl shadow-lg  w-full  z-10 m-[20px] p-[20px] lg:w-[700px]">
        <div className="flex items-end justify-end">
          <button onClick={() => setIsDemoOpen(false)}>
            <RiCloseLargeLine />
          </button>
        </div>

        {isopenPage === "form" ? (
          <div>
            <div className="flex items-center justify-center lg:mb-[20px] mb-[10px] lg:mt-[10px] mt-0">
              <img className="w-[200px]" src={logo} alt="" />
            </div>
            <p className="text-center text-[14px] lg:mb-[40px] mb-[20px]">
              আমাদের সাথে থাকার জন্য আপনাকে অসংখ্য ধন্যবাদ দয়া করে নিচের
              তথ্যগুলো দিয়ে আমাদের সাথে থাকবেন
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-[20px] gap-[10px]">
              <div>
                <InputField
                  placeholder={"আপনার নাম লিখুন"}
                  title={"আপনার নাম "}
                  required={true}
                  value={authorName}
                  setValue={setAuthorName}
                />
                <p className="text-[14px] text-red-600 mt-[3px] pl-[3px]">
                  {isNameErros}
                </p>
              </div>
              <div>
                <InputField
                  placeholder={"একটি মোবাইল নাম্বার লিখুন"}
                  title={"মোবাইল নাম্বার "}
                  required={true}
                  value={phone}
                  setValue={setPhone}
                />
                <p className="text-[14px] text-red-600 mt-[3px] pl-[3px]">
                  {isPhoneErros}
                </p>
              </div>

              <div className="lg:col-span-2">
                <InputField
                  placeholder={"আপনার প্রতিষ্ঠানের নাম লিখুন"}
                  title={"আপনার প্রতিষ্ঠানের নাম "}
                  required={false}
                  value={academicName}
                  setValue={setAcademicName}
                />
              </div>
              <InputField
                placeholder={"ছাত্র-ছাত্রী সংখ্যা"}
                title={"ছাত্র-ছাত্রী সংখ্যা"}
                required={false}
                value={totalStudent}
                setValue={setTotalStudent}
              />
              <InputField
                placeholder={"প্রতিষ্ঠানের ঠিকানা লিখুন"}
                title={"প্রতিষ্ঠানের ঠিকানা "}
                required={false}
                value={address}
                setValue={setAddress}
              />
            </div>
            <div className="flex items-end justify-end">
              <button
                onClick={handlePostInfo}
                className="py-[8px] px-[20px] rounded-[8px] bg-[#07A698] text-white text-[14px] font-bold  w-full mt-[20px] "
              >
                Submit
              </button>
            </div>{" "}
          </div>
        ) : isopenPage === "success" ? (
          <div>
            <div className="flex items-center justify-center">
              <IoCheckmarkDoneCircleSharp className="text-[70px] text-[#07A698]" />
            </div>
            <p className="text-center my-[20px]">
              ধন্যবাদ আপনার তথ্যগুলো সঠিকভাবে আপলোড হয়েছে খুব শীঘ্রই আমাদের
              একজন প্রতিনিধি আপনার সাথে যোগাযোগ করবে
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default DemoPage;
