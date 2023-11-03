/**
 * head takes in an array and returns the first element in the array.
 * @param {array} array
 * @returns first element in the array.
 */
const head = (array) => {
  if (!Array.isArray(array)) {
    console.log('Input is not an array');
    return;
  }
  return array[0];
};

module.exports = head;