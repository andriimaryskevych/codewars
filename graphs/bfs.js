const bfs = (node) => {
    console.log(node.value);

    if (node.left) {
        bfs(node.left);
    }

    if (node.right) {
        bfs(node.right);
    }
};

module.exports = bfs;