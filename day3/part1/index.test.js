parseGame = require("./index").parseGame;
addGames = require("./index").addGames;

test('parses game 1', () => {
  expect(parseGame("Game 1: 1 red, 5 blue, 1 green; 6 blue, 3 red; 6 blue, 5 red; 4 red, 7 blue, 1 green")).toEqual({ id: "1", valid: true });
});
