const globalArr = [];

const getNext = (taken, notTaken) => {
    if (notTaken.length === 1) {
        globalArr.push(taken.concat(notTaken));
    }

    for (let i = 0; i < notTaken.length; i++) {
        const notFullArray = notTaken.concat();
        const extractedValue = notFullArray.splice(i, 1);

        getNext(taken.concat(extractedValue), notFullArray);
    }
}

const getAllPairs = (number, size) => {
    const arr = [];

    for (let i = 0; i < number; i++) arr.push(i);
    for (let i = 0; i < number - size + 1; i++) {
        getNext([], arr.slice(i, size + i));
    }
}

getAllPairs(5, 3);
console.log(globalArr);