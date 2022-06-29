import React from "react";
import "./../Calender.css";
import { findYearArray } from "../Logic/findYearArray";
import { isLeapYear } from "../Logic/findLeapYear";

const Year = ({ startYear, endYear, selectedYear, setSelectedYear }) => {
  let yearArr = findYearArray(parseInt(startYear), parseInt(endYear));

  return (
    <select
      name="year"
      id="2"
      value={selectedYear}
      onChange={(e) => setSelectedYear(e.target.value)}
	  className="year-select-box"
    >
      {yearArr.map((year) => {
        let days = 365;
        if (isLeapYear(year)) {
          days = 366;
        }

        return (
          <option key={year} value={year} days={days}>
            {year}
          </option>
        );
      })}
    </select>
  );
};

export default Year;
