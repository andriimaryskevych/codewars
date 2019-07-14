/*
Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

Input to the function is guaranteed to be a single string.

Examples
Valid inputs:

1.2.3.4
123.45.67.89
Invalid inputs:

1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089
*/

function isValidIP(str) {
    const splited = str.split('.');

    if (splited.length !== 4) {
        return false;
    }

    for (let i = 0; i < 4; i++) {
        const number = Number(splited[i]);

        if (isNaN(number)) {
            return false;
        }

        if (number > 255 || number < 0) {
            return false;
        }

        if (number !== 0 && splited[i].charAt(0) === '0') {
            return false;
        }
    }

    return true;
}

console.log(isValidIP('01.02.03.04'));