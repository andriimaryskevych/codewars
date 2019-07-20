/*
Background
My TV remote control has arrow buttons and an OK button.

I can use these to move a "cursor" on a logical screen keyboard to type words...

The screen "keyboard" layout looks like this
*/

var tvRemote = function(word) {
    const remote = [
        ['a', 'b', 'c', 'd', 'e', '1', '2', '3'],
        ['f', 'g', 'h', 'i', 'j', '4', '5', '6'],
        ['k', 'l', 'm', 'n', 'o', '7', '8', '9'],
        ['p', 'q', 'r', 's', 't', '.', '@', '0'],
        ['u', 'v', 'w', 'x', 'y', 'z', '_', '/'],
    ];

    const getCharLocation = (char) => {
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 8; j++) {
                if (remote[i][j] === char) {
                    return [i, j];
                }
            }
        }
    };

    const getPathLength = ([x1, y1], [x2, y2]) => {
        return Math.abs(x1 - x2) + Math.abs(y1 - y2);
    };

    let currentLocation = [0, 0];
    let counter = 0;

    for (let i = 0; i < word.length; i++) {
        const nextLocation = getCharLocation(word[i]);
        const pathLength = getPathLength(currentLocation, nextLocation);

        counter += pathLength;
        currentLocation = nextLocation;
    }

    // Ok button press
    counter += word.length;

    return counter;
}

console.log(tvRemote('codewars'));