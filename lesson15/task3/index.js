'use strict';

/**
 * @return {object}
 */

/*! const createLogger = () => {
  let arr = [];

  function warn(str) {
    let objMethods = {};

    objMethods.message = str;
    objMethods.type = 'warn';
    objMethods.dataTime = new Date();
    arr.push(objMethods);
  }

  function error(str) {
    let objMethods = {};

    objMethods.message = str;
    objMethods.type = 'error';
    objMethods.dataTime = new Date();
    arr.push(objMethods);
  }

  function log(str) {
    let objMethods = {};

    objMethods.message = str;
    objMethods.type = 'log';
    objMethods.dataTime = new Date();
    arr.push(objMethods);
  }

  function getRecords(nameComand) {
    if (!nameComand) return arr;
    if (nameComand === 'log') {
      return arr.filter((elem) => elem.type === 'log');
    }
    if (nameComand === 'error') {
      return arr.filter((elem) => elem.type === 'error');
    }
    if (nameComand === 'warn') {
      return arr.filter((elem) => elem.type === 'warn');
    }
  }
  return {
    warn,
    error,
    log,
    getRecords,
  };
};
*/
// [{ message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]

const createLogger = () => {
  let arr = [];

  function warn(str) {
    let objMethods = {};
    objMethods.message = str;
    objMethods.type = 'warn';
    objMethods.dataTime = new Date();
    arr.push(objMethods);
  }

  function error(str) {
    cost objMethods = {};
    objMethods.message = str;
    objMethods.type = 'error';
    objMethods.dataTime = new Date();
    arr.push(objMethods);
  }

  function log(str) {
    let objMethods = {};
    objMethods.message = str;
    objMethods.type = 'log';
    objMethods.dataTime = new Date();
    arr.push(objMethods);
  }

  function getRecords(nameComand) {
    if (!nameComand) return arr;
    if (nameComand === 'log') {
      return arr
        .slice()
        .filter((elem) => elem.type === 'log')
        .sort((a, b) => b.dataTime - a.dataTime);
    }
    if (nameComand === 'error') {
      return arr
        .slice()
        .filter((elem) => elem.type === 'error')
        .sort((a, b) => b.dataTime - a.dataTime);
    }
    if (nameComand === 'warn') {
      return arr
        .slice()
        .filter((elem) => elem.type === 'warn')
        .sort((a, b) => b.dataTime - a.dataTime);
    }
  }
  return {
    warn,
    error,
    log,
    getRecords,
  };
};

// examples
const logger1 = createLogger();
logger1.log('User logged in');
logger1.warn('User is tring to ented restricted page');
logger1.log('User logged out');
logger1.error('Unexpected error on the site');
console.log('=====================logger1');
console.log(logger1.getRecords()); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }, { message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
console.log(logger1.getRecords('log')); // ===> [{ message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
console.log(logger1.getRecords('error')); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }]
console.log(logger1.getRecords('warn')); // ===> [{ message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }]

console.log('=====================logger2');
const logger2 = createLogger();
logger2.warn('Opps, something is happenning');
console.log(logger2.getRecords('error')); // ===> []
console.log(logger2.getRecords('warn')); // ===> [{ message: 'Opps, something is happenning', type: 'warn', dateTime: Date }]
console.log(logger2.getRecords()); // ===> [{ message: 'Opps, something is happenning', type: 'warn', dateTime: Date }]

console.log('===================== logger3');
const logger3 = createLogger();
console.log(logger3.getRecords('error')); // ===> []
console.log(logger3.getRecords()); // ===> []
