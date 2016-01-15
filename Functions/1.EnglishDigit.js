console.log('Problem 1. English digit');
/*Write a function that returns the last digit of given integer as an English word.*/

function englishDigit(number){
    var lastDigit;
    if(!(+number)){
        return 'Function parameter must be a integer number';
    }
    //convert to integer just in case
    number = parseInt(number);
    lastDigit = number % 10;
    switch (lastDigit){
        case 0: return 'zero';
        case 1: return 'one';
        case 2: return 'two';
        case 3: return 'three';
        case 4: return 'four';
        case 5: return 'five';
        case 6: return 'six';
        case 7: return 'seven';
        case 8: return 'eight';
        case 9: return 'nine';
    }
}
console.log(englishDigit(512));
