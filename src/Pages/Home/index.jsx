import About from "./About/About";
import AllStudents from "./AllStudents/AllStudents";
import AllTeacher from "./AllTeacher/AllTeacher";
import Banner from "./Banner/Banner";
import ClassCurriculum from "./ClassCurriculum/ClassCurriculum";
import Feature from "./Feature/Feature";
import Gallery from "./Gallery/Gallery";
import VideoGallery from "./VideoGallery/VideoGallery";

const Home = () => {
  return (
    <div className="lg:max-w-[1280px] mx-auto   relative ">
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
