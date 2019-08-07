const getNewDirection = (direction, newDirection) => {
    switch (newDirection) {
        case 'R': direction += 1; break;
        case 'L': direction -= 1; break;
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
        case 0: newlocation[1] += steps; break;
        case 1: newlocation[0] += steps; break;
        case 2: newlocation[1] -= steps; break;
        case 3: newlocation[0] -= steps; break;
    }

    return newlocation;
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
function mousePath(str){
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
}

console.log(mousePath('14R11R10R4L1L4R3R7R10R3R3L1L4L5L11R3'));
