/**
 * tail takes in an array and returns everything except the first element of the array.
 * @param {array} array
 * @returns everything except the first element of the array.
 */
const tail = function(array) {
  if (!Array.isArray(array)) {
    console.log('Input is not an array');
    return;
  }
  return array.slice(1);
};

module.exports = tail;