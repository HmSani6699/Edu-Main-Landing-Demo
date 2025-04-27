import React, { useState } from "react";
import ProfileBanner from "../StudentMobileProfile/ProfileBanner/ProfileBanner";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiPlusCircle } from "react-icons/fi";

const ExamResultCreateUpdate = () => {
  const [forms, setForms] = useState([
    {
      subject: "",
      totalMarks: "",
      obtainedMarks: "",
      grade: "",
      performance: "",
      note: "",
    },
  ]);

  const handleAddForm = () => {
    setForms([
      ...forms,
      {
        subject: "",
        totalMarks: "",
        obtainedMarks: "",
        grade: "",
        performance: "",
        note: "",
      },
    ]);
  };

  const handleDeleteForm = (index) => {
    const newForms = [...forms];
    newForms.splice(index, 1);
    setForms(newForms);
  };

  const handleChange = (index, field, value) => {
    const newForms = [...forms];
    newForms[index][field] = value;
    setForms(newForms);
  };

  return (
    <div className="">
      <ProfileBanner url={"/teacher-exam-result-details"} />

      {/* =====> Create Form <====== */}
      <div className="space-y-8 p-4">
        {forms.map((form, index) => (
          <div
            key={index}
            className="p-4 rounded-lg border space-y-4 relative bg-white"
          >
            {/* Subject */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Subject
              </label>
              <select
                value={form.subject}
                onChange={(e) => handleChange(index, "subject", e.target.value)}
                className="w-full p-2 border rounded-md bg-gray-50 focus:outline-none"
              >
                <option value="">Select Subject</option>
                <option>Mathematics</option>
                <option>Science</option>
                <option>English</option>
              </select>
            </div>

            {/* Total Marks & Obtained Marks */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">
                  Total Marks
                </label>
                <input
                  type="number"
                  value={form.totalMarks}
                  onChange={(e) =>
                    handleChange(index, "totalMarks", e.target.value)
                  }
                  placeholder="Enter total marks"
                  className="w-full p-2 border rounded-md bg-gray-50 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">
                  Obtained Marks
                </label>
                <input
                  type="number"
                  value={form.obtainedMarks}
                  onChange={(e) =>
                    handleChange(index, "obtainedMarks", e.target.value)
                  }
                  placeholder="Enter obtained marks"
                  className="w-full p-2 border rounded-md bg-gray-50 focus:outline-none"
                />
              </div>
            </div>

            {/* Grade & Performance */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">
                  Grade
                </label>
                <select
                  value={form.grade}
                  onChange={(e) => handleChange(index, "grade", e.target.value)}
                  className="w-full p-2 border rounded-md bg-gray-50 focus:outline-none"
                >
                  <option value="">Select Grade</option>
                  <option>A+</option>
                  <option>A</option>
                  <option>B+</option>
                  <option>B</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">
                  Performance
                </label>
                <select
                  value={form.performance}
                  onChange={(e) =>
                    handleChange(index, "performance", e.target.value)
                  }
                  className="w-full p-2 border rounded-md bg-gray-50 focus:outline-none"
                >
                  <option value="">Select Performance</option>
                  <option>Excellent</option>
                  <option>Good</option>
                  <option>Average</option>
                  <option>Stable</option>
                  <option>Improved</option>
                </select>
              </div>
            </div>

            {/* Teacher's Note */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Teacher's Note
              </label>
              <textarea
                value={form.note}
                onChange={(e) => handleChange(index, "note", e.target.value)}
                rows="3"
                placeholder="Add your feedback here..."
                className="w-full p-2 border rounded-md bg-gray-50 focus:outline-none"
              ></textarea>
            </div>

            {/* Buttons */}
            <div className="flex items-center justify-between">
              <div className="flex justify-end gap-3">
                {forms.length > 1 && (
                  <button onClick={() => handleDeleteForm(index)}>
                    <RiDeleteBin6Line className="text-red-600" />
                  </button>
                )}
                <button onClick={handleAddForm}>
                  <FiPlusCircle className="text-[#07A698]" />
                </button>
              </div>
              <button
                type="submit"
                className="font-Baloo text-white bg-[#07A698] flex items-center justify-center py-[8px] px-5  gap-2 rounded-md"
              >
                জমা দিন
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExamResultCreateUpdate;
