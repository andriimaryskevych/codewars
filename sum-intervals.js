function sumIntervals(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);

    const arr = [];

    let bottom = intervals[0][0];
    let top = intervals[0][1];

    for (let i = 1; i < intervals.length; i++) {
        if (top < intervals[i][0]) {
            arr.push([bottom, top]);

            bottom = intervals[i][0];
            top = intervals[i][1];
        } else {
            top = top > intervals[i][1] ? top : intervals[i][1];
        }
    }

    arr.push([bottom, top]);

    return arr.reduce((a, c) => {
        return a + c[1] - c[0];
    }, 0);
}

const test = [
    [1, 5],
    [4, 10]
];

console.log(sumIntervals(test));
