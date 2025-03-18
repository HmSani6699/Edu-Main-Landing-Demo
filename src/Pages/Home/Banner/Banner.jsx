import React from "react";
import "./Banner.css";
import student from "../../../../public/student.png";
import teacher from "../../../../public/teacher.png";
import staff from "../../../../public/staff.png";
import section from "../../../../public/section.png";
import Countdown from "../../../Component/Countdown/Countdown";

const Banner = () => {
  return (
    <div>
      <div className="bg-[#1e567bb5] h-screen flex items-center justify-center text-white">
        <h2 className="text-[40px]">Banner Design Comming Soon .....!</h2>
      </div>
      <div className="bg-white flex items-center justify-between max-w-[1100px] mx-auto -mt-[60px] rounded-[10px] p-[30px]">
        <Countdown
          img={student}
          number={"200"}
          title={"জন+"}
          main_title={"শিক্ষার্থী"}
        />
        <Countdown
          img={teacher}
          number={"10"}
          title={"জন+"}
          main_title={"শিক্ষক"}
        />
        <Countdown
          img={staff}
          number={"04"}
          title={"জন+"}
          main_title={"কর্মী"}
        />
        <Countdown
          img={section}
          number={"05"}
          title={" টি+"}
          main_title={"বিভাগ"}
        />
      </div>
    </div>
  );
};

export default Banner;
