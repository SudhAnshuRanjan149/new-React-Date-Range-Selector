// GLOBAL
import React, { useState, useEffect, useRef } from "react";

// LOCAL
import Year from "./DDMMYY/Year";
import Month from "./DDMMYY/Month";
import Day from "./DDMMYY/Day";
import { dayList } from "./Data/dataList";
import { findDateArray } from "./Logic/findDateArray";
import { getShortDate } from "./Logic/getShortDate";
import { swapNumber } from "./Logic/swapNumber";
import CreateADivOfMonths from "./Logic/CreateADivOfMonths";
import { ReactComponent as MyIcon } from "./SVG/cal-icon.svg";

// CSS
import "./Calender.css";
import "./CSS/variables.css";

const Calender = ({ sd, ed, startYear, endYear, styleBigContainer }) => {
  var today = new Date();

  today = {
    date: parseInt(today.getDate()),
    month: parseInt(today.getMonth() + 1),
    year: parseInt(today.getFullYear()),
  };

  if (!startYear) {
    startYear = parseInt(today.year) - 25;
  }

  if (!endYear) {
    endYear = parseInt(today.year) + 25;
  }

  if (startYear > endYear) {
    let ans = swapNumber(startYear, endYear);
    startYear = ans[0];
    endYear = ans[1];
  }

  const Elem = [];

  let k = 0;

  for (let i = 1; i <= (endYear - startYear) * 12 + 12; i++) {
    Elem.push("Elem-" + i);
  }

  const [show, setShow] = useState(false);

  const [selectedStartDate, setSelectedStartDate] = useState("");
  const [selectedEndDate, setSelectedEndDate] = useState("");

  const [startdate, setStartdate] = useState("");
  const [enddate, setEnddate] = useState("");

  const [selectedMonth, setSelectedMonth] = useState(today.month);
  const [selectedYear, setSelectedYear] = useState(today.year);
  const [dateArray, setDateArray] = useState([]);

  const nextYear = () => {
    if (selectedYear == endYear) return;
    setSelectedYear(parseInt(selectedYear) + 1);
  };
  const nextMonth = () => {
    if (selectedMonth == 12) {
      if (selectedYear == endYear) return;
      setSelectedMonth(1);
      setSelectedYear(parseInt(selectedYear) + 1);
    } else {
      setSelectedMonth(parseInt(selectedMonth) + 1);
    }
  };
  const prevYear = () => {
    if (selectedYear == startYear) return;
    setSelectedYear(parseInt(selectedYear) - 1);
  };
  const prevMonth = () => {
    if (selectedMonth == 1) {
      if (selectedYear == startYear) return;
      setSelectedMonth(12);
      setSelectedYear(parseInt(selectedYear) - 1);
    } else {
      setSelectedMonth(parseInt(selectedMonth) - 1);
    }
  };

  useEffect(() => {
    let darr = findDateArray(selectedYear, selectedMonth);
    setDateArray(darr);
  }, [selectedMonth, selectedYear]);

  useEffect(() => {
    let darr = findDateArray(selectedYear, selectedMonth);

    setDateArray(darr);
  }, []);

  useEffect(() => {
    let d = getShortDate(selectedStartDate);

    setStartdate(d.toString());

    sd(d.toString());
  }, [selectedStartDate]);

  useEffect(() => {
    let d = getShortDate(selectedEndDate);

    setEnddate(d.toString());
    ed(d.toString());
  }, [selectedEndDate]);

  return (
    <>
      <div className="calender">
        <div>
          <MyIcon onClick={() => setShow(!show)} className="my-icon" />
        </div>

        <div style={show ? { display: "block" } : { display: "none" }}>
          <div className="calender-container" style={styleBigContainer}>
            <div className="calender-header">calender</div>
            <div className="calender-date-box">
              <div className="calender-show-date start">
                {startdate != "" ? startdate : "Start Date"}
              </div>
              <div className="calender-show-date end">
                {enddate != "" ? enddate : "End date"}
              </div>
            </div>
            <div className="calender-year-month-container">
              <a onClick={prevYear} className="arrow-btn">
                &#10094;
              </a>
              <div onClick={prevMonth} className="arrow-btn">
                &#x3c;
              </div>

              <Month
                selectedMonth={selectedMonth}
                setSelectedMonth={setSelectedMonth}
              />
              <Year
                startYear={startYear}
                endYear={endYear}
                selectedYear={selectedYear}
                setSelectedYear={setSelectedYear}
              />
              <div onClick={nextMonth} className="arrow-btn">
                &#x3e;
              </div>
              <a onClick={nextYear} className="arrow-btn">
                &#10095;
              </a>
            </div>
            <div className="calender-days-container">
              {dayList.map((day) => {
                return <Day key={day} day={day} />;
              })}
            </div>
            <div className="calender-dates-container" key={++k}>
              <div className="dates-container" key={++k}>
                {dateArray.map((month) => {
                  if (dateArray[0].month == selectedMonth) {
                    let emparr = [];
                    for (let i = 1; i < month.startDay; i++) {
                      emparr.push("");
                    }

                    return (
                      <CreateADivOfMonths
                        selectedStartDate={selectedStartDate}
                        setSelectedStartDate={setSelectedStartDate}
                        selectedEndDate={selectedEndDate}
                        setSelectedEndDate={setSelectedEndDate}
                        selectedMonth={selectedMonth}
                        selectedYear={selectedYear}
                        today={today}
                        monthid={month.month}
                        arr={month.dates}
                        emparr={emparr}
                      />
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calender;
