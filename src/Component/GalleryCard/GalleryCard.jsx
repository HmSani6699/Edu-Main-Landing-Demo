import { MdAccessAlarms } from "react-icons/md";
import Reveal from "../Reveal/Reveal";

const GalleryCard = ({ img }) => {
  return (
    <Reveal>
      <div className="lg:h-[200px] h-[250px] w-full overflow-hidden border rounded-[10px]">
        <img
          className="h-full w-[100%] rounded-[10px]"
          src={img}
          alt={`Hexagon `}
        />
        <div className="rounded-[10px]">
          <div className="border shadow-lg rounded-[10px]">
            <div className="lg:h-[200px] h-[250px] w-full overflow-hidden  ">
              <img
                className="h-full w-[100%] rounded-t-[10px]"
                src={img}
                alt={`Hexagon `}
              />
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default GalleryCard;
