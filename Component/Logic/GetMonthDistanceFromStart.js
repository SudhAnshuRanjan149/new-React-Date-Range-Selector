export const GetMonthDistanceFromStart = (
  startYear,
  currentYear,
  currentMonth
) => {
  return (
    (parseInt(currentYear) - parseInt(startYear)) * 12 + parseInt(currentMonth)
  );
};
