"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findDateArray = void 0;

var _findLeapYear = require("./findLeapYear");

var _dataList = require("../Data/dataList");

var _fillArray = require("./fillArray");

const findDateArray = (year, selectedMonth) => {
  let isLeap = (0, _findLeapYear.isLeapYear)(year);
  let dateArray = [];

  let moni = _dataList.monthdaycombinations.filter(mont => mont.monthid == selectedMonth);

  let monis = moni[0];
  const d = "".concat(monis.monthName, " 1, ").concat(year);
  const dayOneOfMonth = new Date(d);
  const day1 = dayOneOfMonth.getDay();
  dateArray.push({
    dates: [],
    month: monis.monthid,
    year: year,
    startDay: day1 == 0 ? 7 : day1
  });

  if (selectedMonth == 2 && isLeap) {
    dateArray[dateArray.length - 1].dates = (0, _fillArray.fillArray)(1, monis.leapYear);
  } else if (selectedMonth == 2) {
    dateArray[dateArray.length - 1].dates = (0, _fillArray.fillArray)(1, monis.monthdays);
  } else {
    dateArray[dateArray.length - 1].dates = (0, _fillArray.fillArray)(1, monis.monthdays);
  }

  return dateArray;
};

exports.findDateArray = findDateArray;