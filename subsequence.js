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

console.log(here('oasdfafdsafdasfasfsafasfsafdts', 'totsafdasfdsafdsafdesasfdafafd'));
