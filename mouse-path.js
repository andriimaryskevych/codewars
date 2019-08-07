const getNewDirection = (direction, newDirection) => {
    switch (newDirection) {
        case 'R':
            direction += 1;
            break;
        case 'L':
            direction -= 1;
            break;
    }

    if (direction > 3) {
        direction = 0;
    }

    if (direction < 0) {
        direction = 3;
    }

    return direction;
};

const performStep = (previousLocation, steps, direction) => {
    const newlocation = previousLocation.concat();

    switch (direction) {
        case 0:
            newlocation[1] += steps;
            break;
        case 1:
            newlocation[0] += steps;
            break;
        case 2:
            newlocation[1] -= steps;
            break;
        case 3:
            newlocation[0] -= steps;
            break;
    }

    return newlocation;
};

const getArea = (vertexes) => {
    const length = vertexes.length;
    let sum = 0;

    for (let i = 0; i < length - 1; i++) {
        sum += (vertexes[i][0] * vertexes[i + 1][1]) - (vertexes[i][1] * vertexes[i + 1][0]);
    }

    sum += (vertexes[length - 1][0] * vertexes[0][1]) - (vertexes[length - 1][1] * vertexes[0][0]);

    return Math.abs(sum / 2);
};

const lineIntersect = (a, b, c, d, p, q, r, s) => {
    var det, gamma, lambda;
    det = (c - a) * (s - q) - (r - p) * (d - b);
    if (det === 0) {
        return false;
    } else {
        lambda = ((s - q) * (r - a) + (p - r) * (s - b)) / det;
        gamma = ((b - d) * (r - a) + (c - a) * (s - b)) / det;
        return (0 < lambda && lambda < 1) && (0 < gamma && gamma < 1);
    }
};

const hasIntersections = (vertexes) => {
    for (let i = 0; i < vertexes.length - 1; i++) {
        const [a, b] = vertexes[i];
        const [c, d] = vertexes[i + 1];

        for (let j = 0; j < vertexes.length - 1; j++) {
            const [p, q] = vertexes[j];
            const [r, s] = vertexes[j + 1];

            if (lineIntersect(a, b, c, d, p, q, r, s)) {
                return true;
            }
        }
    }

    return false;
};

/**
 *  Directinos:
 *
 *      0
 *      |
 *  3---+---1
 *      |
 *      2
 */
function mousePath(str) {
    let position = [0, 0];

    // 0 - 3
    let direction = 0;

    // all positions
    const vertexes = [
        position,
    ];

    const chunks = ('R' + str).match(/[A-Z]\d+/g);

    chunks.forEach(chunk => {
        const newDirection = chunk.match(/[A-Z]/)[0];
        const steps = Number(chunk.match(/\d+/)[0]);

        direction = getNewDirection(direction, newDirection);
        position = performStep(position, steps, direction);

        vertexes.push(position);
    });

    return hasIntersections(vertexes) ? null : getArea(vertexes);
}

console.log(mousePath('10R5R5R10L5L5'));
