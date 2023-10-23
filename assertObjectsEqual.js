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

const eqObjects = function(object1, object2) {
  // Keys of the object in arguments in array
  const keyOfObj1 = Object.keys(object1);
  const keyOfObj2 = Object.keys(object2);

  if (keyOfObj1.length !== keyOfObj2.length) {
    return false;
  }

  for (const key of keyOfObj1) {
    // Check if the value is an array
    if (Array.isArray(object1[key])) {
      // if the value array is not equal, return false
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      } // if the value of the key in obj1 is not equal to obj2 return false
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

/**
 * This function will take in two objects and console.log an appropriate message to the console
 * @param {*} actual
 * @param {*} expected
 */

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)}`);
  } else {console.log(`🛑🛑🛑 Assertion Failed: ${inspect(expected)}`);
  }
};

const testObj1 = { a: 1, b: 2, c: 4};
const testObj2 = { a: 1, b: 2, c: 4};
const testObj3 = { a: 1, b: 3, c: 4};

// Test Case 1: testObj1 and testObj2 have the same value with keys, should pass assertion test
assertObjectsEqual(testObj1, testObj2);
// Test Case 2: testObj1 and testObj2 have different value with keys, should fail assertion test
assertObjectsEqual(testObj1, testObj3);

