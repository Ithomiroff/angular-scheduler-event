export const getMonthDays = (monthIndex: number = 0): Date[] => {
  const year = 2020;
  const date = new Date(year, monthIndex, 1);
  const days = [];

  while (date.getMonth() === monthIndex) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }

  let before;
  let after;
  if (days[0].getDay() >= 1) {
    before = days[0].getDay() - 1;
  } else {
    before = 6;
  }
  if (days[days.length - 1].getDay() > 1) {
    after = 7 - days[days.length - 1].getDay();
  } else {
    after = 6;
  }

  const calendar = [];
  const additionalDays = before + days.length + after;
  for (let i = 0; i < additionalDays; i++) {
    const day = new Date(year, monthIndex, 1 + (i - before));
    calendar.push(day);
  }
  return calendar;
};
