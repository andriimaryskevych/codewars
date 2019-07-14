/*
    It is worth finding unique letters first, then perform sorting
    1) Uppercase
    2) Unique
    3) Sort
*/

function normalize (string) {
    return string
        .toUpperCase()
        .split('')
        .filter(a => a !== ' ')
        .sort()
        .join('');
}

function getUniqueCharacters (string) {
    const map = {};

    string
        .split('')
        .forEach(item => { map[item] = true; });

    return Object.keys(map).join('');
}

function findUniq(arr) {
    const value = {};

    const three = arr.splice(0,3).map(normalize);
    console.log(three);
    console.log(getUniqueCharacters(three[0]))
    console.log(getUniqueCharacters(three[1]))
    console.log(getUniqueCharacters(three[2]))

    // for (let i = 0, n = arr.length; i < n; i++) {
    //     const normalized = normalize(arr[i]);

    //     value[arr[i]] = value[arr[i]] || 0;
    //     value[arr[i]]++;

    //     if (Object.keys(value).length === 2 && Object.values(value).some(a => a > 1)) {
    //         break;
    //     }
    // }

    // let seatchedValue;

    // Object.entries(value).forEach(([key, val]) => {
    //     if (val === 1) {
    //         seatchedValue = key;
    //     }
    // })

    return Number(seatchedValue);
}

console.log(findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a'  ]));
