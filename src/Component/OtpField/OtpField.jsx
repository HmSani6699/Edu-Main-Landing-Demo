import React from "react";

const OtpField = ({ type, title, value, setValue, placeholder }) => {
  return (
    <input
      type={type}
      value={value}
      setValue={setValue}
      placeholder={placeholder}
      className="w-full border-none outline-none py-[15px] px-[25px] rounded-[8px] text-black bg-gray-200"
    />
  );
};

export default OtpField;
