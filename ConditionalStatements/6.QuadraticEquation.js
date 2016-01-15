/* Write a script that reads the coefficients a, b and c of a quadratic equation ax2 + bx + c = 0 and solves it (prints its real roots).
 Calculates and prints its real roots.
 Note: Quadratic equations may have 0, 1 or 2 real roots.*/

console.log('\n-----Problem 6. Quadratic equation-----');

var a = 2,
    b = 5,
    c = -3,
    determinant = b * b - 4 * a * c;

if (determinant === 0) {
    console.log('The quadratic equation has two equal roots x1 = x2 = %s', -b / (2 * a));
} else if (determinant > 0) {
    console.log('The quadratic equation has two roots x1 = %s and x2 = %s', (-b - Math.sqrt(determinant)) / (2 * a), (-b + Math.sqrt(determinant)) / (2 * a));
} else if (determinant < 0) {
    console.log('The quadratic equation has not real roots');
}


