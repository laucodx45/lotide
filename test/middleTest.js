const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {

  it("returns [] for []", () => {
    assert.deepEqual(middle([]), []);
  });

  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("returns [] when the input array has two elements, since there is no middle index", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("returns [] for '' which is not an array", () => {
    assert.deepEqual(middle(''), []);
  });

  it("function should not modify original input array [1, 2, 3, 4]", () => {
    const inputArr = [1, 2, 3, 4];
    middle(inputArr);
    assert.deepEqual(inputArr, [1, 2, 3, 4]);
  });

});