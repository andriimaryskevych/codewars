function maxSum(root) {
    if (!root) {
        return 0;
    }

    const left = maxSum(root.left);
    const right = maxSum(root.right);

    const max = left > right ? left : right;

    return max + root.value;
}