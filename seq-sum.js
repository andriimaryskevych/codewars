const sequenceSum = (begin, end, step) => {
    if (begin > end && step > 0 || begin < end && step < 0) return 0;

    const count = Math.floor((end - begin) / step);

    return ((begin + begin + step * count) / 2) * (count + 1);
}

console.log(sequenceSum(1, 5, 1))