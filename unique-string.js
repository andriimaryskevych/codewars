/*
    It is worth finding unique letters first, then perform sorting
    1) Uppercase
    2) Unique
    3) Sort
*/

function equalize (string) {
    const wordMap = {};

    string
        // remove all spaces
        .split(' ')
        .filter(Boolean)
        // to uppercase
        .map(a => a.toUpperCase())
        // join parts and split to map characters
        .join('')
        .split('')
        .forEach(letter => {
            wordMap[letter] = true;
        });

    // sort and unify
    return Object.keys(wordMap).sort().join('');
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
