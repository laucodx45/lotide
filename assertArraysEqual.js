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

//Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console
/**
 * input @parram1 {Array} @param2 {Array}
 * output console.log appropriate message
 */

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};

assertArraysEqual([1,2,3], [1,2,3]); // should pass
assertArraysEqual([1,2,3], [1,2]); // should fail
