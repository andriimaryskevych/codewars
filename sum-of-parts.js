/*
Let us consider this example (array written in general format):

ls = [0, 1, 3, 6, 10]

Its following parts:

ls = [0, 1, 3, 6, 10]
ls = [1, 3, 6, 10]
ls = [3, 6, 10]
ls = [6, 10]
ls = [10]
ls = []

*/

function partsSums(array) {
    return array.reduceRight((a, c) => {
        a.push(c + a[a.length - 1]);
        return a;
    }, [0]).reverse();
};

console.log(partsSums([744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]));
