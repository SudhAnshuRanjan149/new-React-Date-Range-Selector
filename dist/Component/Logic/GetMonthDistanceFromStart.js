"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetMonthDistanceFromStart = void 0;

require("core-js/modules/es.parse-int.js");

const GetMonthDistanceFromStart = (startYear, currentYear, currentMonth) => {
  return (parseInt(currentYear) - parseInt(startYear)) * 12 + parseInt(currentMonth);
};

exports.GetMonthDistanceFromStart = GetMonthDistanceFromStart;