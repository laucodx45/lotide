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

const letterPositions = function(sentence) {
  const results = {};
  const sentenceWithoutSpace = sentence.replaceAll(' ', '');
  // logic to update results here
  for (let i = 0; i < sentenceWithoutSpace.length; i++) {
  
    const letter = sentenceWithoutSpace[i];

    if (!results[letter]) {
      // If letter is not in the result property, assign that letter index in an array
      results[letter] = [i];
    } else {
      // If letter is already in the result property, push and index to the pre-exist array
      results[letter].push(i);
    }
  }
  return results;
};

// Test Case 1: object property of "l" should have a value of [2, 3] indicating their position in the sentence
assertArraysEqual(letterPositions("hello")["l"], [2, 3]);
// Test Case 2: object property of "h" should have a value of [0]
assertArraysEqual(letterPositions("hello")["h"], [0]);
// Test Case 3; object property of "h" should have a value of [5], blank-space should not be counted
assertArraysEqual(letterPositions("hello world")["w"], [5]);