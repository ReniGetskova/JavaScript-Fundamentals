console.log('Problem 6. Larger than neighbours');
/*Write a function that checks if the element at given position in given array of integers is bigger than its two
 neighbours (when such exist).*/

function largerThanNeighbours(position, array) {
    var i,
        len = array.length;

    if (position > len - 1) {
        console.log('Invalid position! Position must be between 0 and %d', len - 1);
    } else if (position == len - 1) {
        if (array[position] > array[position - 1]) {
            console.log('Last element %d is larger than his neighbour %d', array[position], array[position - 1]);
        } else {
            console.log('Last element %d is NOT larger than his neighbour %d', array[position], array[position - 1]);
        }
    } else if (position == 0) {
        if (array[position] > array[position + 1]) {
            console.log('First element %d is larger than his neighbour %d', array[position], array[position + 1]);
        }
        else {
            console.log('First element %d is NOT larger than his neighbour %d', array[position], array[position + 1]);
        }
    } else {
        if (array[position -1] < array[position] && array[position] > array[position + 1]) {
            console.log('Element %d on position %d is larger than his neighbours %d and %d', array[position], position, array[position - 1], array[position + 1]);
        } else {
            console.log('Element %d on position %d is NOT larger than his neighbours %d and %d', array[position], position, array[position - 1], array[position + 1]);
        }
    }
}
function testLargerThanNeighbours() {
    var array = [3, 2, 1, 5, 4, 7, 6, 11, 8, 9, 12, 15, 20, 13, 17];
    console.log(array);
    largerThanNeighbours(0, array);
    largerThanNeighbours(2, array);
    largerThanNeighbours(3, array);
    largerThanNeighbours(14,array);
    largerThanNeighbours(15,array);
}
testLargerThanNeighbours();
