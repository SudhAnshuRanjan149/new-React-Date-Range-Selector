"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("../Calender.css");

var _dataList = require("../Data/dataList");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Month = _ref => {
  let {
    selectedMonth,
    setSelectedMonth
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("select", {
    name: "month",
    id: "1",
    value: selectedMonth,
    onChange: e => setSelectedMonth(e.target.value)
  }, _dataList.monthdaycombinations.map(month => {
    return /*#__PURE__*/_react.default.createElement("option", {
      key: month.monthid,
      value: month.monthid,
      days: month.monthdays
    }, month.monthName);
  })));
};

var _default = Month;
exports.default = _default;