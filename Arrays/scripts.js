console.log('Problem 1. Increase array members');
/*Write a script that allocates array of 20 integers and initializes each element by its index multiplied by 5.
 Print the obtained array on the console.*/

function increaseArrayMembers(){
    var i,
        arr = [],
        len = 20;

    for(i = 0; i < len; i+=1){
        arr.push(i * 5);
    }
    console.log(arr);
}
increaseArrayMembers();

console.log('\nProblem 2. Lexicographically comparison1');
/*Write a script that compares two char arrays lexicographically (letter by letter).*/

function lexicographicallyComparison(){
    //accept that arrays are strings of characters
    var i,
        areSame = true,
        firstWord = 'abc',
        secondWord = 'aba',
        firstLen = firstWord.length,
        secondLen = secondWord.length;
    console.log('Array are: \'%s\' and \'%s\' ', firstWord, secondWord);
    if (firstLen !== secondLen) {
        areSame = false;
        console.log('Arrays are with different length. In this way lexicographically first is array with smaller length:');
        if (firstLen < secondLen) {
            console.log(firstWord);
        } else {
            console.log(secondWord);
        }
    } else {
        console.log('Arrays are with the same length.');
        for(i = 0; i < firstLen; i+=1)
        {
            if (firstWord[i] === secondWord[i]) {
                continue;
            } else {
                areSame = false;
                if (firstWord[i] < secondWord[i]) {
                    console.log('Lexicographically first is:', firstWord);
                    break;
                } else {
                    console.log('Lexicographically first is:', secondWord);
                }
            }
        }
        if (areSame) {
            console.log('Arrays are exactly the same');
        }
    }

}
lexicographicallyComparison();

console.log('\nProblem 3. Maximal sequence');
/*Write a script that finds the maximal sequence of equal elements in an array.*/

function maximalSequence(){
    var i,
        count = 1,
        maxCount = -1,
        position = 0,
        resultArray = [],
        array = [2, 1, 1, 2, 3, 3, 2, 2, 2, 1],
        len = array.length;
    for(i = 1; i < len ; i+=1){
        if (array[i - 1] === array[i]) {
            count += 1;
            if (maxCount < count) {
                position = i + 1 - count;
                maxCount = count;
            }
        } else {
            count = 1;
        }
    }
    //console.log(position);
    //console.log(maxCount);
    resultArray = array.splice(position, maxCount);
    console.log(resultArray);
}
maximalSequence();

console.log('\nProblem 4. Maximal increasing sequence');
/*Write a script that finds the maximal increasing sequence in an array.*/

function maximalIncreasingSequence(){
    var i,
        count = 1,
        maxCount = -1,
        position = 0,
        resultArray = [],
        array = [3, 2, 3, 4, 2, 2, 4],
        len = array.length;

    for(i = 1; i < len ; i+=1){
        if (array[i] - array[i - 1] === 1) {
            count += 1;
            if (maxCount < count) {
                position = i + 1 - count;
                maxCount = count;
            }
        } else {
            count = 1;
        }
    }
    //console.log(position);
    //console.log(maxCount);
    resultArray = array.splice(position, maxCount);
    console.log(resultArray);
}
maximalIncreasingSequence();

console.log('\nProblem 5. Selection sort');
/* Sorting an array means to arrange its elements in increasing order.
    Write a script to sort an array.
    Use the selection sort algorithm: Find the smallest element, move it at the first position, find the smallest from the
    rest, move it at the second position, etc. */

function selectionSort(array) {
    var i,
        j,
        min,
        temp,
        len = array.length;

    for(i = 0; i < len; i+=1) {
        min = i;
        for(j = i + 1; j < len; j+=1) {
            if(array[j] < array[min]) {
                min = j;
            }
        }
        temp = array[i];
        array[i] = array[min];
        array[min] = temp;
    }
    return array;
}
console.log(selectionSort([5, 2, 1, 4, 6, 9, 7, 1, 10, 0, 99]));

console.log('\nProblem 6. Most frequent number');
/*Write a script that finds the most frequent number in an array.*/

function frequentNumber() {
    var i,
        j,
        element,
        result,
        frequentCounter = 1,
        bigFrequentCounter = 0,
        array = [4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3],
        len = array.length;

    for(i = 0; i < len; i += 1) {
        for(j = i + 1 ; j < len; j+=1) {
            if (array[j] === Number.MIN_VALUE) {
                continue;
            }
            if (array[i] === array[j]) {
                frequentCounter += 1;
                //always take this value and so we mark it
                array[j] = Number.MIN_VALUE;
            }
            if (bigFrequentCounter < frequentCounter) {
                bigFrequentCounter = frequentCounter;
                element = array[i];
            }
        }
        frequentCounter = 1;
    }
    result = element + '(' + bigFrequentCounter + 'times)';
    return result;
}
console.log(frequentNumber());

console.log('\nProblem 7. Binary search');
/*Write a script that finds the index of given element in a sorted array of integers by using the binary search algorithm.*/

function binarySearch(array, searchElement){
    var i,
        isSorted = true,
        searchIndex,
        len = array.length;

    //check if array is sorted
    for(i = 1; i < len ; i+= 1) {
        if(array[i-1] > array[i]) {
            isSorted = false;
            break;
        }
    }
    if (!isSorted) {
        selectionSort(array);
        console.log(array);
    }
    searchIndex = search(array, searchElement, 0, len - 1);
    if (searchIndex < 0) {
       console.log('Element not found!');
    }
    else {
        console.log('Searched element %s is on position %s', array[searchIndex], searchIndex);
    }
}
function search(array, searchElement, startPosition, endPosition){
    var middle;
    //check for invalid array
    if (endPosition < startPosition) {
        return -2;
    }  else {
        middle = parseInt((startPosition + endPosition) / 2);
        if (array[middle] > searchElement) {
            return search(array, searchElement, startPosition, middle - 1);
        } else if (array[middle] < searchElement)
        {
            return search(array, searchElement, middle + 1, endPosition);
        } else if (array[middle] === searchElement) {
            return middle;
        } else {
            return -1;
        }
    }
}
binarySearch([19, 2, 11, 23, 45, 36, 63, 58, 76, 69, 92, 81], 36);