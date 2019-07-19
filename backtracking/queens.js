const getPossibleQueenPositions = (placed) => {

};

const arrangeQueens = (placed) => {
    if (placed.length === 4) {
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
