console.log('\nProblem 11. String format');
/*Write a function that formats a string using placeholders.
 The function should work with up to 30 placeholders and all types.*/

function stringFormat(){
    var i,
        len,
        placeholder,
        args = arguments,
        result = args[0];

    //console.log(args);
    //we take value on position 0
    for(i = 1, len = args.length; i < len; i += 1){
        placeholder ='{' + (i - 1) + '}';
        while(result.indexOf(placeholder) > -1) {
            result = result.replace(placeholder, args[i]);
        }
    }
    return result;
}
var frmt = '{0}, {1}, {0} text {2}';
var str = stringFormat(frmt, 1, 'Pesho', 'Gosho');
console.log(str);
var str1 = stringFormat('Hello {0}!', 'Peter');
console.log(str1);
console.log(stringFormat('{0} {1} {0} {2}',  'Person:', 1, 2));