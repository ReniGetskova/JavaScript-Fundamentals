// Write an expression that checks if given point P(x, y) is within a circle K(O, 5).

console.log('\n-----Problem 6. Point in Circle-----');

//even position is x coordinate
//odd position is y coordinate
var coordinates = [0, 1, -5, 0, -4, 5, 1.5, -3, -4, -3.5, 100, -30, 0, 0, 0.2, -0.8, 0.9, -4.93, 2, 2.655];
var circleCoordinates = [0, 0];
var circleRadius = 5;
var result = [];
var tempResult;

for(var i = 0; i < coordinates.length; i+=2){
    tempResult = ((Math.pow(coordinates[i] - circleCoordinates[0], 2) + Math.pow(coordinates[i+1] - circleCoordinates[1], 2))
    <= Math.pow(circleRadius, 2)) ? true : false;
    result.push(tempResult);
}

console.log(result);