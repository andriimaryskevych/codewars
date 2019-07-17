// No need to validate input, it is always correct

const romanNumbers = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

const arabianNumbers = { thousand: 1000, hundred: 100, ten: 10, one: 1 };
const arabRomeMap = {
    thousand: { low: 'M'},
    hundred: { low: 'C', middle: 'D', top: 'M' },
    ten: { low: 'X', middle: 'L', top: 'C' },
    one: { low: 'I', middle: 'V', top: 'X' },
};
const orderdArabianNames = [
    'thousand',
    'hundred',
    'ten',
    'one'
]

const abstractTransformer = (value, { low, middle, top }) => {
    switch (value) {
        case 1:
        case 2:
        case 3:
            return `${low}`.repeat(value);
        case 4:
            return `${low}${middle}`;
        case 5:
            return `${middle}`;
        case 6:
        case 7:
        case 8:
            return `${middle}`.concat(`${low}`.repeat(value - 5));
        case 9:
            return `${low}${top}`;
    }
};

class RomanNumerals {
    static fromRoman (string) {
        const a = string.split('').map(symbol => romanNumbers[symbol]);

        for (let i = 0; i < a.length; i++) {
            if (a[i + 1] > a[i]) a[i] *= -1
        }

        return a.reduce((a, c) => a + c, 0);
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

        return orderdArabianNames.reduce((a, c) => {
            if (parsed[c]) {
                return a.concat(abstractTransformer(parsed[c], arabRomeMap[c]));
            }

            return a;
        }, '');
    }
}
