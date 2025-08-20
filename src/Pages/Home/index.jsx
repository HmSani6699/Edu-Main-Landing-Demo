import React from "react";
import Banner from "./Banner/Banner";
import AllStudents from "./AllStudents/AllStudents";
import About from "./About/About";
import ClassCurriculum from "./ClassCurriculum/ClassCurriculum";
import AllTeacher from "./AllTeacher/AllTeacher";
import VideoGallery from "./VideoGallery/VideoGallery";
import Gallery from "./Gallery/Gallery";

const Home = () => {
  return (
    <div className="lg:max-w-[1280px] mx-auto   relative ">
      <Banner />
      <About />
      {/* <ClassCurriculum /> */}
      {/* <AllTeacher /> */}
      {/* <VideoGallery /> */}
      {/* <Gallery /> */}
    </div>
  );
};

export default Home;
