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
const moneyArray = [100, 50, 25];

function getRest (money, bill) {
    const needToGiveBack = bill - 25;

    if (needToGiveBack === 0) {
        return {
            money,
            success: true,
        }
    }

    for (let i = 0; i < moneyArray.length; i++) {
        while (bill - moneyArray[i] > 0) {
            if (money[moneyArray[i]] === 0) {
                return {
                    success: falase
                }
            }
            
            bill -= moneyArray[i];
            money[moneyArray[i]]--;
        }
    }
}

function tickets(bills){
    let money = {
        100: 0,
        50: 0,
        25: 0,
    };

    for (let i = 0, n = bills.length ; i < n; i++) {
        const restResponse = getRest(money, bill[i]);

        if (!restResponse.success) {
            return 'NO';
        }

        money[bill[i]]++;
    }

    return 'YES';
}

console.log(tickets([25, 100]));