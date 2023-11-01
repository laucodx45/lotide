//Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console
/**
 * input @parram1 {Array} @param2 {Array}
 * output console.log appropriate message
 */
const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};

module.exports = assertArraysEqual;