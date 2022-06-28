"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("../Calender.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Day = _ref => {
  let {
    day
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("span", {
    className: "day"
  }, day);
};

var _default = Day;
exports.default = _default;