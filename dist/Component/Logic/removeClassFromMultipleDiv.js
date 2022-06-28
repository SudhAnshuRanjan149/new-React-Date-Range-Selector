"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeClassFromMultipleDiv = void 0;

const removeClassFromMultipleDiv = clas => {
  const boxes = Array.from(document.getElementsByClassName(clas));
  boxes.forEach(box => {
    box.classList.remove(clas);
  });
};

exports.removeClassFromMultipleDiv = removeClassFromMultipleDiv;