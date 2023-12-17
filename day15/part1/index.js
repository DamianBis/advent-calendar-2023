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
module.exports = {
    parseSequence
};
