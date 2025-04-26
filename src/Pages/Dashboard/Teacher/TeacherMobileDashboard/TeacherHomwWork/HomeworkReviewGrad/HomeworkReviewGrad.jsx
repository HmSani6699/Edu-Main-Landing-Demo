import React from "react";
import HomeworkReviewGradList from "./HomeworkReviewGradList";

const HomeworkReviewGrad = () => {
  return (
    <div className="px-[10px] flex flex-col gap-[20px] my-[30px] ">
      <HomeworkReviewGradList
        subject={"Bangla"}
        assigenDate={"10 April 2025"}
        submissionDate={"10 April 2025"}
      />
      <HomeworkReviewGradList
        subject={"Bangla"}
        assigenDate={"10 April 2025"}
        submissionDate={"10 April 2025"}
      />
      <HomeworkReviewGradList
        subject={"Bangla"}
        assigenDate={"10 April 2025"}
        submissionDate={"10 April 2025"}
      />
      <HomeworkReviewGradList
        subject={"Bangla"}
        assigenDate={"10 April 2025"}
        submissionDate={"10 April 2025"}
      />
    </div>
  );
};

export default HomeworkReviewGrad;
