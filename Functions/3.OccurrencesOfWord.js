console.log('Problem 3. Occurrences of word');
/*Write a function that finds all the occurrences of word in a text.
 The search can be case sensitive or case insensitive.
 Use function overloading*/

function searchWord(word, text) {
    var findIndex,
        i,
        len,
        countWord = 0,
        arrayText = [];

    if(word == null || text == null) {
        return 'Please give to function \'word\' and \'text\'';
    }
    arrayText = text.split(/[ ,.!?]+/);
    //console.log(arrayText);
    for(i = 0, len = arrayText.length; i < len; i +=1 ){
        if (word === arrayText[i]) {
            countWord += 1;
        }
    }
    return word + ' ' + countWord;
}

function occurrencesOfWord(word, text, insensitive) {
    var result,
        caseInsensitiveWord,
        caseInsensitiveText;
    // by default searching is case sensitive
    if (insensitive == null) {
        result = searchWord(word, text);
    } else {
        caseInsensitiveWord = word.toLowerCase();
        caseInsensitiveText = text.toLowerCase();
        result = searchWord(caseInsensitiveWord, caseInsensitiveText);
    }
    return result;
}
console.log(occurrencesOfWord('good', 'Is this sentence? good, has GOod, some! Good, meaning? I don\'t gooD think so! GoOd', 'insensitive'));
console.log(occurrencesOfWord('Good', 'Is this Good, sentence? good, has GOod, some! Good, meaning? I don\'t gooD think so! GoOd'));
console.log(occurrencesOfWord());
