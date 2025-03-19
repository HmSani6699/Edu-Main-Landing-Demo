import React from "react";
import Navber from "../Navber/Navber";
import Banner from "./Banner/Banner";
import ClientReview from "./ClientReview/ClientReview";
import AllStudents from "./AllStudents/AllStudents";
import About from "./About/About";
import ClassCurriculum from "./ClassCurriculum/ClassCurriculum";
import AllTeacher from "./AllTeacher/AllTeacher";
import VideoGallery from "./VideoGallery/VideoGallery";
import Blog from "./Gallery/Gallery";
import Gallery from "./Gallery/Gallery";

const Home = () => {
  return (
    <div className="max-w-[1280px] mx-auto   relative">
      <Banner />
      <About />
      <ClassCurriculum />
      <AllStudents />
      <AllTeacher />
      <VideoGallery />
      <Gallery />
    </div>
  );
};

export default Home;
