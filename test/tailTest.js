const assert = require('chai').assert;
const {tail} = require('../index');

describe("#tail", () => {

  it("returns [1, 2] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });

  it("retuns [] for [1]", () => {
    assert.deepEqual(tail([1]), []);
  });

  it("function should not modify the value of input argument [1, 2, 3]", () => {
    const numArr = [1, 2 , 3];
    tail(numArr);
    assert.deepEqual(numArr, [1, 2, 3]);
  });

});