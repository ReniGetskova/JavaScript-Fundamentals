// Write an expression that checks if given integer is odd or even.

console.log('-----Problem 1. Odd or Even-----');

var number = 4;

function isEven(number){
    return(number % 2 === 0)? true : false;
}

function isOdd(number){
    return !isEven(number);
}
console.log('%s is even? -> ', number, isEven(number));
console.log('%s is odd? -> ', number, isOdd(number));