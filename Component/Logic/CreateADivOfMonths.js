import React from "react";
import Date from "../DDMMYY/Date";
import "./../Calender.css";
import { fillArray } from "./fillArray";
import { monthdaycombinations } from "../Data/dataList";
import { isLeapYear } from "./findLeapYear";

const CreateADivOfMonths = ({
  arr,
  emparr,
  monthid,
  selectedStartDate,
  setSelectedStartDate,
  selectedEndDate,
  setSelectedEndDate,
  selectedMonth,
  selectedYear,
  today,
}) => {
  // POST
  let l = (arr.length + emparr.length) % 7;
  let len = 0;
  if (l > 0) {
    len = 7 - l;
  }
  let post = fillArray(1, len);

  // PRE
  let monthdata = monthdaycombinations.filter((data) => {
    if (monthid == 1) {
      return data.monthid == 12;
    }
    return data.monthid == parseInt(monthid) - 1;
  });

  let premonthdays = monthdata[0].monthdays;
  if (monthdata[0].monthid == 2 && isLeapYear(selectedYear)) {
    premonthdays = 29;
  }

  let pre = [];
  for (let s of emparr) {
    pre.unshift(premonthdays);
    premonthdays--;
  }

  //   PRE year data
  let preyear = selectedYear;
  if (monthdata[0].monthid == 12) {
    preyear--;
  }

  //   POST YEAR and Month data
  let postyear = parseInt(selectedYear);
  let postmonth = parseInt(selectedMonth) + 1;
  if (selectedMonth == 12) {
    postyear++;
    postmonth = 1;
  }

  return (
    <>
      <div className="month-div" key={monthid}>
        {pre.map((d) => {
          return (
            <Date
              selectedStartDate={selectedStartDate}
              setSelectedStartDate={setSelectedStartDate}
              selectedEndDate={selectedEndDate}
              setSelectedEndDate={setSelectedEndDate}
              selectedMonth={monthdata[0].monthid}
              selectedYear={preyear}
              today={today}
              clas="pre inactive"
              key={d}
              date={d}
            />
          );
        })}
        {arr.map((d) => {
          return (
            <Date
              selectedStartDate={selectedStartDate}
              setSelectedStartDate={setSelectedStartDate}
              selectedEndDate={selectedEndDate}
              setSelectedEndDate={setSelectedEndDate}
              selectedMonth={selectedMonth}
              selectedYear={selectedYear}
              today={today}
              clas="active"
              key={d}
              date={d}
            />
          );
        })}
        {post.map((d, i) => {
          return (
            <Date
              selectedStartDate={selectedStartDate}
              setSelectedStartDate={setSelectedStartDate}
              selectedEndDate={selectedEndDate}
              setSelectedEndDate={setSelectedEndDate}
              selectedMonth={postmonth}
              selectedYear={postyear}
              today={today}
              clas="post inactive"
              key={i}
              date={d}
            />
          );
        })}
      </div>
    </>
  );
};

export default CreateADivOfMonths;
