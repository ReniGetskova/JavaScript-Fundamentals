console.log('\nProblem 2. Correct brackets');
/*Write a JavaScript function to check if in a given expression the brackets are put correctly.*/

function checkCorrectBrackets(expression) {
    var i,
        len,
        isCorrect = 0;

    for(i = 0, len = expression.length; i < len; i += 1) {
        if (expression[i] === '(') {
            isCorrect += 1;
        } else if (expression[i] === ')') {
            isCorrect -= 1;
        }
    }
    if (isCorrect === 0) {
        return true;
    } else {
        return false;
    }
}
console.log('Is correct brackets in expression %s ->', '((a+b)/5-d)', checkCorrectBrackets('((a+b)/5-d)'));
console.log('Is correct brackets in expression %s ->', ')(a+b))', checkCorrectBrackets(')(a+b))'));