import React from "react";
import { BiSolidZap } from "react-icons/bi";
import GalleryCard from "../../../Component/GalleryCard/GalleryCard";
import Reveal from "../../../Component/Reveal/Reveal";

const Gallery = () => {
  return (
    <div className="max-w-[1100px] mx-auto    mt-[50px]  relative py-[60px]">
      <div className="flex items-center justify-center">
        <div>
          <Reveal>
            {" "}
            <div className="flex items-center justify-center">
              <button className="bg-white flex p-[5px]  rounded-full gap-[8px] pr-[10px] text-[14px] ">
                <div className="bg-[#07a69826] p-[4px] rounded-full">
                  <BiSolidZap className="text-[#07A698]" />
                </div>
                ছবি গ্যালারি
              </button>
            </div>
          </Reveal>
          <Reveal>
            <h2 className="text-[30px] font-bold my-[20px] text-[#162726]">
              আমাদের একাডেমির ছবি গ্যালারি ঘুরে দেখুন
            </h2>
          </Reveal>
        </div>
      </div>

      {/* ======>  Gallery <===== */}

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-[20px]  mt-[20px]">
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
      </div>
    </div>
  );
};

export default Gallery;
