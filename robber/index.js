var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

const robberPosition = [80, 10];
const robberSpeed = 1;

const doorPosition = [100, 200];

const directionVector = getVector(robberPosition, doorPosition);
const unitDirectionVector = getUnitVector(directionVector);

const totalSteps = getVectorLength(directionVector) / robberSpeed;

for (let i = 0; i < Math.floor(totalSteps); i++) {
    const iterationStep = multiplyVector(unitDirectionVector, i * robberSpeed);
    const stepPosition = addVectors(robberPosition, iterationStep);

    ctx.fillRect(
        stepPosition[0],
        stepPosition[1],
        1,
        1
    );
}