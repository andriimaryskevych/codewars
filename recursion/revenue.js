const revenues = [
    10,
    34,
    2000,
    45,
    78,
    5,
    1
];

// Head recursion
const getMaxRevenueH = (revenues, max = 0, index = 0) => {
    if (revenues.length === index) {
        return max;
    }

    if (revenues[index] > max) {
        max = revenues[index];
    }

    return getMaxRevenueH(revenues, max, index + 1);
};

console.log(getMaxRevenueH(revenues));


// Head recursion
const getMaxRevenueT = (revenues, index = 0) => {
    if (revenues.length === index) {
        return 0;
    }

    let max = getMaxRevenueT(revenues, index + 1);

    if (revenues[index] > max) {
        max = revenues[index];
    }

    console.log(max)

    return max;
};

console.log(getMaxRevenueT(revenues));


