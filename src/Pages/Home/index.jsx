import React from "react";
import Navber from "../Navber/Navber";
import Banner from "./Banner/Banner";
import ClientReview from "./ClientReview/ClientReview";
import AllStudents from "./AllStudents/AllStudents";

const Home = () => {
  return (
    <div className="max-w-[1280px] mx-auto   relative">
      <Banner />
      {/* <ClientReview /> */}
      <AllStudents />
    </div>
  );
};

export default Home;
