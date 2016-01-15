/*Write an expression that checks for given point P(x, y) if it is within the circle K( (1,1), 3) and out of the rectangle
 R(top=1, left=-1, width=6, height=2).*/

console.log('\n-----Problem 9. Point in Circle and outside Rectangle-----');

// i = x
// i + 1 = y
var points = [1, 2, 2.5, 2, 0, 1, 2.5, 1, 2, 0, 4, 0, 2.5, 1.5, 2, 1.5, 1, 2.5, -100, -100],
    circleCenter = [1, 1],
    radius = 3,
    top = 1,
    left = -1,
    width = 6,
    right = left + width,
    height = 2,
    bottom = top - height,
    result = [],
    isInCircle,
    isInRectangle,
    tempResult;

for(var i = 0; i < points.length; i+=2){
   isInCircle = (Math.sqrt( (points[i] - circleCenter[0]) * (points[i] - circleCenter[0]) + (points[i+1] - circleCenter[1]) * (points[i+1] - circleCenter[1]))
   <= radius ) ? true : false;
   isInRectangle = points[i] >= left && points[i] <= right && points[i+1] <= top && points[i+1] >= bottom;
   tempResult = (isInCircle && !isInRectangle)? 'yes' : 'no';
   result.push(tempResult);
}

//for points (2.5,2) and (2.5,1.5) - result is 'yes'.
console.log(result);


