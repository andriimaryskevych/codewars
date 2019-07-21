/*
    It could be easier to check, whether smth blocks certain point
    It is blocked if it used, or there is some point in between of the HEAD and targetPoint
    Write helper function getBlocker() which return point or null
*/
const getBlocker = ([x1, y1], [x2, y2]) => {
    const x = (Math.abs(x1 - x2) / 2) + Math.min(x1, x2);
    const y = (Math.abs(y1 - y2) / 2) + Math.min(y1, y2);

    if (Number.isInteger(x) && Number.isInteger(y)) {
        return [x, y];
    }

    return null;
};

function countPatternsFrom(firstDot, length) {
    if (length === 0 || length === 10) {
      return 0;
    }

    // Getting initial position
    const position = 'abcdefghi'.indexOf(firstDot.toLowerCase());
    const [x, y] = [Math.floor(position / 3), position % 3];

    const sameCoordinates = ([x1, y1], [x2, y2]) => x1 === x2 && y1 === y2;

    const getPossiblePlaces = (alreadyUsed) => {
        const res = [];
        const head = alreadyUsed[alreadyUsed.length - 1];

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                const targetPoint = [i, j];

                // If point is already used
                if (alreadyUsed.some(point => sameCoordinates(point, targetPoint))) {
                    continue;
                }

                const blocker = getBlocker(head, targetPoint);

                // If there is point in between but it is already used
                if (blocker && !alreadyUsed.some(point => sameCoordinates(point, blocker))) {
                    continue;
                }

                res.push([i, j]);
            }
        }

        return res;
    };

    const solutions = [];

    const findPatterns = (placed) => {
        if (placed.length === length) {
            solutions.push(placed);

            return false;
        }

        const nextPositions = getPossiblePlaces(placed);

        if (nextPositions.length === 0) {
            return false;
        }

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

    return solutions.length;
};

console.log(countPatternsFrom('E', 8));

// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         const targetPoint = [i, j];

//         console.log(getBlocker([0,1], targetPoint));
//     }
// }

