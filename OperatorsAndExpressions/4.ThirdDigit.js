// Write an expression that checks for given integer if its third digit (right-to-left) is 7.

console.log('\n-----Problem 4. Third digit-----');

var numbers = [5, 701, 1732, 9703, 877, 777877, 9999799];
var result = [];

function is3thDigit7(number){
    var digit = 1;
    if(number.toString().length >= 3){
        digit = number.toString()[number.toString().length - 3];
    }
    return (digit % 7 === 0)? true : false;
}

for(var i = 0; i < numbers.length; i++){
    result.push(is3thDigit7(numbers[i]));
}

console.log(numbers);
console.log(result);