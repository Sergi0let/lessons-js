export const getDiff = (startDate, endDate) => {
  let mlSeconds = (endDate - startDate) / 1000;

  const days = Math.floor(mlSeconds / 86400);
  mlSeconds -= days * 86400;

  const hours = Math.floor(mlSeconds / 3600) % 24;
  mlSeconds -= hours * 3600;

  const minutes = Math.floor(mlSeconds / 60) % 60;
  mlSeconds -= minutes * 60;

  const seconds = mlSeconds % 60;
  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

// const dateOne = new Date(2022, 6, 1, 0, 1, 0);
// const dateTwo = new Date(2022, 7, 7, 59, 59, 59);
// console.log(getDiff(dateOne, dateTwo));
