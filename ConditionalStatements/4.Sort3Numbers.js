/* Sort 3 real values in descending order.
 Use nested if statements.
 Note: Don’t use arrays and the built-in sorting functionality.*/

console.log('\n-----Problem 4. Sort 3 numbers-----');
var a = 3,
    b = 2,
    c = 5,
    temp;

console.log('Not sorted: ', a, b, c);

if(a < c){
    temp = a;
    a = c;
    c = temp;
} if(a < b) {
    temp = a;
    a = b;
    b = temp;
}if(b < c) {
    temp = b;
    b = c;
    c = temp;
}

console.log('Sorted: ', a, b, c);


