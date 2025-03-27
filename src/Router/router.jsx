import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Login/Login";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Contact from "../Pages/Contact/Contact";
import Admission from "../Pages/Admission/Admission";
import ForgotPassword from "../Pages/Login/ForgotPassword";
import StudentMobilrDashboard from "../Pages/Dashboard/Student/StudentMobileDashboard/StudentMobilrDashboard";
import ClassList from "../Pages/Dashboard/Student/StudentMobileDashboard/ClassList";
import HomeWork from "../Pages/Dashboard/Student/StudentMobileDashboard/HomeWork/HomeWork";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "forgotPassword",
        element: <ForgotPassword />,
      },
      {
        path: "aboutUs",
        element: <AboutUs />,
      },
      {
        path: "admission",
        element: <Admission />,
      },
      {
        path: "contact",
        element: <Contact />,
      },

      // ====== Student Dashboard <=====//
      {
        path: "student-dashboard/:id",
        element: <StudentMobilrDashboard />,
      },
      {
        path: "student-class",
        element: <ClassList />,
      },
      {
        path: "student-home-work",
        element: <HomeWork />,
      },
    ],
  },
]);

export default router;
