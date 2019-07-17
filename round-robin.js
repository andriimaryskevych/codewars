const getNext = (taken, notTaken, maxLength) => {
    if (maxLength === 0) {
        return [ taken ];
    }

    let res = [];

    for (let i = 0; i < notTaken.length - maxLength + 1; i++) {
        const value = notTaken[i];
        const shorterArray = notTaken.slice(i + 1);

        res = res.concat(getNext(taken.concat(value), shorterArray, maxLength - 1));
    }

    return res;
}

console.log(getNext([], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));