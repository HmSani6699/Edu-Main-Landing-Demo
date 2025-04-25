import React from "react";
import man from "../../../public/teacher1.png";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

const VideoCard = ({ url }) => {
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

      {/* <iframe
        className="rounded-[10px] h-[230px] w-full"
        src="https://www.youtube.com/watch?v=IkcTeEHY4ZQ"
        title="YouTube Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe> */}

      {/* <div className="mt-[20px]">
        <div className="h-[50px] w-[50px] rounded-full bg-white overflow-hidden">
          <img src={man} alt="" />
        </div>
      </div> */}

      <div className="rounded-[10px]  w-full overflow-hidden">
        <LiteYouTubeEmbed
          id={url}
          title="What’s new in Material Design for the web (Chrome Dev Summit 2019)"
        />
      </div>
    </div>
  );
};

export default VideoCard;
