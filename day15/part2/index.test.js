const { parseSequence, parseBoxes } = require("./index");

test('parses sequence hash', () => {
  expect(parseSequence("rn")).toEqual(0);
});

test('parses sequence1', () => {
  expect(parseSequence("qp")).toEqual(1);
});

test('parses sequence3', () => {
  expect(parseSequence("ab")).toEqual(3);
});

test('parses boxes', () => {
  expect(parseBoxes(["rn=1", "cm-", "qp=3", "cm=2", "qp-", "pc=4", "ot=9", "ab=5", "pc-", "pc=6", "ot=7"])).toEqual(145);
});

test('run test', () => {
  var fs = require('fs');
  var array = fs.readFileSync('./day15/part2/input').toString().split(",");
  expect(parseBoxes(array)).toEqual(200277);
})
