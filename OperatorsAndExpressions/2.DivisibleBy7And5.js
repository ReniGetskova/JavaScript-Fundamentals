// Write a boolean expression that checks for given integer if it can be divided (without remainder) by 7 and 5 in the same time.

console.log('\n-----Problem 2. Divisible by 7 and 5-----');

var number = 35;

function devisible(number){
    return (number % 5 === 0 && number % 7 === 0)? true : false;
}

console.log('\'%s\' devisible by 7 and 5? -> ', number, devisible(number));