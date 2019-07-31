const tile = n => {
    if (n === 0) {
        return 0;
    }

    if (n === 1) {
        return 1;
    }

    return tile(n - 1) + tile(n - 2);
};

console.log(tile(10));
