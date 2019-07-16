function chooseBestSum(t, k, ls) {
    if (ls.length < k) return null;

    const globalArr = [];

    const getNext = (taken, notTaken, maxLength) => {
        if (maxLength === 0) {
            globalArr.push(taken);

            return;
        }

        for (let i = 0; i < notTaken.length - maxLength + 1; i++) {
            const value = notTaken[i];
            const shorterArray = notTaken.slice(i + 1);

            getNext(taken.concat(value), shorterArray, maxLength - 1);
        }
    }

    const getAllPairs = (number, size) => {
        const arr = [];

        for (let i = 0; i < number; i++) arr.push(i);
        getNext([], arr, size);
    }

    getAllPairs(ls.length, k);

    const a = globalArr.map(array => {
        return array.reduce((a, c) => {
            return a + ls[c];
        }, 0);
    });

    let min;
    let val;

    for (let i = 0; i < a.length; i++) {
        if (a[i] <= t) {
            if (typeof min === 'undefined' || t - a[i] < min) {
                min = t - a[i];
                val = a[i];
            }
        }
    }

    return val || null;
};

console.log(chooseBestSum(230, 3, [91, 74, 73, 85, 73, 81, 87]));