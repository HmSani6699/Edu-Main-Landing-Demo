import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";

const DemoUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        axios
          .get("https://assignment-3-zeta-ten.vercel.app/api/users")
          .then((res) => setUsers(res?.data?.users))
          .catch((err) => console.log(err));
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  function timeAgoFull(dateString) {
    const inputDate = new Date(dateString);
    const now = new Date();

    const diffMs = now - inputDate;

    const diffSeconds = Math.floor(diffMs / 1000);
    const diffMinutes = Math.floor(diffSeconds / 60);
    const diffHours = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffDays > 0) return `${diffDays} day(s) ago`;
    if (diffHours > 0) return `${diffHours} hour(s) ago`;
    if (diffMinutes > 0) return `${diffMinutes} minute(s) ago`;
    return `${diffSeconds} second(s) ago`;
  }

  // delete
  const deleteUser = async (id) => {
    try {
      await axios.delete(
        `https://assignment-3-zeta-ten.vercel.app/api/users${id}`
      );
      console.log("User deleted");
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  // ==================== Priching ================//
  const [students, setStudents] = useState("");
  const [monthlyPerStudent, setMonthlyPerStudent] = useState("");
  const [sixMonthPerStudent, setSixMonthPerStudent] = useState("");
  const [yearlyPerStudent, setYearlyPerStudent] = useState("");

  // Prices
  const monthlyPrice = students ? students * monthlyPerStudent : 0;
  const sixMonthPrice = students ? students * sixMonthPerStudent * 6 : 0;
  const yearlyPrice = students ? students * yearlyPerStudent * 12 : 0;

  // Base comparison (without discount)
  const sixMonthBase = students ? students * monthlyPerStudent * 6 : 0;
  const yearlyBase = students ? students * monthlyPerStudent * 12 : 0;

  // Discount amounts
  const sixMonthDiscountAmount = sixMonthBase - sixMonthPrice;
  const yearlyDiscountAmount = yearlyBase - yearlyPrice;

  // Discount percentages
  const sixMonthDiscount = students
    ? (
        ((monthlyPerStudent - sixMonthPerStudent) / monthlyPerStudent) *
        100
      ).toFixed(2)
    : 0;
  const yearlyDiscount = students
    ? (
        ((monthlyPerStudent - yearlyPerStudent) / monthlyPerStudent) *
        100
      ).toFixed(2)
    : 0;

  return (
    <div className="max-w-[1200px] mx-auto ">
      <div
        style={{ maxWidth: "800px", margin: "20px auto", fontFamily: "Arial" }}
        className="px-[20px]"
      >
        <h2>Pricing Calculator</h2>

        {/* Student Count */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[20px]">
          <input
            type="number"
            value={students}
            onChange={(e) => setStudents(e.target.value)}
            placeholder="Enter student count"
            style={{
              width: "100%",
              padding: "8px",
              marginBottom: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          />

          {/* Pricing Inputs */}
          <input
            type="number"
            value={monthlyPerStudent}
            onChange={(e) => setMonthlyPerStudent(Number(e.target.value))}
            placeholder="Monthly per student"
            style={{
              width: "100%",
              padding: "8px",
              marginBottom: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          />

          <input
            type="number"
            value={sixMonthPerStudent}
            onChange={(e) => setSixMonthPerStudent(Number(e.target.value))}
            placeholder="6-Month per student"
            style={{
              width: "100%",
              padding: "8px",
              marginBottom: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          />

          <input
            type="number"
            value={yearlyPerStudent}
            onChange={(e) => setYearlyPerStudent(Number(e.target.value))}
            placeholder="Yearly per student"
            style={{
              width: "100%",
              padding: "8px",
              marginBottom: "15px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        {/* Results */}
        <p>
          <strong>Monthly Price:</strong> {monthlyPrice} ৳
        </p>
        <p>
          <strong>6-Month Price:</strong> {sixMonthPrice} ৳{" "}
          {students ? (
            <span style={{ color: "green" }}>
              (Save {sixMonthDiscount}% | Discount Amount:{" "}
              {sixMonthDiscountAmount} ৳)
            </span>
          ) : (
            ""
          )}
        </p>
        <p>
          <strong>1-Year Price:</strong> {yearlyPrice} ৳{" "}
          {students ? (
            <span style={{ color: "green" }}>
              (Save {yearlyDiscount}% | Discount Amount: {yearlyDiscountAmount}{" "}
              ৳)
            </span>
          ) : (
            ""
          )}
        </p>
      </div>

      {/* ======== */}

      <h2 className="text-[40px] font-bold text-center my-[50px]">
        All Demo User
      </h2>

      {/*  */}
      <div className="overflow-auto table_scrollber">
        <table className="w-full mt-5 text-left border-collapse table-auto min-w-[600px] ">
          <thead>
            <tr className="bg-[#f4f7fe] font-semibold text-sm md:text-base">
              <td className="whitespace-nowrap h-10 px-[20px]  text-[#202C4B] text-[14px]">
                Author Name
              </td>
              <td className="whitespace-nowrap h-10 px-2 pl-[20px] text-[#202C4B] text-[14px]">
                Phone Number
              </td>
              <td className="whitespace-nowrap text-center h-10 px-[50px] text-[#202C4B] text-[14px]">
                Academic Name
              </td>
              <td className="whitespace-nowrap h-10 px-2 text-[#202C4B] text-[14px]">
                Total Student
              </td>
              <td className="whitespace-nowrap text-center h-10 px-[20px] text-[#202C4B] text-[14px]">
                Address
              </td>
              <td className="whitespace-nowrap text-center h-10 px-[20px] text-[#202C4B] text-[14px]">
                Request Date
              </td>
              <td className="whitespace-nowrap text-center h-10 px-[20px] text-[#202C4B] text-[14px]">
                Delete
              </td>
            </tr>
          </thead>
          <tbody>
            {users.map((data, i) => (
              <tr
                key={i}
                className={i % 2 === 1 ? "bg-[#f4f7fe] border-b" : "border-b"}
              >
                <td className="whitespace-nowrap text-[#3D5EE1] text-[14px] pl-[20px] h-10 px-2 py-[13px]">
                  {data?.authorName}
                </td>
                <td className="whitespace-nowrap text-[#515B73] text-[14px] text-center h-10 px-2 py-[13px]">
                  {data?.phone}
                </td>
                <td className="whitespace-nowrap text-[#515B73] text-[14px] text-center h-10 px-2 py-[13px]">
                  {data?.academicName}
                </td>

                <td className="whitespace-nowrap w-[100px] text-[#515B73] text-[14px] text-center h-10 px-2 py-[13px]">
                  {data?.totalStudent}
                </td>
                <td className="whitespace-nowrap text-[#515B73] text-[14px] text-center h-10 px-2 py-[13px]">
                  {data?.address}
                </td>
                <td className="whitespace-nowrap text-[#515B73] text-[14px] text-center h-10 px-2 py-[13px]">
                  {timeAgoFull(data?.createdAt)}
                </td>
                <td className="whitespace-nowrap text-[#515B73] text-[14px] text-center h-10 px-2 py-[13px]">
                  <button
                    onClick={() => deleteUser(data?._id)}
                    className="flex gap-[10px] text-[#515B73] text-[14px] items-center py-[8px] px-[15px] rounded-[5px] hover:bg-slate-100"
                  >
                    <AiOutlineDelete />
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DemoUser;
