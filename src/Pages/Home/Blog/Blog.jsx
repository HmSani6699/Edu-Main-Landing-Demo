import React from "react";
import { BiSolidZap } from "react-icons/bi";

const Blog = () => {
  return (
    <div className="h-screen  mt-[50px]  relative py-[60px]">
      <div className="flex items-center justify-center">
        <div>
          <div className="flex items-center justify-center">
            <button className="bg-white flex p-[5px]  rounded-full gap-[8px] pr-[10px] text-[14px] ">
              <div className="bg-[#07a69826] p-[4px] rounded-full">
                <BiSolidZap className="text-[#07A698]" />
              </div>
              Our Blog
            </button>
          </div>

          <h2 className="text-[30px] font-bold my-[20px] text-[#162726]">
            Latest News Updates
          </h2>
        </div>
      </div>

      {/* ======>  Blog <===== */}
      <div>hallo</div>
    </div>
  );
};

export default Blog;
