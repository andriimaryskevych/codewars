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
    const result = new Array(array.length + 1);
    const length = result.length;
    result[length - 1] = 0;

    for (let i = length - 2; i >= 0; i--) {
        result[i] = result[i + 1] + array[i];
    }

    return result;
};

console.log(partsSums([744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]));
