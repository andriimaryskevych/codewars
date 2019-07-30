const climb = (stepsLeft) => {
    if (stepsLeft < 0) {
        return 0;
    }

    if (stepsLeft === 0 || stepsLeft === 1) {
        return 1;
    }

    return [1,2,3,4].reduce((a, c) => {
        a += climb(stepsLeft - c);
        return a;
    }, 0);
}

console.log(climb(12));
