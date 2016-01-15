// Write an expression that calculates rectangle’s area by given width and height.

console.log('\n-----Problem 3. Rectangle area-----');

var width = 7,
    height = 4;

function area(width, height){
    return width* height ;
}

console.log('Area of rectangle with width %s and height %s is: ', width, height, area(width, height));
