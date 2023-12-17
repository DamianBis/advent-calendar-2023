const { checkPartial } = require("./index");

parseGame = require("./index").parseGame;
addGames = require("./index").addGames;


test('parses game 1', () => {
  expect(parseGame("???.### 1,1,3")).toEqual(1);
});

test('parses game 2', () => {
  expect(parseGame(".??..??...?##. 1,1,3")).toEqual(16384);
});
test('parses game 3', () => {
  expect(parseGame("?#?#?#?#?#?#?#? 1,3,1,6")).toEqual(1);
});

test('parses game 4', () => {
  expect(parseGame("????.#...#... 4,1,1")).toEqual(16);
});

test('checkPartial', () => {
  expect(checkPartial("##.#.#.#????...#", [4, 2])).toEqual(false);
})

test('checkPartial2', () => {
  expect(checkPartial("####.##.#.#????...#", [4, 2])).toEqual(false);
})
test('checkPartial3', () => {
  expect(checkPartial("####.##????...#", [4, 2])).toEqual(true);
})
test('checkPartial4', () => {
  expect(checkPartial("####.###????...#", [4, 2])).toEqual(false);
})
test('checkPartial5', () => {
  expect(checkPartial("####.#????...#", [4, 2])).toEqual(true);
})

test('parses game 5', () => {
  expect(parseGame("????.######..#####. 1,6,5")).toEqual(2500);
});

/*
test('parses game 6', () => {
  expect(parseGame("?###???????? 3,2,1")).toEqual(506250);
});

test('add games', () => {
  expect(addGames(["???.### 1,1,3", ".??..??...?##. 1,1,3"])).toEqual(16385)
})

test('check input', () => {  
  var fs = require('fs');
  var array = fs.readFileSync('./day12/part1/input').toString().split("\n");
  expect(addGames(array)).toEqual(0);
});
*/