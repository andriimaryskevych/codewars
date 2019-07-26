function deepCount(a){
    if (!Array.isArray(a)) {
        return 0;
    }

    return a.reduce((a, c) => {
        a += deepCount(c) + 1;
        return a;
    }, 0);
}

console.log(deepCount([1]));