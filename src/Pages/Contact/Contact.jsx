import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import about from "../../../public/about1.jpg";

const Contact = () => {
  return (
    <div>
      {/* =====> Menu Derication <==== */}
      <div className="flex items-center gap-[10px] py-[40px] max-w-[1200px] mx-auto px-[10px]">
        <IoHomeOutline className="text-[#1d5276]" />
        <p className="text-[#1d5276]">হোম</p>
        <IoIosArrowForward className="text-[#1d5276]" />
        <p className="text-gray-500">আমাদের সম্পর্কে</p>
      </div>
      {/* =====> Menu Derication <==== */}
      <div className="contact_us_bg bg-[#F4FBFF]">
        <div>
          <div className="py-14 flex flex-col gap-3 text-center">
            <h1 className="text-[#2E3138] text-[21px] md:text-[24px] lg:text-[28px] font-[600] lg:font-[700] leading-[28px] md:leading-[36px] text-center ">
              যোগাযোগ
            </h1>
            <p className="text-[#464A53] text-[21px] md:text-[14px] lg:text-[18px] font-[400] lg:font-[500] leading-[25px] md:leading-[28px] w-[343px] md:w-[580px] lg:w-[883px] mx-auto">
              যে কোনো প্রয়োজনে যোগাযোগ করতে সরাসরি আমাদের অফিস ভিজিট করতে
              পারেন। তাছাড়া হটলাইন নম্বরে কল করে জেনে নিতে পারেন ট্রেইনিং
              সংক্রান্ত যেকোনো তথ্য। এছাড়াও উল্লেখিত মেইলে কিংবা ফেসবুক
              ম্যাসেঞ্জারেও নক দিতে পারেন।
            </p>
          </div>
        </div>
      </div>

      {/* map and details */}
      <div className="max-w-[1100px] mx-auto mt-[30px] px-[10px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 py-[30px] gap-5 lg:gap-14 px-0 md:px-20 lg:px-0">
          <div className="overflow-hidden bg-white rounded-[20px] ">
            <div className="p-1">
              <iframe
                className="w-full h-[365px] rounded-[20px]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.403684594337!2d90.34984647048685!3d22.713232282279513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375534204212d309%3A0xea060a02396e8889!2sRainbow%20Computer%20Training%20Institute!5e0!3m2!1sen!2sbd!4v1699362621241!5m2!1sen!2sbd"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="flex flex-col gap-5 justify-center">
            <div>
              <h1 className="text-[#2E3138] text-[20px] md:text-[28px] font-[600] lg:font-[700] leading-[28px] md:leading-[36px] ">
                পাকুন্ডা সরকারি প্রাথমিক বিদ্যালয়
              </h1>
              <h1 className="text-[#2E3138] text-[14px] md:text-[18px] font-[400] lg:font-[500] leading-[18px] md:leading-[28px] ">
                পাকুন্ডা, সোনারগাঁ, নারায়ণগঞ্জ
              </h1>
            </div>
            <div>
              <h1 className="text-[#2E3138] text-[20px] md:text-[28px] font-[600] lg:font-[700] leading-[28px] md:leading-[36px] ">
                হেল্পলাইন
              </h1>
              <h1 className="text-[#2E3138] text-[14px] md:text-[18px] font-[400] lg:font-[500] leading-[18px] md:leading-[28px] ">
                Phone: 01996359111
              </h1>
              <h1 className="text-[#2E3138] text-[14px] md:text-[18px] font-[400] lg:font-[500] leading-[18px] md:leading-[28px] ">
                E-mail: support@gamil.com
              </h1>
            </div>
            <div>
              <h1 className="text-[#2E3138] text-[20px] md:text-[28px] font-[600] lg:font-[700] leading-[28px] md:leading-[36px] ">
                অফিস ভিজিটের সময়
              </h1>
              <h1 className="text-[#2E3138] text-[14px] md:text-[18px] font-[400] lg:font-[500] leading-[18px] md:leading-[28px] ">
                শনিবার - শুক্রবার (সকাল ৯ টা থেকে রাত ৮ টা)
              </h1>
              <h1 className="text-[#2E3138] text-[14px] md:text-[18px] font-[400] lg:font-[500] leading-[18px] md:leading-[28px] ">
                ফোনে সকাল ১০টা হতে রাত ১১টা
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* ======>  */}
      <div className="mt-[30px] lg:w-[600px] mx-auto ">
        <div className="flex justify-center items-center w-full ">
          <div className="py-[20px] px-5">
            <h2 className="font-Baloo text-[#1D5276] text-[23px] leading-[28px] sm:leading-[32px] font-[700] mb-3 text-center md:text-start ">
              আপনার যেকোনো প্রয়োজনে আমরা আছি আপনার পাশেই
            </h2>
            <p className="font-Baloo text-[#374151] text-sm sm:text-base leading-[18px] sm:leading-[24px] font-[400] mb-3 text-center ">
              যে কোন উদ্বেগ বা অনুসন্ধান সম্পর্কে আমাদের সাথে যোগাযোগ করুন.
            </p>
            <form>
              <div className="flex gap-4 mt-[20px] mb-[20px] ">
                <div className="w-1/2">
                  <label
                    htmlFor="name"
                    className="text-[#111827] font-Baloo text-base leading-[22px] font-[500] mb-3"
                  >
                    আপনার নাম
                  </label>
                  <br />
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="আপনার নাম"
                    required
                    className="w-full px-[12px] py-[10px] outline-none rounded-md border border-1 border-[#D1D5DB] shadow-sm placeholder:font-Baloo"
                  />
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="number"
                    className="text-[#111827] font-Baloo text-base leading-[22px] font-[500] mb-3"
                  >
                    মোবাইল নম্বর
                  </label>
                  <br />
                  <input
                    name="number"
                    type="text"
                    placeholder="মোবাইল নম্বর"
                    id="number"
                    required
                    className="w-full px-[12px] py-[10px] outline-none rounded-md border border-1 border-[#D1D5DB] shadow-sm placeholder:font-Baloo"
                  />
                </div>
              </div>

              <label
                className="text-[#111827] font-Baloo text-base leading-[22px] font-[500] mb-3 "
                htmlFor="description"
              >
                নোট
              </label>
              <br />
              <textarea
                name="description"
                type="text"
                placeholder="দয়া করে আমাদের জানান আপনি কি বা কোন বিষয়ে জানতে চান"
                id="description"
                required
                className="w-full px-[12px] py-[10px] outline-none rounded-md border border-1 border-[#D1D5DB] h-[120px] shadow-sm placeholder:font-Baloo"
              />
              <div className="flex justify-center md:justify-normal">
                <button
                  type="submit"
                  className="font-Baloo text-white bg-[#07A698] flex items-center justify-center py-[10px] px-5  gap-2 rounded-md mt-5"
                >
                  জমা দিন
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
