/* Write a script that finds the greatest of given 5 variables.
 Use nested if statements.*/

console.log('\n-----Problem 7. The biggest of five numbers-----');

var a = 2,
    b = 5,
    c = 2,
    d = 4,
    e = 1,
    biggest = a;

if (a < b) { 
    biggest = b;
} else if (a < c) {
    biggest = c;
} else if (a < d) {
    biggest = d;
} else if (a < e) {
    biggest = e;
}

console.log('Biggest numbers of %s, %s, %s, %s, %s is:', a, b, c, d, e, biggest);


