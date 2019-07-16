/*
Your task in order to complete this Kata is to write a function which formats a duration, given as a number of s, in a human-friendly way.
The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and s.
It is much easier to understand with an example:
formatDuration(62)    // returns "1 minute and 2 s"
formatDuration(3662)  // returns "1 hour, 1 minute and 2 s"
For the purpose of this Kata, a year is 365 days and a day is 24 hours.
Note that spaces are important.
Detailed rules
The resulting expression is made of components like 4 s, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.
The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.
A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.
Different components have different unit of times. So there is not repeated units like in 5 s and 1 second.
A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 s is not valid, but it should be just 1 minute.
A unit of time must be used "as much as possible". It means that the function should not return 61 s, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.
*/

function formatDuration (s, count) {
    const a = Object.entries({ year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 }).reduce((b, [n, d]) => {
        (count = Math.floor(s / d)) && b.push(`${count} ${n}${count === 1 ? '' : 's'}`) && (() => s -= count * d)();
        return b;
    }, []);
    return !a.length ? 'now' : a.length === 1 ? a[0] : a.slice(0, a.length - 1).join(', ').concat(' and ').concat(a[a.length-1]);
}

console.log(formatDuration(7321));