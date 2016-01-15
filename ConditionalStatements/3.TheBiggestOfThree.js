/* Write a script that finds the biggest of three numbers.
 Use nested if statements. */

console.log('\n-----Problem 3. The biggest of Three-----');

var a = 3,
    b = 5,
    c = 2;
//first way
function maxNumber(a, b, c){
    return Math.max(a, Math.max(b, c));
}

console.log('Max of three numbers %s, %s and %s is: ',a, b, c, maxNumber(a, b, c));

 //second way with nested if statements
console.log('Second way with nested if statements');
function maxNumberWithNestedIf(a, b, c){
    if(a > b && a > c) {
        console.log('Max number is: ', a);
    } else if(b > a && b > c) {
        console.log('Max number is: ', b);
    } else{
        console.log('Max number is: ', c);
    }
}


maxNumberWithNestedIf(a, b, c);