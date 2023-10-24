const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];

// The map function will return a new array based on the results of the callback function
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, (word) => word[0]);
const results2 = map(words, (word) => word.slice(1));
const results3 = map(words, (word) => word.length);
console.log(results1);

// Test Case 1: function should return the first letter of each word in array
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
// Test Case 2: function should return the the word expect first letter
assertArraysEqual((results2), ["round", "ontrol", "o", "ajor", "om"]);
// Test Case 3: function should return the length of each word in words
assertArraysEqual((results3), [6, 7, 2, 5, 3]);
