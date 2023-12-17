

function parseGame(input) {
    const parsed = input.split(":");
    const id = parsed[0].replace("Game ", "")

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

        if (red > 12 || green > 13 || blue > 14) {
            return { id: id, valid: false }
        }

    }
    return { id: id, valid: true }
}

function addGames(input) {
    const results = input.map((a) => parseGame(a));
    const resultss = results.filter((a) => a.valid == true)

    let count = 0;
    resultss.forEach((a) => count += parseInt(a.id))

    return count;
}



module.exports = {
    parseGame,
    addGames,
};

/*
var fs = require('fs');
var array = fs.readFileSync('./day2/part1/input').toString().split("\n");

console.log(addGames(array));
*/