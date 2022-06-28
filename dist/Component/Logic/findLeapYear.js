"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isLeapYear = void 0;

const isLeapYear = year => {
  if (year % 100 === 0) {
    if (year % 400 == 0) {
      return true;
    } else {
      return false;
    }
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
};

exports.isLeapYear = isLeapYear;