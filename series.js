function getSeries(array) {
    const serise = [];

    array.splice(1).reduce((a, c) => {
        if (a.prev + 1 !== c) {
            serise.push([a.start, a.prev]);

            return {
                start: c,
                prev: c,
            }
        }

        a.prev = c;
        return a;
    },
    {
        start: array[0],
        prev: array[0],
    });

    return serise;
}

console.log(getSeries([-5, -4, -3, 0, 1, 4, 6, 8, 9, 10, 100]))