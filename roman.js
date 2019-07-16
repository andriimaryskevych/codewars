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
    const fromCenter = value - middle;

    // It is 5 or bigger
    if (fromCenter >= 0) {
        const fromTop = top - value;

        if (fromTop)
    }
}

abstractTransformer(7, {
    low: 1,
    middle: 5,
    top: 10,
})

