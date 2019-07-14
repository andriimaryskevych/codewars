const letters = 'abcdefghijklmnopqrst'

function alphabetPosition(text) {
    return text
        .split('')
        .map(a => a.charCodeAt(0))
        .join(' ');
};

console.log(alphabetPosition('Hello'));
