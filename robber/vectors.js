const getVector = (pointA, pointB) => {
    const x = pointB[0] - pointA[0];
    const y = pointB[1] - pointA[1];

    return [x, y];
};

const getVectorLength = (vector) => {
    const sum = vector.reduce((a, c) => {
        a += Math.pow(c, 2);

        return a;
    }, 0)

    return Math.sqrt(sum);
};

const getUnitVector = (vector) => {
    const length = getVectorLength(vector);

    return vector.map(coordinate => coordinate / length);
};

const addVectors = (vectorA, vectorB) => vectorA.map((coordinate, index) => coordinate + vectorB[index]);

const multiplyVector = (vector, scalar) => vector.map(coordinate => coordinate * scalar);
