import React, { useState } from "react";
import SubBanner from "../../../../../Component/MobileDashboard/SubBanner/SubBanner";
import { MdOutlineCoPresent } from "react-icons/md";
import ExamResultViewCard from "./ExamResultViewCard";

const ExamResult = () => {
  const [examResultDetailsOpen, setExamResultDetailsOpen] = useState("1");
  return (
    <div>
      <SubBanner
        url={"/student-dashboard/1"}
        icon={<MdOutlineCoPresent className="text-[28px] " />}
        title={"Exam & Result"}
      />

      {/* ===== */}
      <div className="flex flex-col gap-[20px] px-[10px]  my-[30px]">
        {["First Semister", "Second Semister", "Third Semister"].map(
          (item, i) => (
            <ExamResultViewCard
              id={i + 1}
              examName={item}
              subject={["Bangla", "English", "Arabic"]}
              maxMarks={["50", "70", "90"]}
              minMarks={["50", "70", "90"]}
              MarksObtained={["50", "70", "90"]}
              status={["Pass", "Fale", "Pass"]}
              examResultDetailsOpen={examResultDetailsOpen}
              setExamResultDetailsOpen={setExamResultDetailsOpen}
            />
          )
        )}
      </div>
    </div>
  );
};

export default ExamResult;
