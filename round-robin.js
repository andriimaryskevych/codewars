const getAllPairs = (count) => {
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

    const arr = [];
    for (let i = 0; i < count; i++) arr.push(i + 1);

    return getNext([], arr, 2);
}


console.log(getAllPairs(10));