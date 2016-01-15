/*Write a script that shows the sign (+, - or 0) of the product of three real numbers, without calculating it.
 Use a sequence of if operators.*/

console.log('\n-----Problem 2. Multiplication Sign-----');

// i = a
// i + 1 = b
// i + 2 = c
var testValues = [5, 2, 2, -2, -2, 1, -2, 4, 3, 0, -2.5, 4, -1, -0.5, -5.1];
var result = [];

for (var i = 0; i < testValues.length; i+=3){
    if(testValues[i] > 0){
        if(testValues[i+1] > 0 && testValues[i+2] > 0){
            result.push('+');
        } else if(testValues[i+1] < 0 && testValues[i+2] < 0){
            result.push('+');
        } else{
            result.push('-');
        }
    } else if (testValues[i] < 0){
        if(testValues[i+1] > 0 && testValues[i+2] > 0){
            result.push('-');
        } else if(testValues[i+1] < 0 && testValues[i+2] < 0){
            result.push('-');
        } else{
            result.push('+');
        }
    } else{
        result.push(0);
    }
}

console.log(result);
