console.log('\nProblem 9. Extract e-mails');
/*Write a function for extracting all email addresses from given text.
 All sub-strings that match the format @… should be recognized as emails.
 Return the emails as array of strings.*/

var textTest = 'John Smith: John.Smith@gmail.com and some other people: Maria Gonsales has email: maria_91@yahoo.com: Jessica Simson and her email jessica-simson@mail.bg';
function extractEmails(text){
    var pattern = /[A-z0-9._\-]+@[A-z0-9]+\.[A-z0-9]+/gi;
    return text.match(pattern);
}
console.log(textTest);
console.log(extractEmails(textTest));