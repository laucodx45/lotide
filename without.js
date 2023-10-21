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
 * 1. use a for loop to iterate source array
 * 2. Inside the loop, check if the element in source array includes element in itemsToRemove array
 * 3. .includes method
 * @output {Array} return array that does not contain source element
 */

const without = function(sourceArr, itemsToRemoveArr) {
  let result = [];
  // Use for loop
  for (let i = 0; i < sourceArr.length; i++) {
    if (!itemsToRemoveArr.includes(sourceArr[i])) {
      result.push(sourceArr[i]);
    }
  }
  return result;
};
// Test Case 1: Check if function correctly remove 1 from the array
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
//  Test Case 2: Check if function correctly remove 1 and 2 from the array
assertArraysEqual(without([1, 2, 3], [1, 2]), [3]);
//  Test Case 3: Check if function correctly remove "3" from the array
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

//Test case to test that the original array is not modified
const testWords = ["hello", "bye", "what"];
//words should not be modified
without(testWords, ["bye"]); 
//Check if the source array is still the same after passing it through the function
assertArraysEqual(testWords, ["hello", "bye", "what"]);