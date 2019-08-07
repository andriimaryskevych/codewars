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

const samePoints = ([a, b], [c, d]) => {
    return a === c && b === d;
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

const lineIntersect = (x1,y1,x2,y2, x3,y3,x4,y4) => {
    var x=((x1*y2-y1*x2)*(x3-x4)-(x1-x2)*(x3*y4-y3*x4))/((x1-x2)*(y3-y4)-(y1-y2)*(x3-x4));
    var y=((x1*y2-y1*x2)*(y3-y4)-(y1-y2)*(x3*y4-y3*x4))/((x1-x2)*(y3-y4)-(y1-y2)*(x3-x4));
    if (isNaN(x)||isNaN(y)) {
        return false;
    } else {
        if (x1>=x2) {
            if (!(x2<=x&&x<=x1)) {return false;}
        } else {
            if (!(x1<=x&&x<=x2)) {return false;}
        }
        if (y1>=y2) {
            if (!(y2<=y&&y<=y1)) {return false;}
        } else {
            if (!(y1<=y&&y<=y2)) {return false;}
        }
        if (x3>=x4) {
            if (!(x4<=x&&x<=x3)) {return false;}
        } else {
            if (!(x3<=x&&x<=x4)) {return false;}
        }
        if (y3>=y4) {
            if (!(y4<=y&&y<=y3)) {return false;}
        } else {
            if (!(y3<=y&&y<=y4)) {return false;}
        }
    }
    return true;
};

const hasIntersections = (vertexes) => {
    for (let i = 0; i < vertexes.length - 3; i++) {
        const [a, b] = vertexes[i];
        const [c, d] = vertexes[i + 1];

        for (let j = i + 2; j < vertexes.length - 1; j++) {
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


    console.log(vertexes);

    return hasIntersections(vertexes.slice(0, vertexes.length)) || !samePoints(vertexes[0], vertexes[vertexes.length - 1]) ? null : getArea(vertexes);
}

// console.log(mousePath('2R4R4R4R2'));
console.log(mousePath('12L5L8L2R4R5R15L8L15L16'));

console.log(lineIntersect(0, 0, 10, 10, 0, 10, 10, 10))