import React from "react";
import academy from "../../../../public/teacher.jpg";
import { BiSolidZap } from "react-icons/bi";
import about_shap from "../../../../public/about_shape.png";
import about from "../../../../public/about1.jpg";

const About = () => {
  return (
    <div className="mt-[150px] relative ">
      <div className="absolute top-[30px] left-0">
        <img className="w-[400px]" src={about_shap} alt="" />
      </div>
      <div className="max-w-[900px] mx-auto flex ">
        {/* =======> Left Content <====== */}
        <div className="lg:w-1/2">
          <img
            className="w-[350px] h-[350px] rounded-[20px]"
            src={about}
            alt="academy"
          />
          <div className="flex items-end justify-end -mt-[180px]">
            <div className="w-[230px] h-[240px] rounded-t-full border-[3px] p-[3px]  bg-white rounded-b-[6px] ">
              <img
                className="w-full h-full rounded-t-full rounded-b-[6px] border-t-2 border-white"
                src={academy}
                alt="academy"
              />
            </div>
          </div>
        </div>
        {/* =======> Right Content <====== */}
        <div className="lg:w-1/2 pl-[50px]">
          <button className="bg-white flex p-[5px]  rounded-full gap-[8px] pr-[10px] text-[14px]">
            <div className="bg-[#07a69826] p-[4px] rounded-full">
              <BiSolidZap className="text-[#07A698]" />
            </div>
            About Academay
          </button>

          <h2 className="text-[25px] font-bold my-[20px]">
            The Ultimate Online Platform for Interactive and
          </h2>

          <div className="flex items-center gap-[10px] mb-[20px]">
            <button className="bg-[#07A698] text-white rounded-full py-[4px] px-[10px] text-[14px]">
              Our Mission
            </button>
            <button className="hover:bg-[#07A698] hover:text-white border text-black bg-white rounded-full py-[4px] px-[10px] text-[14px]">
              Our Vision
            </button>
            <button className="hover:bg-[#07A698] hover:text-white border text-black bg-white rounded-full py-[4px] px-[10px] text-[14px]">
              Our Gool
            </button>
          </div>

          <div>
            <p className="text-[13px] mb-[20px]">
              Dictumst hendrerit velinunc justo. pulvinar massa diam vitae.
              Montes, orci fringilla maecenas tellus in convallis sed id. Sed ut
              commodo risus aenean. Quam consectetur ut vulputate ultrices diam.
            </p>
            <div className="flex flex-col gap-[10px]">
              <div className="flex items-center gap-[10px]">
                <button className="text-[#07A698] bg-white shadow-lg  h-[30px] w-[30px] rounded-full text-[14px] ">
                  01
                </button>
                <p className="text-[14px]">
                  Quality Content and Expert Instruction
                </p>
              </div>{" "}
              <div className="flex items-center gap-[10px]">
                <button className="text-[#07A698] bg-white shadow-lg  h-[30px] w-[30px] rounded-full text-[14px]">
                  02
                </button>
                <p className="text-[14px]">Student Engagement and Retention</p>
              </div>
            </div>
            <button className="bg-[#07A698]  text-white rounded-full py-[4px] px-[10px] text-[14px] mt-[25px]">
              More Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
