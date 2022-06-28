"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fillArray = void 0;

const fillArray = (start, end) => {
  let arr = [];

  for (let i = start; i <= end; i++) {
    arr.push(i);
  }

  return arr;
};

exports.fillArray = fillArray;