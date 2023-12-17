function checkPartial(posibility, checkArr) {
    const error = createChecksum(posibility.split("?")[0]);
    if(error.length > 1) {
        for(let i = 0; i < error.length-1; i++) {
            if(parseInt(checkArr[i]) !== error[i]) {
                return false;
            }
        }
        if(checkArr[error.length-1] < error[error.length-1]) {
            return false;
        }
    }
    return true;

}

function createChecksum(posibility) {
    const errors = posibility.split(".").map((a) => a.length).filter((a) => a != 0);
    return errors;
}

function getOptions(inputs, checkArr) {
    const response = [];
    for (const input of inputs) {
        if ((input).indexOf("?") == -1) {
            return inputs;
        }
        for (const symbol of ["#", "."]) {
            const newPosibility = input.replace("?", symbol);
            if(checkPartial(newPosibility, checkArr)) {
                response.push(input.replace("?", symbol));
            }
        }
    }
    return getOptions(response, checkArr);
}

function findValidPosibilities(posibilities, check) {
    for (const posibility of posibilities) {
        const errors = createChecksum(posibility);
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
    const [oldRecord, oldChecksum] = input.split(" ");
    const record = `${oldRecord}?`.repeat(5).slice(0, -1);
    const checksum = `${oldChecksum},`.repeat(5).slice(0,-1);
    const checkArr = checksum.split(",");

    const posibilities = getOptions([record], checkArr);

    const matching = findValidPosibilities(posibilities, checkArr);
    return matching;

}

function addGames(input) {
    let count = 0;
    input.forEach((a, i) => {
        console.log(`game: ${i}`); 
        count += parseGame(a)
    })
    return count;
}


module.exports = {
    parseGame,
    addGames,
    checkPartial
};
