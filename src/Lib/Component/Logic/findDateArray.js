import { isLeapYear } from "./findLeapYear";
import { monthdaycombinations } from "../Data/dataList";
import { fillArray } from "./fillArray";

export const findDateArray = (year, selectedMonth) => {
  let isLeap = isLeapYear(year);
  let dateArray = [];

  let moni = monthdaycombinations.filter(
    (mont) => mont.monthid == selectedMonth
  );
  let monis = moni[0];

  const d = `${monis.monthName} 1, ${year}`;

  const dayOneOfMonth = new Date(d);
  const day1 = dayOneOfMonth.getDay();

  dateArray.push({
    dates: [],
    month: monis.monthid,
    year: year,
    startDay: day1 == 0 ? 7 : day1,
  });

  if (selectedMonth == 2 && isLeap) {
    dateArray[dateArray.length - 1].dates = fillArray(1, monis.leapYear);
  } else if (selectedMonth == 2) {
    dateArray[dateArray.length - 1].dates = fillArray(1, monis.monthdays);
  } else {
    dateArray[dateArray.length - 1].dates = fillArray(1, monis.monthdays);
  }

  return dateArray;
};
