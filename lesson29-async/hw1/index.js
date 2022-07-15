// in: number, func, context, ...args
// func
// log
//
const delay = (delay, callback, context, ...args) => {
  return setTimeout(() => {
    callback.call(context, args);
  }, delay);
};

function func(num) {
  console.log(num);
}
