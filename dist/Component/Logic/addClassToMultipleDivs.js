"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addClassToMultipleDivs = void 0;

const addClassToMultipleDivs = (selectClas, addClas) => {
  const boxes = Array.from(document.getElementsByClassName(selectClas));
  boxes.forEach(box => {
    // ✅ Add class to each element
    box.classList.add(addClas);
  });
};

exports.addClassToMultipleDivs = addClassToMultipleDivs;