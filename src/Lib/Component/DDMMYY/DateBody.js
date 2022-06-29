import React, { useState } from "react";
import "./../Calender.css";
import { removeClassFromMultipleDiv } from "../Logic/removeClassFromMultipleDiv";
import { addClassToMultipleDivs } from "../Logic/addClassToMultipleDivs";

const DateBody = ({
  date,
  clas,
  selectedStartDate,
  setSelectedStartDate,
  selectedEndDate,
  setSelectedEndDate,
  selectedMonth,
  selectedYear,
  today,
}) => {
  let cl = `date ${clas}`;

  const [startPoint, setStartPoint] = useState("");
  const [endPoint, setEndPoint] = useState("");

  if (
    today.date == date &&
    today.month == selectedMonth &&
    today.year == selectedYear
  ) {
    cl += " today";
  }

  let da = new Date(`${selectedYear}-${selectedMonth}-${date}`);

  const handleClick = (e) => {
    let value = e.target.getAttribute("value");

    let d = new Date(value);

    if (selectedStartDate === "" && selectedEndDate === "") {
      setSelectedStartDate(d);
      setSelectedEndDate("");

      removeClassFromMultipleDiv("startdate");
      removeClassFromMultipleDiv("enddate");
      removeClassFromMultipleDiv("tobeselected");

      e.target.classList.add("startdate");

      setStartPoint(d);
      setEndPoint("");

      addClassToMultipleDivs("date", "tobeselected");
    } else if (selectedStartDate !== "" && selectedEndDate === "") {
      setSelectedEndDate(d);
      e.target.classList.add("enddate");
      setEndPoint(d);
    } else if (selectedStartDate !== "" && selectedEndDate !== "") {
      setSelectedStartDate(d);
      setSelectedEndDate("");
      removeClassFromMultipleDiv("startdate");
      removeClassFromMultipleDiv("enddate");

      setStartPoint(d);
      setEndPoint("");

      e.target.classList.add("startdate");
    }
  };

  return (
    <div onClick={(e) => handleClick(e)} value={da} key={da} className={cl}>
      {date}
    </div>
  );
};

export default DateBody;
