const mazeSize = 8;
const barriers = [
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
];

const getMaze = (size, barriers) => {
    const maze = [];

    for (let i = 0; i < size; i++) {
        maze.push(new Array(size).fill(1));
    }

    barriers.forEach(([x, y]) => {
        maze[x][y] = 0;
    });

    return maze;
};

const printMaze = () => {
    const maze = getMaze(mazeSize, barriers);

    console.log('\u250c' + new Array(mazeSize * 2).fill('\u2500').join('') + '\u2510');

    for (let i = 0; i < mazeSize; i++) {
        let row = '';
        row += '\u2502'
        for (let j = 0; j < mazeSize; j++) {
            row += `${maze[i][j] ? '\u2591' : '\u2585'} `;
        }

        row += '\u2502';
        console.log(row);
    }

    console.log('\u2514' + new Array(mazeSize * 2).fill('\u2500').join('') + '\u2518');
};


printMaze();