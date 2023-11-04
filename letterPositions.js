/**
 * letterPositions takes in a string and returns all indices of letter positions in the string.
 * @param {string} sentence
 * @returns an object containing all indices of letter positions in the string.
 */
const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
  
    const letter = sentence[i];

    // if there's no blank space then
    if (letter !== ' ') {
      if (!results[letter]) {
        // If letter is not in the result property, assign that letter index in an array
        results[letter] = [i];
      } else {
        // If letter is already in the result property, push and index to the pre-exist array
        results[letter].push(i);
      }
    }
  }
  return results;
};

module.exports = letterPositions;