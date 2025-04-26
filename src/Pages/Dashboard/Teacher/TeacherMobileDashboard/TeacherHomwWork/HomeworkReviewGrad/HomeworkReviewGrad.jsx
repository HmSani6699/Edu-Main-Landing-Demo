import React from "react";
import HomeworkReviewGradCard from "./HomeworkReviewGradCard";

const HomeworkReviewGrad = () => {
  return (
    <div className="px-[10px] flex flex-col gap-[20px] my-[30px] ">
      <HomeworkReviewGradCard
        subject={"Bangla"}
        assigenDate={"10 April 2025"}
        submissionDate={"10 April 2025"}
      />
      <HomeworkReviewGradCard
        subject={"Bangla"}
        assigenDate={"10 April 2025"}
        submissionDate={"10 April 2025"}
      />
      <HomeworkReviewGradCard
        subject={"Bangla"}
        assigenDate={"10 April 2025"}
        submissionDate={"10 April 2025"}
      />
      <HomeworkReviewGradCard
        subject={"Bangla"}
        assigenDate={"10 April 2025"}
        submissionDate={"10 April 2025"}
      />
    </div>
  );
};

export default HomeworkReviewGrad;
