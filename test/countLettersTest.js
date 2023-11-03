const assert = require('chai').assert;
const {countLetters} = require('../index');

describe("#countLetters", () => {

  it("return {L: 2, H: 1}", () => {
    const expectedObj = {
      L: 2,
      H: 1
    };
    assert.deepEqual(countLetters("LHL"), expectedObj);
  });

  it("return { H: 1, e: 1, l: 2, o: 1, w: 1}, should not include space in sentence in return object", () => {
    const expectedObj = {
      H: 1,
      e: 1,
      l: 2,
      o: 1,
      W: 1
    };
    assert.deepEqual(countLetters("Hello W"), expectedObj);
  });

  it("return error when no argument get passed into function", () => {
    assert.throws(countLetters, Error, 'Please enter a valid string into argument');
  });

  it("return error when empty string were passed into argument", () => {
    assert.throws(() => {
      countLetters("");
    }, Error, 'Please enter a valid string into argument');
  });
});