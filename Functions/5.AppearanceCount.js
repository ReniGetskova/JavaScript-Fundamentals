console.log('Problem 5. Appearance count');
/*Write a function that counts how many times given number appears in given array.
 Write a test function to check if the function is working correctly.*/

function appearanceCount(number, array) {
    var i,
        len,
        count = 0;

    for(i = 0, len = array.length; i < len; i += 1) {
        if (number === array[i]) {
            count += 1;
        }
    }
    return 'Element ' +  number + ' is appear ' + count + ' times in array';
}
console.log(appearanceCount(100, [2, 100, 45, 63, 100, 6, 24, 67, 4, 100, 8, 91, 100, 36, 42, 51, 100, 17, 92]));
