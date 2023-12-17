function parseSequence(sequence) {
    let count = 0;
    for(const i in sequence) {
        const asciiCode = sequence.charCodeAt(i);
        count += asciiCode;
        count *= 17
        count = count % 256
    }
    return count;
}

function parseBoxes(sequences) {
    const boxes = []
    for(sequence of sequences) {
        const [label, length] = sequence.split(/[=-]+/);
        const i = parseSequence(label);
        if(length === "") {
            if(boxes[i] != null) {
                boxes[i] = boxes[i].filter((a) => {
                    return a.label !== label
                })
            }
        }
        else if(boxes[i] == null) {
            boxes[i] = [{ label, length}]
        } else {
            const index = boxes[i].findIndex((a => a.label == label));
            if(index === -1) {
                boxes[i].push({label, length})

            } else {
                boxes[i][index].length = length;
            }
        }
    }
    let count = 0;
    for(let j = 0; j < boxes.length; j++) {
        if(boxes[j] != null) {
            for(let k = 0; k < boxes[j].length; k++) {
                count += boxes[j][k].length * (k + 1) * (j + 1)
            }
        }
    }
    return count;
}
module.exports = {
    parseSequence,
    parseBoxes
};
