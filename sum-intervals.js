function sumIntervals(intervals) {
    return intervals.sort((a, b) => a[0] - b[0]).reduce((a, c) => {
        if (a[a.length - 1][1] < c[0]) {
            a.push(c);
        } else {
            a[a.length - 1][1] = a[a.length - 1][1] > c[1] ? a[a.length - 1][1] : c[1];
        }

        return a;
    }, [intervals[0]])
    .reduce((a, c) => {
        return a + c[1] - c[0];
    }, 0);
}

const test = [
    [1, 5],
    [4, 10]
];

console.log(sumIntervals(test));
