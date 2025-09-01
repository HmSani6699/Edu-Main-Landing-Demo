import Navber from "../Pages/Navber/Navber";
import Footer from "../Pages/Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import DemoPage from "../assets/DemoPage/DemoPage";

const Main = () => {
  const { pathname } = useLocation();
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <div className="relative">
      <div>
        <Navber />
      </div>
      <Outlet />
      <div>
        <Footer />
      </div>

      <div className=" fixed bottom-[20px] left-1/2 transform -translate-x-1/2 px-4 py-2 text-white rounded z-[99]">
        <button
          onClick={() => setIsDemoOpen(true)}
          className="py-[10px] px-[30px] rounded-[8px] bg-[#07A698] text-white font-bold btn btn-pulse whitespace-nowrap"
        >
          সফটওয়্যার নিতে ক্লিক করুন
        </button>
      </div>

      {/* ==== Demo pag e=== */}
      {isDemoOpen ? <DemoPage setIsDemoOpen={setIsDemoOpen} /> : ""}
    </div>
  );
};

export default Main;
