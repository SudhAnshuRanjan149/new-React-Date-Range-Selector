"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.parse-int.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.regexp.to-string.js");

var _react = _interopRequireWildcard(require("react"));

var _Year = _interopRequireDefault(require("./DDMMYY/Year"));

var _Month = _interopRequireDefault(require("./DDMMYY/Month"));

var _Day = _interopRequireDefault(require("./DDMMYY/Day"));

var _dataList = require("./Data/dataList");

var _findDateArray = require("./Logic/findDateArray");

var _getShortDate = require("./Logic/getShortDate");

var _swapNumber = require("./Logic/swapNumber");

var _CreateADivOfMonths = _interopRequireDefault(require("./Logic/CreateADivOfMonths"));

var _calIcon = require("./SVG/cal-icon.svg");

require("./Calender.css");

require("./CSS/variables.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// GLOBAL
// LOCAL
// CSS
const Calender = _ref => {
  let {
    sd,
    ed,
    startYear,
    endYear,
    styleBigContainer
  } = _ref;
  var today = new Date();
  today = {
    date: parseInt(today.getDate()),
    month: parseInt(today.getMonth() + 1),
    year: parseInt(today.getFullYear())
  };

  if (!startYear) {
    startYear = parseInt(today.year) - 25;
  }

  if (!endYear) {
    endYear = parseInt(today.year) + 25;
  }

  if (startYear > endYear) {
    let ans = (0, _swapNumber.swapNumber)(startYear, endYear);
    startYear = ans[0];
    endYear = ans[1];
  }

  let k = 0;
  const [show, setShow] = (0, _react.useState)(false);
  const [selectedStartDate, setSelectedStartDate] = (0, _react.useState)("");
  const [selectedEndDate, setSelectedEndDate] = (0, _react.useState)("");
  const [startdate, setStartdate] = (0, _react.useState)("");
  const [enddate, setEnddate] = (0, _react.useState)("");
  const [selectedMonth, setSelectedMonth] = (0, _react.useState)(today.month);
  const [selectedYear, setSelectedYear] = (0, _react.useState)(today.year);
  const [dateArray, setDateArray] = (0, _react.useState)([]);

  const nextYear = () => {
    if (selectedYear == endYear) return;
    setSelectedYear(parseInt(selectedYear) + 1);
  };

  const nextMonth = () => {
    if (selectedMonth == 12) {
      if (selectedYear == endYear) return;
      setSelectedMonth(1);
      setSelectedYear(parseInt(selectedYear) + 1);
    } else {
      setSelectedMonth(parseInt(selectedMonth) + 1);
    }
  };

  const prevYear = () => {
    if (selectedYear == startYear) return;
    setSelectedYear(parseInt(selectedYear) - 1);
  };

  const prevMonth = () => {
    if (selectedMonth == 1) {
      if (selectedYear == startYear) return;
      setSelectedMonth(12);
      setSelectedYear(parseInt(selectedYear) - 1);
    } else {
      setSelectedMonth(parseInt(selectedMonth) - 1);
    }
  };

  (0, _react.useEffect)(() => {
    let darr = (0, _findDateArray.findDateArray)(selectedYear, selectedMonth);
    setDateArray(darr);
  }, [selectedMonth, selectedYear]);
  (0, _react.useEffect)(() => {
    let darr = (0, _findDateArray.findDateArray)(selectedYear, selectedMonth);
    setDateArray(darr);
  }, []);
  (0, _react.useEffect)(() => {
    let d = (0, _getShortDate.getShortDate)(selectedStartDate);
    setStartdate(d.toString());
    sd(d.toString());
  }, [selectedStartDate]);
  (0, _react.useEffect)(() => {
    let d = (0, _getShortDate.getShortDate)(selectedEndDate);
    setEnddate(d.toString());
    ed(d.toString());
  }, [selectedEndDate]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "calender"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_calIcon.ReactComponent, {
    onClick: () => setShow(!show),
    className: "my-icon"
  })), /*#__PURE__*/_react.default.createElement("div", {
    style: show ? {
      display: "block"
    } : {
      display: "none"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "calender-container",
    style: styleBigContainer
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "calender-header"
  }, "calender"), /*#__PURE__*/_react.default.createElement("div", {
    className: "calender-date-box"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "calender-show-date start"
  }, startdate != "" ? startdate : "Start Date"), /*#__PURE__*/_react.default.createElement("div", {
    className: "calender-show-date end"
  }, enddate != "" ? enddate : "End date")), /*#__PURE__*/_react.default.createElement("div", {
    className: "calender-year-month-container"
  }, /*#__PURE__*/_react.default.createElement("a", {
    onClick: prevYear,
    className: "arrow-btn"
  }, "\u276E"), /*#__PURE__*/_react.default.createElement("div", {
    onClick: prevMonth,
    className: "arrow-btn"
  }, "<"), /*#__PURE__*/_react.default.createElement(_Month.default, {
    selectedMonth: selectedMonth,
    setSelectedMonth: setSelectedMonth
  }), /*#__PURE__*/_react.default.createElement(_Year.default, {
    startYear: startYear,
    endYear: endYear,
    selectedYear: selectedYear,
    setSelectedYear: setSelectedYear
  }), /*#__PURE__*/_react.default.createElement("div", {
    onClick: nextMonth,
    className: "arrow-btn"
  }, ">"), /*#__PURE__*/_react.default.createElement("a", {
    onClick: nextYear,
    className: "arrow-btn"
  }, "\u276F")), /*#__PURE__*/_react.default.createElement("div", {
    className: "calender-days-container"
  }, _dataList.dayList.map(day => {
    return /*#__PURE__*/_react.default.createElement(_Day.default, {
      key: day,
      day: day
    });
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "calender-dates-container",
    key: ++k
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "dates-container",
    key: ++k
  }, dateArray.map(month => {
    if (dateArray[0].month == selectedMonth) {
      let emparr = [];

      for (let i = 1; i < month.startDay; i++) {
        emparr.push("");
      }

      return /*#__PURE__*/_react.default.createElement(_CreateADivOfMonths.default, {
        selectedStartDate: selectedStartDate,
        setSelectedStartDate: setSelectedStartDate,
        selectedEndDate: selectedEndDate,
        setSelectedEndDate: setSelectedEndDate,
        selectedMonth: selectedMonth,
        selectedYear: selectedYear,
        today: today,
        monthid: month.month,
        arr: month.dates,
        emparr: emparr
      });
    }
  })))))));
};

var _default = Calender;
exports.default = _default;