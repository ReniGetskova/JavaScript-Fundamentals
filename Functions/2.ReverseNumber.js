console.log('Problem 2. Reverse number');
/*Write a function that reverses the digits of given decimal number.*/

function reverseNumber(number) {
    var result = '',
        resultString,
        i,
        len;

    if(!(+number)){
        return 'Function parameter must be a number';
    }
    resultString = number.toString();
    for(len = resultString.length, i = len - 1; i >=0; i-=1){
        result += resultString[i];
    }
    return result;
}
console.log(reverseNumber(256));

