const greedSize = 7;

const onTheSameLine = ([x1, y1], [x2, y2]) => x1 === x2 || y1 === y2;

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

const canBePlaced = (placed, targetPoint) => {
    const line = placed.some(point => onTheSameLine(point, targetPoint));

    if (line) {
        return false;
    }

    const digonal = placed.some(point => onTheSameDiagonal(point, targetPoint));

    if (digonal) {
        return false;
    }

    return true;
}

const getPossibleQueenPositions = (placed) => {
    const possiblePlaces = [];

    for (let i = 0; i < greedSize; i++) {
        for (let j = 0; j < greedSize; j++) {
            const point = [i ,j];

            if (!canBePlaced(placed, point)) {
                continue;
            }

            possiblePlaces.push(point);
        }
    }

    return possiblePlaces;
};

const solutions = [];
const arrangeQueens = (placed) => {
    if (placed.length === greedSize) {
        solutions.push(placed);

        return false;
    }

    const nextPositions = getPossibleQueenPositions(placed);

    if (nextPositions.length === 0) {
        return false;
    }

    for (let i = 0; i < nextPositions.length; i++) {
        const copy = placed.concat();
        copy.push(nextPositions[i]);

        const stepValue = arrangeQueens(copy);

        if (stepValue === false) {
            continue;
        } else {
            return stepValue;
        }
    }

    return false;
};

console.log(arrangeQueens([]));
console.log(solutions.length);
console.log(solutions);
