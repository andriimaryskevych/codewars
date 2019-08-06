const has = (count, value, array) => {
    const foundItems = array.reduce((a, c) => {
        if (c === value) {
            a += 1;
        }

        return a;
    }, 0);

    return foundItems >= count;
};

const remove = (count, value, arr) => {
    let array = arr.concat();

    for (let i = array.length - 1; i >= 0; i--) {
        if (count <= 0) {
            break;
        }

        if (array[i] === value) {
            array.splice(i, 1);

            count--;
        }
    }

    return array;
}

function score(dice) {
    const values = [
        { count: 3, value: 1, score: 1000 },
        { count: 3, value: 6, score: 600 },
        { count: 3, value: 5, score: 500 },
        { count: 3, value: 4, score: 400 },
        { count: 3, value: 3, score: 300 },
        { count: 3, value: 2, score: 200 },
        { count: 1, value: 1, score: 100 },
        { count: 1, value: 5, score: 50 },
    ];

    let i = 0;
    let score = 0;

    while (i < values.length) {
        while (has(values[i].count, values[i].value, dice)) {
            score += values[i].score;

            dice = remove(values[i].count, values[i].value, dice);
        }

        i++;
    }

    return score;
}

console.log(score([1, 1, 1, 1, 1]));
