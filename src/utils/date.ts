function startOfWeek() {
  const dt = new Date();
  let diff = dt.getDate() - dt.getDay() + (dt.getDay() === 0 ? -6 : 1);
  const res = new Date(dt.setDate(diff));
  return dateToString(res);
}
function endOfWeek() {
  const dt = new Date();
  let diff = dt.getDate() - dt.getDay() + (dt.getDay() === 0 ? -6 : 1);
  const res = new Date(dt.setDate(diff + 6));
  return dateToString(res);
}

function dateToString(date: Date) {
  return `${date.getFullYear()}-${
    date.getMonth().toLocaleString().length === 1
      ? "0" + (date.getMonth() + 1)
      : date.getMonth()
  }-${
    date.getDate().toLocaleString().length === 1
      ? "0" + date.getDate()
      : date.getDate()
  }`;
}

function getDays(from: string, to: string) {
  const result: string[] = []
  const startDate = new Date(from);
  const finishDate =
    new Date(to).getTime() > new Date().getTime() ? new Date() : new Date(to);

    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const diffFullVacation =
    Math.round(
      Math.abs((finishDate.getTime() - startDate.getTime()) / oneDay)
    ) + 1;

  for (let index = 0; index < diffFullVacation; index++) {
    result.push(dateToString(new Date(startDate.getTime() + oneDay * index)))
  }
  return result
}

export {
  startOfWeek,
  endOfWeek,
  dateToString,
  getDays,
};
