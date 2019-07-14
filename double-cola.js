/*
Sheldon, Leonard, Penny, Rajesh and Howard are in the queue for a "Double Cola" drink vending machine; there are no other people in the queue. The first one in the queue (Sheldon) buys a can, drinks it and doubles! The resulting two Sheldons go to the end of the queue. Then the next in the queue (Leonard) buys a can, drinks it and gets to the end of the queue as two Leonards, and so on.

For example, Penny drinks the third can of cola and the queue will look like this:

Rajesh, Howard, Sheldon, Sheldon, Leonard, Leonard, Penny, Penny
Write a program that will return the name of the person who will drink the n-th cola.

Input
The input data consist of an array which contains at least 1 name, and single integer n which may go as high as the biggest number your language of choice supports (if there's such limit, of course).

Output / Examples
Return the single line — the name of the person who drinks the n-th can of cola. The cans are numbered starting from 1.

whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 1) == "Sheldon"
whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 52) == "Penny"
whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 7230702951) == "Leonard"
*/

// It is kind of easy task
// We need to keep track of iterations
// As an example of 3 names
// First iteration lasts 3
// Second iteration lasts 6
// Third - 12
// Creating following sequence
// (1, 2, 3)(1, 1, 2, 2, 3, 3)(1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3)...
function whoIsNext(names, r){
    let currentTotal = names.length;
    let iterationSize = names.length;

    while (currentTotal < r) {
        iterationSize *= 2;
        currentTotal += iterationSize;
    }

    return names[Math.ceil(((r - (currentTotal - iterationSize)) / iterationSize) * names.length) - 1];
}

console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 4));
console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 5));
console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 6));
console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 7));
console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 8));
console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 9));