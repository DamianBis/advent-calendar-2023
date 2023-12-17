function parseNums(input) {
    return input.split(" ").map((a) => parseInt(a.trim())).filter((a) => !isNaN(a));
}

function parseGame(input) {
    const parsed = input.split(":");
    const [winningNums, cardNums] = parsed[1].split(" | ");
    
    const parsedWinningNums = parseNums(winningNums);
    const parsedCardNums = parseNums(cardNums);

    let winningNumbers = 0;

    parsedWinningNums.forEach((a) => {
        if(parsedCardNums.includes(a)) {
            winningNumbers += 1;
        }
    })

    if(winningNumbers <2) {
        return { points: winningNumbers }
    } else {
        return { points: Math.pow(2, winningNumbers -1 ) }
    }
}

function addGames(input) {
    let count = 0;
    input.forEach((a) => count+=parseGame(a).points)
    return count;
}


module.exports = {
    parseGame,
    addGames
};
