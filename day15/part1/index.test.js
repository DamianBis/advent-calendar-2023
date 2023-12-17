const { parseSequence } = require("./index");

test('parses sequence hash', () => {
  expect(parseSequence("HASH")).toEqual(52);
});

test('parses sequence1', () => {
  expect(parseSequence("rn=1")).toEqual(30);
});

test('parses sequence2', () => {
  expect(parseSequence("cm-")).toEqual(253);
});
test('parses sequence3', () => {
  expect(parseSequence("qp=3")).toEqual(97);
});

test('run test', () => {
  var fs = require('fs');
  var array = fs.readFileSync('./day15/part1/input').toString().split(",");
  let count = 0;
  array.forEach((a) => count += parseSequence(a));
  expect(count).toEqual(513158);
})

