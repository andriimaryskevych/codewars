const Node = require('./node');
const Tree = require('./tree');
const bfs = require('./bfs');

const root = new Node('root');

const left = new Node('left');
const right = new Node('right');

const leftLeft = new Node('leftLeft');
const leftRight = new Node('leftRight');

root.left = left;
root.right = right;

left.left = leftLeft;
leftLeft.left = leftRight;

// const leftRightRigth = new Node('leftRightRigth');
// leftRight.right = leftRightRigth;

// const leftRightRigthRigth = new Node('leftRightRigthRigth');
// leftRightRigth.right = leftRightRigthRigth;

bfs(root);

const tree = new Tree(root);
console.log(tree.getHeigth());