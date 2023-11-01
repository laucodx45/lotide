const assertEqual = require('../assertEqual');
const head = require('../head');

assertEqual(head([5,6,7]), 5);
assertEqual(head([4]), 4);
assertEqual(head([]), undefined);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Hi"]), "Hi");
assertEqual(head("Hi"), "Hi");