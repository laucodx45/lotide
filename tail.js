const tail = function(array) {
  if (!Array.isArray(array)) {
    console.log('Input is not an array');
    return;
  }
  return array.slice(1);
};

module.exports = tail;