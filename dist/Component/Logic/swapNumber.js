"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.swapNumber = void 0;

const swapNumber = (a, b) => {
  let temp = a;
  a = b;
  b = temp;
  return [a, b];
};

exports.swapNumber = swapNumber;