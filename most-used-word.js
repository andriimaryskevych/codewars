function topThreeWords(text) {
    const regex = /[.,\s!?/]/g;

    return Object.entries(
            text
            .split('\n')
            .join(' ')
            .split(' ')
            .map(word => word.replace(regex, ''))
            .map(word => word.replace(/^[']/g, ''))
            .filter(Boolean)
            .map(word => word.toLowerCase())
            .reduce((a, c) => {
                a[c] = a[c] || 0;
                a[c]++;

                return a;
            }, {})
        )
        .map(([key, value]) => ({ word: key, count: value }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 3)
        .map(a => a.word)
}

const a = `  , e   .. ' `;

console.log(topThreeWords(a));