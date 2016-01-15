console.log('Problem 1. Reverse string');
/*Write a JavaScript function that reverses a string and returns it.*/

function reverseString(str){
    var i,
        len,
        reverseStr = '';
    for(len = str.length, i = len - 1; i >= 0; i -= 1) {
        reverseStr += str[i];
    }
    return reverseStr;
}
console.log('sample in reverse order: ', reverseString('sample'));