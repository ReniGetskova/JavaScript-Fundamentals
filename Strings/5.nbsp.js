console.log('\nProblem 5. nbsp');
/*Write a function that replaces non breaking white-spaces in a text with &nbsp*/


String.prototype.htmlEscape = function (){
    var escapedStr = String(this).replace(/&/g, '&amp;');
    escapedStr = escapedStr.replace(/\s/g, '&nbsp;');
    return escapedStr;
}

var text = 'This is for testing';
console.log(text);
text = text.htmlEscape(); //because string is immutable type
console.log(text);