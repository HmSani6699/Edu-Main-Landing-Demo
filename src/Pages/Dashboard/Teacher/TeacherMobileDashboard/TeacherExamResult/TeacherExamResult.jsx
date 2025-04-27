import React from "react";
import SubBanner from "../../../../../Component/MobileDashboard/SubBanner/SubBanner";
import { MdOutlineCoPresent } from "react-icons/md";
import ExamResultLIstCard from "./ExamResultLIstCard";
import img from "../../../../../../public/test.png";

const TeacherExamResult = () => {
  return (
    <div>
      <SubBanner
        url={"/student-dashboard/1"}
        icon={<MdOutlineCoPresent className="text-[28px] " />}
        title={"Exam Result"}
      />

      {/* =====> Exam Result list cart <======== */}
      <div className="px-[10px] my-[30px] flex flex-col gap-[20px]">
        <ExamResultLIstCard
          examName="1st Semester"
          img={img}
          dateTime={"06 April 2025 09:00PM"}
          discription={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, blanditiis! Nisi magni totam nesciunt iusto."
          }
        />
        <ExamResultLIstCard
          examName="2st Semester"
          img={img}
          dateTime={"06 April 2025 09:00PM"}
          discription={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, blanditiis! Nisi magni totam nesciunt iusto."
          }
        />
      </div>
    </div>
  );
};

export default TeacherExamResult;
