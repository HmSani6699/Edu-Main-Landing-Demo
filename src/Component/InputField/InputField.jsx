import React from "react";

const InputField = ({
  type,
  title,
  value,
  setValue,
  placeholder,
  required,
}) => {
  return (
    <div>
      <p className="text-[16px] mb-[8px] ">{title}</p>
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full border-none outline-none py-[6px] px-[20px] rounded-[8px] text-black bg-gray-100 "
      />
    </div>
  );
};

export default InputField;
