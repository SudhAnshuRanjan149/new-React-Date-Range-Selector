export const getShortDate = (date) => {
  if (date !== "") {
    var d = new Date(date);
    const month = d.toLocaleString("default", { month: "short" });

    d = parseInt(d.getDate()) + " " + month + " " + parseInt(d.getFullYear());

    return d;
  }

  return "";
};
