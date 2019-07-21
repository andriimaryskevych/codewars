function countPatternsFrom(firstDot, length) {
    if (length === 0 || length === 10) {
      return 0;
    }

    const position = 'abcdefghi'.indexOf(firstDot.toLowerCase());
    const [x, y] = [Math.floor(position / 3), position % 3];

    const sameCoordinates = ([x1, y1], [x2, y2]) => x1 === x2 && y1 === y2;

    const getBlocker = ([x1, y1], [x2, y2]) => {
        const x = (Math.abs(x1 - x2) / 2) + Math.min(x1, x2);
        const y = (Math.abs(y1 - y2) / 2) + Math.min(y1, y2);

        if (Number.isInteger(x) && Number.isInteger(y)) {
            return [x, y];
        }

        return null;
    };

    const getPossiblePlaces = (alreadyUsed) => {
        const res = [];
        const head = alreadyUsed[alreadyUsed.length - 1];

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                const targetPoint = [i, j];

                if (alreadyUsed.some(point => sameCoordinates(point, targetPoint))) {
                    continue;
                }

                const blocker = getBlocker(head, targetPoint);

                if (blocker && !alreadyUsed.some(point => sameCoordinates(point, blocker))) {
                    continue;
                }

                res.push([i, j]);
            }
        }

        return res;
    };

    let solutions = 0;

    const findPatterns = (placed) => {
        if (placed.length === length) {
            solutions++;

            return false;
        }

        const nextPositions = getPossiblePlaces(placed);

        for (let i = 0; i < nextPositions.length; i++) {
            const copy = placed.concat();
            copy.push(nextPositions[i]);

            const stepValue = findPatterns(copy);

            if (stepValue === false) {
                continue;
            } else {
                return stepValue;
            }
        }

        return false;
    };

    findPatterns([ [x, y] ]);

    return solutions;
};
