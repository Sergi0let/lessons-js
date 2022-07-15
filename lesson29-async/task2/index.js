/*
const pinger = (num, period) => {
  const interval = setInterval(() => {
    console.log('ping');
  }, period);

  setTimeout(() => {
    clearInterval(interval);
  }, num * period);
};

pinger(5, 1000);
*/

/*
const pinger2 = (num, period) => {
  console.log('ping');
  let flag = num;

  let interval = setInterval(() => {
    if (--flag > 0) {
      console.log('ping');
    } else {
      clearInterval(interval);
    }
  }, period);
};
pinger2(5, 1000);
*/
