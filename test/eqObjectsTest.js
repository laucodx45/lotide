const assert = require('chai').assert;
const {eqObjects} = require('../index');

describe("#eqObjects", () => {

  const shirtObject = { colors: ["red", "blue"], size: "medium" };

  it("returns false, object1 and object2 does not have the same properties, keys, and values", () => {
    assert.strictEqual(eqObjects(shirtObject, { colors: ["red", "blue"], size: "medium", sleeveLength: "long" }), false);
  });

  it("returns true, object1 and object2 have the same properties, keys, and values", () => {
    assert.equal(eqObjects({ colors: "red", size: "medium" }, { colors: "red", size: "medium" }), true);
  });

  it("returns true, object1 and object2 have the same properties, keys, and values", () => {
    assert.equal(eqObjects({ colors: "blue", size: "medium" }, { colors: "blue", size: "medium" }), true);
  });

  it("returns false, object 1 and 2 have the different key value pair, testing nested objects", () => {
    assert.equal(eqObjects({ a: { z: { b: {b: 1}} }, b: {b: { b:1 }} }, { a: { z: { b: {b: 2}} }, b: {b: { b:1 }} }), false);
  });

  it("returns true, obj 1 and 2 have the same key value pair, testing nested objects", () => {
    assert.equal(eqObjects({ a: { z: { b: {b: 1}} }, b: {b: { b:1 }} }, { a: { z: { b: {b: 1}} }, b: {b: { b:1 }} }), true);
  });

});