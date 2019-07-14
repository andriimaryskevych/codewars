function findUniq(arr) {
    const value = {};

    for (let i = 0, n = arr.length; i < n; i++) {
        value[arr[i]] = value[arr[i]] || 0;
        value[arr[i]]++;

        if (Object.keys(value).length === 2 && Object.values(value).some(a => a > 1)) {
            break;
        }
    }

    let seatchedValue;

    Object.entries(value).forEach(([key, val]) => {
        if (val === 1) {
            seatchedValue = key;
        }
    })

    return Number(seatchedValue);
}

console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));
