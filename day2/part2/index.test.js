parseGame = require("./index").parseGame;
addGames = require("./index").addGames;

test('parses game 1', () => {
  expect(parseGame("Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green")).toEqual({ id: "1", power: 48 });
});

test('parses game 2', () => {
  expect(parseGame("Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue")).toEqual({ id: "2", power: 12 });
});

test('parses game 3', () => {
  expect(parseGame("Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red")).toEqual({ id: "3", power: 1560 });
});

test('parses game 4', () => {
  expect(parseGame("Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red")).toEqual({ id: "4", power: 630 });
});

test('parses game 5', () => {
  expect(parseGame("Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green")).toEqual({ id: "5", power: 36 });
});

test('adds games', () => {
  expect(addGames(["Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green",
    "Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue",
    "Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red",
    "Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red",
    "Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green"])).toEqual(2286)
});