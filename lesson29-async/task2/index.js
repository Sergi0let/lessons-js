// pinger(num, period)

const pinger = (num, period) => {
  console.log('Ping');
  let count = num;
  const interval = setInterval(() => {
    if (--count > 0) {
      console.log('Ping');
    } else {
      clearInterval(interval);
    }
  }, period);

  // setTimeout(() => {
  //   clearInterval(interval);
  // }, num * period);
};

pinger(5, 1000);
