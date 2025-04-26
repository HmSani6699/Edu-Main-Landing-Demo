import React from "react";
import { useNavigate } from "react-router-dom";
import Reveal from "../../../../../../Component/Reveal/Reveal";
import subject_image from "../../../../../../../public/test.png";

const HomeworkReviewGradList = ({ subject, assigenDate, submissionDate }) => {
  const navigate = useNavigate();
  return (
    <Reveal>
      <div
        onClick={() => navigate("/teacher-home-work-review-grade-card/1")}
        className="border-[#07A698] border rounded-[20px] p-[20px] flex items-center justify-between"
      >
        <div>
          <button className="px-[10px] bg-[#07a69824] text-[#07a698] rounded-[5px] mb-[10px]">
            <h2 className="text-[23px] ">{subject}</h2>
          </button>
          <p className="text-gray-400">{assigenDate}</p>
          <p className="text-gray-400">{submissionDate}</p>
        </div>
        <div className=" h-[80px] w-[70px] rounded-[5px]">
          <img
            className="w-full h-full rounded-[5px]"
            src={subject_image}
            alt="subjct"
          />
        </div>
      </div>
    </Reveal>
  );
};

export default HomeworkReviewGradList;
