var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

const robberPosition = [10, 10];
const robberSpeed = 1;

const doorPosition = [100, 180];

const guardPosition = [200, 0];
const guardSpeed = 1.4;

const directionVector = getVector(robberPosition, doorPosition);
const unitDirectionVector = getUnitVector(directionVector);

const totalSteps = getVectorLength(directionVector) / robberSpeed;

// for simplicity, draw only first 10 seconds if the run

let guardIterationStepPosition = guardPosition;

for (let i = 0; i < 2000; i++) {
    const iterationStep = multiplyVector(unitDirectionVector, i * robberSpeed);
    const stepPosition = addVectors(robberPosition, iterationStep);

    ctx.fillRect(
        stepPosition[0],
        stepPosition[1],
        1,
        1
    );

    // calculate guard position

    const guardIterationStepVector = getVector(guardIterationStepPosition, stepPosition);
    const unitGuardDirectionVector = getUnitVector(guardIterationStepVector);
    const guardIterationStep = multiplyVector(unitGuardDirectionVector, guardSpeed);
    const nextGuardPosition = addVectors(guardIterationStepPosition, guardIterationStep);

    ctx.fillRect(
        nextGuardPosition[0],
        nextGuardPosition[1],
        1,
        1
    );

    guardIterationStepPosition = nextGuardPosition;

    const length = getVectorLength(getVector(stepPosition, guardIterationStepPosition));

    if (length < 1) {
        setTimeout(() => { alert('Catched'); });

        break;
    }

    if (stepPosition[1] >= 200) {
        setTimeout(() => { alert('Free'); });

        break;
    }
}