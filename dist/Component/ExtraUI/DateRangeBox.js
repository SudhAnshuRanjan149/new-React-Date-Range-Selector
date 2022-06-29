"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./../Calender.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DateRangeBox = _ref => {
  let {
    startdate,
    enddate,
    onClick,
    style
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    style: style,
    onClick: onClick,
    className: "date-range-box"
  }, "".concat(startdate, " - ").concat(enddate)));
};

var _default = DateRangeBox;
exports.default = _default;