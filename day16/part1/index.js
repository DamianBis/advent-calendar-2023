let passedThrough = [];
let maxX = 0;
let maxY = 0;

function laser(map) {
    maxX = map.length - 1
    maxY = map[0].length - 1
    trackLaser(map, 0, -1, "right");
    const results = passedThrough.filter((v,i,a)=>a.findIndex(v2=>(v2.x===v.x && v2.y === v.y))===i)
    console.log(passedThrough);
    return results.length - 1;
}
let track = 0;
function trackLaser(map, x, y, direction) {

    if (passedThrough.findIndex((a) => a.x === x && a.y === y && a.direction === direction) !== -1) {
        return;
    }
    passedThrough.push({ x, y, direction });

    if (direction === "right") {
        if (y + 1 > maxY) { return }
        const nextSpace = map[x][y + 1];
        if (nextSpace === ".") {
            // Go right
            trackLaser(map, x, y + 1, "right")
        } else if (nextSpace === "\\") {
            // Go Down
            trackLaser(map, x, y + 1, "down")
        } else if (nextSpace === "/") {
            // Go Up
            trackLaser(map, x, y + 1, "up")
        } else if (nextSpace === "-") {
            // Go right
            trackLaser(map, x, y + 1, "right")
        } else if (nextSpace === "|") {
            // split up and down
            trackLaser(map, x, y + 1, "down")
            trackLaser(map, x, y + 1, "up")
        }
    } else if (direction === "left") {
        if (y - 1 < 0) { return }
        const nextSpace = map[x][y - 1];
        if (nextSpace === ".") {
            // Go right
            trackLaser(map, x, y - 1, "left")
        } else if (nextSpace === "\\") {
            // Go Up
            trackLaser(map, x, y - 1, "up")
        } else if (nextSpace === "/") {
            // Go Down
            trackLaser(map, x, y - 1, "down")
        } else if (nextSpace === "-") {
            // Go left
            trackLaser(map, x, y - 1, "left")
        } else if (nextSpace === "|") {
            // split up and down
            trackLaser(map, x, y - 1, "down")
            trackLaser(map, x, y - 1, "up")
        }
    } else if (direction === "up") {
        if (x - 1 < 0) { return }
        const nextSpace = map[x - 1][y];
        if (nextSpace === ".") {
            // Go up
            trackLaser(map, x - 1, y, "up")
        } else if (nextSpace === "\\") {
            // Go Left
            trackLaser(map, x - 1, y, "left")
        } else if (nextSpace === "/") {
            // Go Right
            trackLaser(map, x - 1, y, "right")
        } else if (nextSpace === "-") {
            // Go left & right
            trackLaser(map, x - 1, y, "left")
            trackLaser(map, x - 1, y, "right")
        } else if (nextSpace === "|") {
            // go Up
            trackLaser(map, x - 1, y, "up")
        }
    } else if (direction === "down") {
        if (x + 1 > maxX) { return }
        const nextSpace = map[x + 1][y];
        if (nextSpace === ".") {
            // Go down
            trackLaser(map, x + 1, y, "down")
        } else if (nextSpace === "\\") {
            // Go right
            trackLaser(map, x + 1, y, "right")
        } else if (nextSpace === "/") {
            // Go left
            trackLaser(map, x + 1, y, "left")
        } else if (nextSpace === "-") {
            // split left and right
            trackLaser(map, x + 1, y, "left")
            trackLaser(map, x + 1, y, "right")
        } else if (nextSpace === "|") {
            // go down
            trackLaser(map, x + 1, y, "down")
        }
    }
}

module.exports = {
    laser
};
