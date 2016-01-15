/* Write a script that converts a number in the range [0…999] to words, corresponding to its English pronunciation.*/

console.log('\n-----Problem 8. Number as words-----');

var inputNumber = 273,
    addHundred = ' hundred ';

function units(digit){
    var resultUnit = '';
    switch (digit){
        case 0:resultUnit = 'zero';break;
        case 1:resultUnit = 'one';break;
        case 2:resultUnit = 'two';break;
        case 3:resultUnit = 'three';break;
        case 4:resultUnit = 'four';break;
        case 5:resultUnit = 'five';break;
        case 6:resultUnit = 'six';break;
        case 7:resultUnit = 'seven';break;
        case 8:resultUnit = 'eight';break;
        case 9:resultUnit = 'nine';break;
        case 10: resultUnit = 'ten'; break;
        case 11: resultUnit = 'eleven'; break;
        case 12: resultUnit = 'twelve'; break;
        case 13: resultUnit = 'thirteen'; break;
    }
    return resultUnit;
}

function tenths(tenthDigit){
    var resultTenths = '';
    switch(tenthDigit){
        case 2:resultTenths = 'twenty ';break;
        case 3:resultTenths = 'thirty ';break;
        case 4:resultTenths = 'fourty ';break;
        case 5:resultTenths = 'fifty ';break;
        case 6:resultTenths = 'sixty ';break;
        case 7:resultTenths = 'seventy ';break;
        case 8:resultTenths = 'eighty ';break;
        case 9:resultTenths = 'ninety ';break;
    }
    return resultTenths;
}

function manageTenths(tenthNumber){
    var result = '';
    if (tenthNumber <= 13) {
        result = units(tenthNumber);
    } else if (tenthNumber > 13 && tenthNumber < 20) {
        var secondDigit = tenthNumber % 10;
        result = units(secondDigit) + 'teen';
    } else {
        var resultUnits = tenthNumber % 10;
        if (resultUnits !== 0) {
            result = units(resultUnits);
        }
        var resultTenth = parseInt(tenthNumber / 10);
        result = tenths(resultTenth) + result;
    }
    return result;
}

function hundreds(hundredNumber){
    var result = '';
    var resultTenths = hundredNumber % 100;
    var resultHundreds = parseInt(hundredNumber / 100);
    if (resultTenths !== 0) {
        result = units(resultHundreds) + addHundred + 'and '+ manageTenths(resultTenths);
    } else {
        result = units(resultHundreds) + addHundred;
    }
    return result;
}

function main(inputNumber){
    var finalResult = '';
    if (inputNumber < 100) {
        finalResult = manageTenths(inputNumber);
    } else if(inputNumber >= 100 && inputNumber <= 999){
        finalResult = hundreds(inputNumber);
    } else {
        finalResult = 'Insert number between 0 and 999!';
    }
    return finalResult;
}

console.log(inputNumber);
console.log(main(inputNumber));



