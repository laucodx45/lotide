const assert = require('chai').assert;
const {findKey} = require('../index');

describe("#findKey", () => {

  const testObject = {
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  };

  it("retuns key 'noma' for callback function x => x.stars === 2", () => {
    const callbackFn = x => x.stars === 2;
    assert.strictEqual(findKey(testObject, callbackFn), 'noma');
  });

  it("returns key 'Akaleri for callback function x => x.stars === 3", () => {
    const callbackFn = x => x.stars === 3;
    assert.strictEqual(findKey(testObject, callbackFn), 'Akaleri');
  });

  it("returns undefined, since there's no key with value of 4", () => {
    const callbackFn = x => x.stars === 4;
    assert.strictEqual(findKey(testObject, callbackFn), undefined);
  });

});