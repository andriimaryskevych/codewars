const memory = {};

const subsequence = (first, second) => {
    if (first === '' || second === '') return '';

    const index = first.indexOf(second[0]);

    const firstMod = index === -1 ? first : first.slice(index + 1);
    const stepResult = index === -1 ? '' : second[0];

    let arr = [];

    for (let i = 1; i < second.length; i++) {
        const key = `${firstMod}:${second.slice(i)}`;

        memory[key] = memory[key] || subsequence(firstMod, second.slice(i));
        arr.push(memory[key]);
    }

    return stepResult + arr.reduce((a, c) => c.length > a.length ? c : a, '');
};

const here = (first, second) => {
    let arr = [];

    for (let i = 0; i < second.length; i++) {
        const key = `${first}:${second.slice(i)}`;

        memory[key] = memory[key] || subsequence(first, second.slice(i));
        arr.push(memory[key]);
    }

    return arr.reduce((a, c) => c.length > a.length ? c : a, '');
};

class SignMaster {
    constructor() {
        this.add = 0;
        this.rem = 0;
        this.none = 0;
    }

    changePrices (prices) {
        Object.keys(prices).forEach(key => {
            this[key] = prices[key];
        });
    }

    estimatePrice (oldSign, newSign) {
        const lcs = here(oldSign, newSign);

        const os = oldSign.split('');
        const ns = newSign.split('');
        const ls = lcs.split('');

        let oi = 0;
        let ni = 0;
        let li = 0;

        const arr = [];

        while (oi !== os.length && ni !== ns.length) {
            if ((os[oi] === ns[ni]) && (ns[ni] === ls[li])) {
                arr.push({ value: ls[li], status: 'none' });

                oi++;
                ni++;
                li++;
            } else if (os[oi] === ls[li]) {
                arr.push({ value: ns[ni], status: 'add' });

                ni++;
            } else if (ns[ni] === ls[li]) {
                arr.push({ value: os[oi], status: 'rem' });

                oi++;
            } else {
                arr.push({ value: ns[ni], status: 'add' });
                arr.push({ value: os[oi], status: 'rem' });

                ni++;
                oi++;
            }
        }

        return arr.reduce((a, c) => a + this[c.status], 0);
    }
}

const a = new SignMaster();

a.changePrices({ add: 5, rem: 4 });
console.log(a.estimatePrice('hugmyckuvpdt6xyldit8hqlj9tztjlri19k9asch96hyepto24eu3dimyolh8sg1ipz6rsh5mi','z5qxnwpi4ybfuoez5mi2m3prmsl9kggaw6ogvinqf8jd152bxbh5b3xr453nwxkfno7fp03haor'));
