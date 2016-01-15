// Write an expression that calculates trapezoid's area by given sides a and b and height h.

console.log('\n-----Problem 8. Trapezoid area-----');

// i = a
// i + 1 = b
// i + 2 = h
var trapezoidProperties = [5, 7, 12, 2, 1, 33, 8.5, 4.3, 2.7, 100, 200, 300, 0.222, 0.333, 0.555];
var areaResult = [];
var temResult;

for (var i = 0; i < trapezoidProperties.length; i+=3){
    temResult = ((trapezoidProperties[i] + trapezoidProperties[i+1]) / 2) * trapezoidProperties[i+2];
    areaResult.push(temResult);
}

console.log(areaResult);