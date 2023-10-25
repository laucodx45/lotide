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

/**
 * This function will return a
 * "slice of the array with elements taken from the beginning."
 * \It should keep going until the callback/predicate returns a truthy value
 * @param {*} array
 * @param {*} callback
 * process
 * iterate array
 * @output returns copy of the array that is sliced untill the callback return a truthy value
 */
const takeUntil = function(array, callback) {
  // ...
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return array.slice([0], [i]);
    }
  }
};

// Expected input:
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

// Test Case 1: function should correctly return the array up untill element < 0
assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);
// Test Case 2: function should correctly return the array up untill the element ","
assertArraysEqual(takeUntil(data2, x => x === ','), ["I've", "been", "to", "Hollywood"]);