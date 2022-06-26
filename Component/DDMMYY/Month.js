import React from "react";
import "./../Calender.css";
import { monthdaycombinations } from "../Data/dataList";

const Month = ({ selectedMonth, setSelectedMonth }) => {
  return (
    <>
      <select
        name="month"
        id="1"
        value={selectedMonth}
        onChange={(e) => setSelectedMonth(e.target.value)}
      >
        {monthdaycombinations.map((month) => {
          return (
            <option
              key={month.monthid}
              value={month.monthid}
              days={month.monthdays}
            >
              {month.monthName}
            </option>
          );
        })}
      </select>
    </>
  );
};
export default Month;
