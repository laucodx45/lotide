const head = (array) => {
  if (!Array.isArray(array)) {
    console.log('Input is not an array');
    return;
  }
  return array[0];
};

module.exports = head;