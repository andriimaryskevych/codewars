const memory = {};

const subsequence = (first, second) => {
    if (first === '' || second === '') return '';

    const index = first.indexOf(second[0]);

    const firstMod = index === -1 ? first : first.slice(index + 1);
    const stepResult = index === -1 ? '' : second[0];

    let arr = [];

    for (let i = 1; i < second.length; i++) {
        const key = `${firstMod}:${second.slice(i)}`;

        let value;
        if (key in memory) {
            value = memory[key];
        } else {
            value = subsequence(firstMod, second.slice(i));

            memory[key] = value;
        }

        arr.push(value);
    }

    return stepResult + arr.reduce((a, c) => c.length > a.length ? c : a, '');
};

const here = (first, second) => {
    let arr = [];

    for (let i = 0; i < second.length; i++) {
        arr.push(subsequence(first, second.slice(i)));
    }

    return arr.reduce((a, c) => c.length > a.length ? c : a, '');
};

console.log(here('hugmyckuvpdt6xyldit8hqlj9tztjlri19k9asch96hyepto24eu3dimyolh8sg1ipz6rsh5mi','z5qxnwpi4ybfuoez5mi2m3prmsl9kggaw6ogvinqf8jd152bxbh5b3xr453nwxkfno7fp03haor'));
