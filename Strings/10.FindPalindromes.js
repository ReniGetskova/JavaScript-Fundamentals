console.log('\nProblem 10. Find palindromes');
/*Write a program that extracts from a given text all palindromes, e.g. "ABBA", "lamal", "exe".*/

var textTest = 'Text, with exe palindromes! lamal in some. ABBA places and SOS? Other words alenafanela';

function findPalindromes(text){
    var i,
        len,
        palindromes = [],
        //split text on white space and punctuation marks
        words = text.split(/[\s , \. ! \?]+/g);
    //console.log(words);
    for(i = 0, len = words.length; i < len; i += 1){
        if(isPalindrome(words[i])){
            palindromes.push(words[i]);
        }
    }
    return palindromes;
}

function isPalindrome(word){
    var i,
        halfLen,
        len;
    for(i = 0, halfLen = word.length / 2, len = word.length; i < halfLen; i += 1) {
        if (word[i] !== word[len - i - 1]) {
            return false;
        }
    }
    return true;
}
console.log(findPalindromes(textTest));