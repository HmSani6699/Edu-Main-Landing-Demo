import { BiSolidZap } from "react-icons/bi";
import GalleryCard from "../../../Component/GalleryCard/GalleryCard";
import Reveal from "../../../Component/Reveal/Reveal";

import image1 from "../../../../public/gallery/img1.jpg";
import image2 from "../../../../public/gallery/img2.jpeg";
import image7 from "../../../../public/gallery/img7.jpeg";
import image8 from "../../../../public/gallery/img8.jpg";

import image3 from "../../../../public/gallery/img3.jpeg";
import image4 from "../../../../public/gallery/img4.jpeg";
import image5 from "../../../../public/gallery/img5.jpeg";
import image6 from "../../../../public/gallery/img6.jpeg";

const Gallery = () => {
  return (
    <div className="max-w-[1100px] mx-auto    lg:mt-[50px]  relative py-[60px] p-[10px]">
      <div className="flex items-center justify-center">
        <div>
          <Reveal>
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
            <h2 className="text-[30px] font-bold my-[20px] text-[#162726] text-center lg:text-start">
              আমাদের একাডেমির ছবি গ্যালারি ঘুরে দেখুন
            </h2>
          </Reveal>
        </div>
      </div>

      {/* ======>  Gallery <===== */}

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-[20px]  mt-[20px]">
        {[image8, image1, image2, image7, image3, image4, image5, image6]?.map(
          (img) => (
            <GalleryCard img={img} />
          )
        )}
      </div>
    </div>
  );
};

export default Gallery;
