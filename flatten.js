const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};

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

/* Create a function flatten which will take in an array containing elements
including nested arrays of elements, and return a "flattened" version of the array
*/

/**
 * Input @param {Array}
 * process
 * 1. create a for loop
 * 2. check if element is an array using Array.isArray()
 * 3. if element is an array, then use concat method to combine the array element into resultArr
 * Output Array that is flattened, eleminate sub arrays
 */

const flatten = function(array) {
  // Placeholder, Result Arr stores flatten array
  let resultArr = [];

  // For loop to iterate the array
  for (let i = 0; i < array.length; i++) {

    // If the element in the array is not an array then push the element into resultArr
    if (!Array.isArray(array[i])) {
      resultArr.push(array[i]);
    }
    
    // Else, the element is an array, combine the array with resultArr
    else {
      resultArr = resultArr.concat(array[i]);
    }
  }
  return resultArr;
};

// Test case 1: function should remove the array element at index 2
assertArraysEqual(flatten([1, 2, [3, 4], 5]), [1, 2, 3, 4, 5]); // => [1, 2, 3, 4, 5]
// Test case 2: Input and output should be the same since there are no array inside any elements
assertArraysEqual(flatten([1, 2, 3, 4]), [1, 2, 3, 4]); // => [1,2,3,4]
// Test case 3: function should remove the array element at index 1 and return "2", "3" as index 1 and index 2
assertArraysEqual(flatten([1, ["2", "3"], 4]), [1, "2", "3", 4]);

let testArray = [1, 2, [3, 4], 5];
flatten(testArray);
// Check whether flatten function modify the original array argument
console.log(testArray);