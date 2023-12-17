const { laser } = require("./index");
var fs = require('fs');

/*
test('calculate laser beam', () => {
  var array = fs.readFileSync('./day16/part1/smallinput.txt').toString().split("\n");
  
  expect(laser(array)).toEqual(46);
});
*/


test('calculate laser beam', () => {
  var array = fs.readFileSync('./day16/part1/input').toString().split("\n");
  
  expect(laser(array)).toEqual(456);
});