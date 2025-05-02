import React from "react";
import image1 from "../../../public/about1.jpg";
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
      </div>
    </Reveal>
  );
};

export default GalleryCard;
