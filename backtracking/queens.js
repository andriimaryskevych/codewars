const greedSize = 4;

const onTheSameLine = ([x1, y1], [x2, y2]) => {
    return x1 === x2 || y1 === y2;
};

const onTheSameDiagonal = ([x1, y1], [x2, y2]) => {
    const len1 = Number(
        Math.sqrt(
            Math.pow(x1 - x1, 2) + Math.pow(y2 - y1, 2)
        ).toFixed(2)
    );

    const len2 = Number(
        Math.sqrt(
            Math.pow(x1 - x2, 2) + Math.pow(y2 - y2, 2)
        ).toFixed(2));

    return len1 === len2;
};

const getPossibleQueenPositions = (placed) => {
    const possiblePlaces = [];

    for (let i = 0; i < greedSize; i++) {
        for (let j = 0; j < greedSize; j++) {
            const point = [i ,j];
            // Conditions

            // on somesones x, y axes
            if (placed.some(([x, y]) => x === i || y === j)) {
                continue;
            }

            possiblePlaces.push(point);
        }
    }

    return possiblePlaces;
};

const arrangeQueens = (placed) => {
    if (placed.length === greedSize) {
        return placed;
    }

    const nextPositions = getPossibleQueenPositions(placed);

    if (nextPositions.length === 0) {
        return false;
    }

    for (let i = 0; i < nextPositions.length; i++) {
        const stepValue = arrangeQueens(placed.concat(nextPositions[i]));

        if (stepValue === false) {
            continue;
        } else {
            return stepValue;
        }
    }

    return false;
};
