import { MdAccessAlarms } from "react-icons/md";
import Reveal from "../Reveal/Reveal";

const GalleryCard = ({ img }) => {
  return (
    <div className="rounded-[10px]">
      <div className="border shadow-lg rounded-[10px]">
        <div className="lg:h-[200px] h-[250px] w-full overflow-hidden  ">
          <img
            className="h-full w-[100%] rounded-t-[10px]"
            src={img}
            alt={`Hexagon `}
          />
        </div>
        <div className="flex p-[10px] gap-[10px] ">
          <div className="w-[15%] ">
            <img className="rounded-full w-[40px] h-[40px]" src={img} alt="" />
          </div>
          <div className="w-[80%]">
            <h2 className="text-[20px] font-bold">
              আপনি যদি কোনো স্কুল, কোচিং ...
            </h2>
            <p>
              যেকোনো শিক্ষা-প্রতিষ্ঠান পরিচালনার দায়িত্বে থাকেন, তাহলে এই
              সফটওয়্যারটি আপনার জন্য।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
