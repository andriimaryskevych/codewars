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
    const [a, b, c] = arr.slice(0,3).map(equalize);

    if (a !== b && a !== c) {
        return arr[0];
    }

    let sameValue;

    if (a === b) {
        if (a === c) {
            sameValue = a;
        } else {
            return arr[2];
        }
    } else {
        if (a === c) {
            return arr[1];
        } else {
            return arr[0];
        }
    }

    for (let i = 0, n = arr.length; i < n; i++) {
        if (equalize(arr[i]) !== sameValue) {
            return arr[i];
        }
    }
}

console.log(findUniq(['silvia', 'vasili', 'victor']));
