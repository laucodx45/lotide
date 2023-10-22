const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

/**
 * @param {*} string
 * process
 * split sentence
 * create a for of loop to iterate the setence
 * if letter is a property in countObject
 * @output an object containing letter as property and value representing the letter count 
 */

const countLetters = function(sentence) {
  const countObject = {};
  // Use .replaceAll method to remove all white space in sentence
  const sentenceWithoutSpace = sentence.replaceAll(' ', '');

  //for loop to iterate the sentence string
  for (const letter of sentenceWithoutSpace) {

    // if countObject[letter] is not undefined, have a truthy value, then add 1 count to the value
    if (countObject[letter]) {
      countObject[letter] += 1;
      
      //else set the letter as a property and assign 1 count to the value
    } else {
      countObject[letter] = 1;
    }
  }
  return countObject;
};

// Test Case 1: 
assertEqual(countLetters("lighthouse in the house"), { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 });
