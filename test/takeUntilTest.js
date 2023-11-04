const { assert } = require("chai");
const { takeUntil } = require('../index');

describe("#takeUntil", () => {

  it("returns [1, 2, 5, 7, 2], when input array is [1, 2, 5, 7, 2, -1, 2, 4, 5] and callbackFn is x => x < 0", () => {
    const arrArg = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    assert.deepEqual(takeUntil(arrArg, x => x < 0), [1, 2, 5, 7, 2]);
  });

  it('returns ["Hello", "World"] when input array is ["Hello", "World", ",", "NOOO"] and callbackFn is x => x === ","', () => {
    const arrArg = ["Hello", "World", ",", "NOOO"];
    assert.deepEqual(takeUntil(arrArg, x => x === ","), ["Hello", "World"]);
  });

});