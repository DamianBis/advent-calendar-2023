function getOptions(inputs) {
    const response = [];
    for (const input of inputs) {
        if ((input).indexOf("?") == -1) {
            return inputs;
        }
        for (const symbol of ["#", "."]) {
            response.push(input.replace("?", symbol));
        }
    }
    return getOptions(response);
}

function findValidPosibilities(posibilities, check) {
    let count = 0;
    for (const posibility of posibilities) {
        const errors = posibility.split(".").map((a) => a.length).filter((a) => a != 0);
        let valid = true;
        if (errors.length != check.length) {
            valid = false;
        }
        for (const i in errors) {
            if(errors[i] !== parseInt(check[i])) {
                valid = false;
            }
        }
        if(valid) {
            count++;
        }
    }
    return count;
}

function parseGame(input) {
    const [record, checksum] = input.split(" ");
    const checkArr = checksum.split(",");

    const posibilities = getOptions([record]);

    const matching = findValidPosibilities(posibilities, checkArr);
    return matching;

}

function addGames(input) {
    let count = 0;
    input.forEach((a) => count += parseGame(a))
    return count;
}


module.exports = {
    parseGame,
    addGames
};
