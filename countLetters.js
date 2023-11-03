/**
 * @param {*} string sentence - Input sentence.
 * @output Object with letter frequencies.
 */

const countLetters = function(sentence) {
  if (sentence === '' || !sentence) {
    throw new Error('Please enter a valid string into argument');
  }
  const countObject = {};
  const sentenceWithoutSpace = sentence.replaceAll(' ', '');
  
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

module.exports = countLetters;