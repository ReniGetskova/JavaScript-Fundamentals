console.log('\nProblem 3. Sub-string in text');
/*Write a JavaScript function that finds how many times a substring is contained in a given text (perform case insensitive search).*/

function appearanceSubstringInText(word, text) {
    var pattern = new RegExp(word, 'gi');
    return (text.match(pattern)).length;
}

text = 'The text is as follows: We are living in an yellow submarine. We don\'t have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.';
//console.log(text);
console.log(appearanceSubstringInText('in', text));