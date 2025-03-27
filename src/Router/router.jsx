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
import ExamResult from "../Pages/Dashboard/Student/StudentMobileDashboard/ExamResult/ExamResult";
import NoticeBoard from "../Component/MobileDashboard/NoticeBoard/NoticeBoard";
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
      {
        path: "notice-board",
        element: <NoticeBoard />,
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
      {
        path: "student-exam-result",
        element: <ExamResult />,
      },
    ],
  },
]);

export default router;
