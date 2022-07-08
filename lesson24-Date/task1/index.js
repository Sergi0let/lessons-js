const weekDay = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St'];

export const dayOfWeek = (date, days) => {
  const day = new Date(date).getDate();
  const dateInFuture = new Date(date).setDate(day + days);
  console.log(day, dateInFuture);
  return weekDay[new Date(dateInFuture).getDay()];
};

// test-data
const result = dayOfWeek(new Date(2022, 7, 7), 3);
console.log(result);
