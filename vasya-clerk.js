/*
The new "Avengers" movie has just been released!
There are a lot of people at the cinema box office standing in a huge line.
Each of them has a single 100, 50 or 25 dollars bill.
An "Avengers" ticket costs 25 dollars.

Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.
Can Vasya sell a ticket to each person and give the change if he initially has no money and sells the tickets strictly in the order people follow in the line?
Return YES, if Vasya can sell a ticket to each person and give the change with the bills he has at hand at that moment.
Otherwise return NO.

Examples:
tickets([25, 25, 50]) // => YES
tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
*/

// Important part of this application
// Money array: array with possible bills. Sequence is important as it will be taken as base order
// money
function tryGetRest (bills, currentMoney, targetBill) {
    for (let i = 0; i < bills.length; i++) {
        // While selected 'destroy' bill can substract smth from bill and there is money in money to do it
        while (targetBill - bills[i] >= 0 && currentMoney[bills[i]] > 0) {
            targetBill -= bills[i];
            currentMoney[bills[i]]--;
        }
    }

    return targetBill === 0;
}

function tickets(bills){
    const moneyArray = [100, 50, 25];
    let money = {
        100: 0,
        50: 0,
        25: 0,
    };

    for (let i = 0, n = bills.length ; i < n; i++) {
        const canGetRest = tryGetRest(moneyArray, money, bills[i] - 25);

        if (!canGetRest) {
            return 'NO';
        }

        money[bills[i]]++;
    }

    return 'YES';
}

console.log(tickets([25]))