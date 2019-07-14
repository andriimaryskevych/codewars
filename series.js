function getSeries(array) {
    const series = [];
    let start = array[0];

    for (let i = 0; i < array.length - 1; i++) {
        // End of serie
        if (array[i] - array[i + 1] !== -1) {
            series.push([start, array[i]]);

            start = array[i + 1];
        }
    }

    series.push([start, array[array.length - 1]])

    return series;
}

console.log(getSeries([-5, -4, -3, 0, 1, 4, 6, 8, 9, 10, 100]))