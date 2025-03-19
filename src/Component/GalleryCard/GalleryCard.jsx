import React from "react";
import image1 from "../../../public/about1.jpg";

const GalleryCard = () => {
  return (
    <div className="h-[200px] overflow-hidden border rounded-[10px]">
      <img className="h-full rounded-[10px]" src={image1} alt={`Hexagon `} />
    </div>
  );
};

export default GalleryCard;
