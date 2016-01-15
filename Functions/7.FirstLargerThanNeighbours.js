console.log('Problem 7. First larger than neighbours');
/*Write a function that returns the index of the first element in array that is larger than its neighbours or -1, if there’s no such element.
 Use the function from the previous exercise.*/

function largerThanNeighboursSecondWay(position, array) {
    var i,
        isLarger = true,
        len = array.length;

    if (position > len - 1) {
        isLarger = false;
    } else if (position == len - 1) {
        if (array[position] > array[position - 1]) {
            isLarger = true;
        } else {
            isLarger = false;
        }
    } else if (position == 0) {
        if (array[position] > array[position + 1]) {
            isLarger = true;
        } else {
            isLarger = false;
        }
    } else {
        if (array[position -1] < array[position] && array[position] > array[position + 1]) {
            isLarger = true;
        } else {
            isLarger = false;
        }
    }
    return isLarger;
}
function firstLargerThanNeighbours(array) {
    var i,
        isLarger,
        len;
    console.log(array);
    for(i = 0, len = array.length; i < len; i += 1) {
        isLarger = largerThanNeighboursSecondWay(i, array);
        //console.log(isLarger);
        if (isLarger) {
            return 'First element that is larger than his neighbours is: ' + array[i];
        }
    }
    if (!isLarger) {
        return -1;
    }
}
console.log(firstLargerThanNeighbours([ -2, -1, 1, 1, 4, 4, 6, 6, 8, 9, 12, 15, 15, 13, 1 ]));
console.log(firstLargerThanNeighbours([ -2, -1, 1, 1, 4, 4, 6, 6, 8, 9, 12, 15, 17, 13, 20 ]));
