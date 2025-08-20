import Navber from "../Pages/Navber/Navber";
import Footer from "../Pages/Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";

const Main = () => {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <div>
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
