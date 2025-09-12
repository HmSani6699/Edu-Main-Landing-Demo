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
    </div>
  );
};

export default Main;
