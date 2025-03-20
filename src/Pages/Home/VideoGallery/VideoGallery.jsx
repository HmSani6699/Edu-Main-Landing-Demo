import { FaArrowLeft } from "react-icons/fa";
import shap_image from "../../../../public/testi-shape-1.png";
import { BiSolidZap } from "react-icons/bi";
import VideoCard from "../../../Component/VideoCard/VideoCard";
import Reveal from "../../../Component/Reveal/Reveal";

const VideoGallery = () => {
  return (
    <Reveal>
      <div className=" bg-[#07A698] mt-[100px]  relative py-[60px] ">
        <div className="absolute top-0 right-0">
          <img className="w-[500px]" src={shap_image} alt="shape" />
        </div>

        <div className="max-w-[1100px] mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <button className="bg-white flex p-[5px]  rounded-full gap-[8px] pr-[10px] text-[14px] ">
                <div className="bg-[#07a69826] p-[4px] rounded-full">
                  <BiSolidZap className="text-[#07A698]" />
                </div>
                ভিডিও গ্যালারি
              </button>

              <h2 className="text-[30px] font-bold my-[20px] text-white">
                আমাদের একাডেমির ভিডিও গ্যালারি ঘুরে দেখুন
              </h2>
            </div>
            <div className="flex items-center gap-[20px] relative z-40">
              <button className=" cursor-pointer  bg-white p-[10px] rounded-full text-[#07A698]">
                <FaArrowLeft />
              </button>
              <button className=" cursor-pointer  bg-white p-[10px] rounded-full text-[#07A698] rotate-[180deg]">
                <FaArrowLeft />
              </button>
            </div>
          </div>

          {/* =====> Video section <==== */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[20px] relative z-40">
            <VideoCard />
            <VideoCard />
            <VideoCard />
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default VideoGallery;
