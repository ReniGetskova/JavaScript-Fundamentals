console.log('\nProblem 7. Parse URL');
/*Write a script that parses an URL address given in the format: [protocol]://[server]/[resource] and extracts from it the [protocol], [server] and [resource] elements.
 Return the elements in a JSON object.*/

urlTest = 'http://telerikacademy.com/Courses/Courses/Details/239';

function parseURL(url){
    var pattern = /(http[s]?):\/\/(\w+\.[a-z]{2,3})([\/A-z0-9]+)/g,
        resultObj = {},
        match;

    match = pattern.exec(url);
    //console.log(match);
    resultObj.protocol = match[1];
    resultObj.server = match[2];
    resultObj.resource = match[3];
    return resultObj;
}
console.log(parseURL(urlTest));