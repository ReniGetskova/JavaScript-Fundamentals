// Write an expression that checks if given positive integer number n (n ? 100) is prime.

console.log('\n-----Problem 7. Is prime-----');

var testNumbers = [1, 2, 3, 4, 9, 37, 97, 51, -3, 0];
var result = [];

function isPrimeNumber(number){
    if (number < 2) {
        return false;
    }
    for(var i = 2; i <= Math.sqrt(number); i++){
        if(number % i === 0){
            return false;
        }
    }
    return true;
}
for(var i = 0; i < testNumbers.length; i++){
    result.push(isPrimeNumber(testNumbers[i]));
}

console.log(testNumbers);
console.log(result);