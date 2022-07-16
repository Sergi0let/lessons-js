// in: number;
// out: undefinid
const delay = ms =>
  new Promise(resorve => {
    setTimeout(() => resorve(), ms);
  });

delay(3000).then(() => console.log('Done'));
