const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};

const eqArrays = function(array1, array2) {

  //Do they have the same length? If they don't return false
  if (array1.length !== array2.length) {
    return false;
  }
  
  //compare array1 to array 2 using a loop

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

/**
 * @param {Array source} @param2 {sub array} element to remove
 * process
 * 1. use a filter method to remove source
 * @output {Array} return array that does not contain source element
 */

const without = function(sourceArr, itemsToRemoveArr) {
  // Use filter method
  return sourceArr.filter((element) => {
    return !itemsToRemoveArr.includes(element);
  });
};

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without([1, 2, 3], [1, 2]), [3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

//test case to test that the original array is not modified
const testWords = ["hello", "bye", "what"];
without(testWords, ["bye"]); //words should not be modified
assertArraysEqual(testWords, ["hello", "bye", "what"]);