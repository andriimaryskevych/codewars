const extendArray = (arr, direction) => {
    switch (direction) {
        case 0: arr.unshift(new Array(arr[0].length).fill(0)); break;
        case 1: arr.forEach(subarray => { subarray.push(0); }); break;
        case 2: arr.push(new Array(arr[0].length).fill(0)); break;
        case 3: arr.forEach(subarray => { subarray.unshift(0); }); break;
    }
}

const getOutgoingPart = (heigth, width, x, y) => {
    if (x < 0) {
        return 0;
    } else if (y == width) {
        return 1;
    } else if (x === heigth) {
        return 2;
    } else if (y < 0) {
        return 3;
    }

    return null;
}

const getNewAntPosition = (shiftedPart, x, y) => {
    switch (shiftedPart) {
        case 0: x = 0; break;
        case 1: break;
        case 2: break;
        case 3: y = 0; break;
    }

    if (x < 0) {
        x = 0;
    }

    if (y < 0) {
        y = 0;
    }

    return { x, y };
}

function ant(grid, column, row, n, dir = 0) {
    if (n === 0) {
        return grid;
    }

    // Being on this cell calculate direction
    dir += grid[row][column] === 1 ? 1 : -1;

    if (dir < 0) {
        dir = 3;
    }

    if (dir > 3) {
        dir = 0
    }

    //invert its value
    grid[row][column] = Math.abs(grid[row][column] - 1);

    // perform step
    switch (dir) {
        case 0: row -= 1; break;
        case 1: column += 1; break;
        case 2: row += 1; break;
        case 3: column -= 1; break;
    }

    const outgoingPart = getOutgoingPart(grid.length, grid[0].length, row, column);

    if (outgoingPart !== null) {
        extendArray(grid, outgoingPart);
        const newAntPosition = getNewAntPosition(outgoingPart, row, column);

        row = newAntPosition.x;
        column = newAntPosition.y;
    }

    return ant(grid, column, row, n - 1, dir);
}
