/* Write a boolean expression for finding if the bit #3 (counting from 0) of a given integer.
 The bits are counted from right to left, starting from bit #0.
 The result of the expression should be either 1 or 0. */

console.log('\n-----Problem 5. Third bit-----');

var numbers = [5, 8, 0, 15, 5343, 62241];
var binaryNumbers = [];

for(var i = 0; i < numbers.length; i++){
    binaryNumbers.push(numbers[i].toString(2));
}

//complete to 32 bits number
for (var i = 0; i < binaryNumbers.length; i++){
    while (binaryNumbers[i].length < 32){
        binaryNumbers[i] = '0' + binaryNumbers[i];
    }
}
console.log(binaryNumbers);
console.log('\n');

var thirdDigit = [];

for(var i = 0; i < binaryNumbers.length; i++){
   thirdDigit.push(binaryNumbers[i][28]);
}

console.log(thirdDigit);


