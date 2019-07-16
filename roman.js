// No need to validate input, it is always correct

const romanNumbers = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    // Unexisted data for mock purpose
    XX: 5000,
    XXX: 10000,
};

const arabianNumbers = { thousand: 1000, hundred: 100, ten: 10, one: 1 };
const orderdArabianNames = [
    'thousand',
    'hundred',
    'ten',
    'one'
];

class RomanNumerals {
    static fromRoman (string) {
        // Follow the symbol until other one is reached
    }

    static toRoman (number) {
        const parsed = Object.entries(arabianNumbers).reduce((a, [name, size]) => {
            const count = Math.floor(number / size);

            if (count) {
                a[name] = count;
                number %= size;
            }

            return a;
        }, {});

        orderdArabianNames.reduce
    }
}

RomanNumerals.toRoman(1234);

function abstractTransformer(value, { low, middle, top }) {
    switch (value) {
        case 1:;
        case 2:;
        case 3:;
            return `${low}`.repeat(value);
        case 4:
            return `${low}${middle}`;
        case 5:
            return `${middle}`;
        case 6:;
        case 7:;
        case 8:
            return `${middle}`.concat(`${low}`.repeat(value - 5));
        case 9:
            return `${low}${top}`;
    }
}

for(let i = 1; i < 10; i++) {
console.log(abstractTransformer(i, {
    low: 'X',
    middle: 'L',
    top: 'C',
}))
}

