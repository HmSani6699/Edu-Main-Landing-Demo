import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Login/Login";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Contact from "../Pages/Contact/Contact";
import Admission from "../Pages/Admission/Admission";
import ForgotPassword from "../Pages/Login/ForgotPassword";
import ClassList from "../Pages/Dashboard/Student/StudentMobileDashboard/ClassList";
import ExamResult from "../Pages/Dashboard/Student/StudentMobileDashboard/ExamResult/ExamResult";
import NoticeBoard from "../Component/MobileDashboard/NoticeBoard/NoticeBoard";
import Fees from "../Pages/Dashboard/Student/StudentMobileDashboard/Fees/Fees";
import Leave from "../Component/MobileDashboard/Leave/Leave";
import ClassPerformance from "../Pages/Dashboard/Student/StudentMobileDashboard/ClassPerformance/ClassPerformance";
import TeacherMobileDashboard from "../Pages/Dashboard/Teacher/TeacherMobileDashboard/TeacherMobileDashboard";
import StudentMobileDashboard from "../Pages/Dashboard/Student/StudentMobileDashboard/StudentMobileDashboard";
import ClassManagment from "../Component/MobileDashboard/TeacherClassPeriod/ClassManagment";
import StudentMobileProfile from "../Pages/Dashboard/Teacher/TeacherMobileDashboard/StudentMobileProfile/StudentMobileProfile";
import TeacherClassList from "../Pages/Dashboard/Teacher/TeacherMobileDashboard/TeacherClassList/TeacherClassList";
import TeacherHomwWork from "../Pages/Dashboard/Teacher/TeacherMobileDashboard/TeacherHomwWork/TeacherHomwWork";
import StudentHomeWork from "../Pages/Dashboard/Student/StudentMobileDashboard/StudentHomeWork/StudentHomeWork";
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
      {
        path: "leave",
        element: <Leave />,
      },

      // ====== Student Dashboard <=====//
      {
        path: "student-dashboard/:id",
        element: <StudentMobileDashboard />,
      },
      {
        path: "student-class",
        element: <ClassList />,
      },
      {
        path: "student-class-performance",
        element: <ClassPerformance />,
      },
      {
        path: "student-home-work",
        element: <StudentHomeWork />,
      },
      {
        path: "student-exam-result",
        element: <ExamResult />,
      },
      {
        path: "student-fees",
        element: <Fees />,
      },
      // ====== Teacher Dashboard <=====//
      {
        path: "teacher-dashboard/:id",
        element: <TeacherMobileDashboard />,
      },
      {
        path: "class_managment",
        element: <ClassManagment />,
      },
      {
        path: "student_profile/:id",
        element: <StudentMobileProfile />,
      },
      {
        path: "teacher_class",
        element: <TeacherClassList />,
      },
      {
        path: "teacher-home-work/:id",
        element: <TeacherHomwWork />,
      },
    ],
  },
]);

export default router;
