parseGame = require("./index").parseGame;
addGames = require("./index").addGames;

test('parses game 1', () => {
  expect(parseGame("Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53")).toEqual({ points: 8, });
});

test('parses game 2', () => {
  expect(parseGame("Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19")).toEqual({ points: 2, });
});
test('parses game 3', () => {
  expect(parseGame("Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1")).toEqual({ points: 2, });
});
test('parses game 4', () => {
  expect(parseGame("Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83")).toEqual({ points: 1, });
});
test('parses game 5', () => {
  expect(parseGame("Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36")).toEqual({ points: 0, });
});
test('parses game 6', () => {
  expect(parseGame("Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11")).toEqual({ points: 0, });
});


test('addGamesWorks', () => {
  expect(addGames([
    "Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53",
    "Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19",
    "Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1",
    "Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83",
    "Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36",
    "Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11",
  ])).toEqual(13);
});


test('check input', () => {  
  var fs = require('fs');
  var array = fs.readFileSync('./day4/part1/input').toString().split("\n");
  expect(addGames(array)).toEqual(25571);
});