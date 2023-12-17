

function parseGame(input) {
    const parsed = input.split(":");
    const id = parsed[0].replace("Game ", "")

    let minBlue = 0;
    let minGreen = 0;
    let minRed = 0;

    const sets = parsed[1].split(";");
    for (const set of sets) {
        const pulls = set.split(",");
        let blue = 0
        let green = 0;
        let red = 0;

        for (const pull of pulls) {
            const pullDetails = pull.trim().split(" ");
            if (pullDetails[1] === "blue") {
                blue += parseInt(pullDetails[0])
            } if (pullDetails[1] === "red") {
                red += parseInt(pullDetails[0])
            } if (pullDetails[1] === "green") {
                green += parseInt(pullDetails[0])
            }
        }

        if (minBlue < blue) {
            minBlue = blue;
        }
        if (minRed < red) {
            minRed = red;
        }
        if (minGreen < green) {
            minGreen = green;
        }

    }

    return { id: id, power: minGreen * minRed * minBlue }
}

function addGames(input) {
    const results = input.map((a) => parseGame(a));

    let count = 0;
    results.forEach((a) => count += parseInt(a.power))

    return count;
}



module.exports = {
    parseGame,
    addGames,
};

/*
var fs = require('fs');
var array = fs.readFileSync('./day2/part2/input').toString().split("\n");

console.log(addGames(array));
*/