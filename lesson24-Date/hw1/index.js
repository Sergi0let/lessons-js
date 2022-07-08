const getDiff = (startDate, endDate) => {
  let mlSeconds = Math.abs(startDate - endDate) / 1000;

  const days = Math.floor(mlSeconds / 86400);
  mlSeconds -= days * 86400;

  const hours = Math.floor(mlSeconds / 3600) % 24;
  mlSeconds -= hours * 3600;

  const minutes = Math.floor(mlSeconds / 60) % 60;
  mlSeconds -= minutes * 60;

  const seconds = Math.floor(mlSeconds % 60);
  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

const dateOne = new Date(2020, 2, 1, 10, 10, 30);
const dateTwo = new Date(2020, 1, 1, 20, 0, 1);
console.log(getDiff(dateOne, dateTwo));
