import React from "react";
import image1 from "../../../public/about1.jpg";
import Reveal from "../Reveal/Reveal";

const GalleryCard = () => {
  return (
    <Reveal>
      <div className="lg:h-[200px] h-[250px] w-full overflow-hidden border rounded-[10px]">
        <img
          className="h-full w-[100%] rounded-[10px]"
          src={image1}
          alt={`Hexagon `}
        />
      </div>
    </Reveal>
  );
};

export default GalleryCard;
