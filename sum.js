/*
    We need to sum big numbers and we require your help.

    Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

    Example
    add("123", "321"); -> "444"
    add("11", "99"); -> "110"
    Notes
    The input numbers are big.
    The input is a string of only digits
    The numbers are positives
*/

function add(a, b) {
    const diff = a.length - b.length;

    if (diff > 0) {
        b = '0'.repeat(Math.abs(diff)).concat(b);
    } else {
        a = '0'.repeat(Math.abs(diff)).concat(a);
    }

    let part = 0;
    let res = [];

    for (let i = a.length - 1; i >= 0; i--) {
        let sum = Number(a.charAt(i)) + Number(b.charAt(i)) + part;

        if (sum >= 10) {
            sum -= 10;
            part = 1;
        } else {
            part = 0;
        }

        res.push(sum);
    }

    if (part === 1) {
        res.push(1);
    }

    return res.reverse().join('');
}

console.log(add("1372", "69"));
