import React from "react";
import man from "../../../public/teacher1.png";

const VideoCard = () => {
  return (
    <div className=" rounded-[10px] ">
      {/* <div>
        <video
          className="rounded-[10px] h-[230px] w-full"
          controls
          autoPlay
          src="https://www.youtube.com/watch?v=jv-E-EMGw2A"
        ></video>
      </div> */}

      <iframe
        className="rounded-[10px] h-[230px] w-full"
        src="https://www.youtube.com/watch?v=jv-E-EMGw2A"
        title="YouTube Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      {/* <div className="mt-[20px]">
        <div className="h-[50px] w-[50px] rounded-full bg-white overflow-hidden">
          <img src={man} alt="" />
        </div>
      </div> */}
    </div>
  );
};

export default VideoCard;
