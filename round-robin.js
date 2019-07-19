// No need to store two data arrays (alreadyUsed, currentStep)
// Just add all selected values to one array
// With simple computations it would be possible to apply more strict filters to last n selected points

function buildMatchesTable(numberOfTeams) {
    const gamesPerRound = numberOfTeams / 2;
    const roundsCount = numberOfTeams - 1;
    const totalGames = gamesPerRound * roundsCount;

    const alreadyTaken = ([x1, y1], [x2, y2]) => x1 === x2 && y1 === y2;
    const intersection = ([x1, y1], [x2, y2]) => x1 === x2 || y1 === y2 || x1 === y2 || y1 === x2;

    const getPossiblePlaces = (alreadyUsed) => {
        const res = [];

        const totalTakenPointsCount = alreadyUsed.length;
        const currentRoundGamesCount = totalTakenPointsCount % gamesPerRound;
        const lastRoundGames = alreadyUsed.slice(alreadyUsed.length - currentRoundGamesCount);

        for (let i = 0; i < numberOfTeams; i++) {
            for (let j = i + 1; j < numberOfTeams; j++) {
                const testPoint = [i, j];

                if (lastRoundGames.some(taken => intersection(taken, testPoint))) {
                    continue;
                }

                if (alreadyUsed.some(taken => alreadyTaken(taken, testPoint))) {
                    continue;
                }

                res.push([i, j]);
            }
        }

        return res;
    };

    const arrangeGames = (placed = []) => {
        if (placed.length === totalGames) {
            return placed;
        }

        const nextPositions = getPossiblePlaces(placed);

        if (nextPositions.length === 0) {
            return false;
        }

        for (let i = 0; i < nextPositions.length / 2; i++) {
            const copy = placed.concat();
            copy.push(nextPositions[i]);

            const stepValue = arrangeGames(copy);

            if (stepValue === false) {
                continue;
            } else {
                return stepValue;
            }
        }

        return false;
    };

    const games = arrangeGames().map(([x, y]) => [x + 1, y + 1]);

    const res = [];

    for (let i = 0; i < roundsCount; i++) {
        const round = games.slice(i * gamesPerRound, gamesPerRound * i + gamesPerRound);
        res.push(round);
    }

    return res;
}

console.log(buildMatchesTable(20));
