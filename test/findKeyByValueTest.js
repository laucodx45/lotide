const assert = require('chai').assert;
const {findKeyByValue} = require('../index');

describe("#findKeyByValue", () => {
  
  const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };

  it("returns key 'drama' when input value is 'The Wire'", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama');
  });

  it("returns undefined since input value is not a valid value in input object", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });

});