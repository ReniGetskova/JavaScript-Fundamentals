console.log('\nProblem 6. Extract text from HTML');
/*Write a function that extracts the content of a html page given as text.
 The function should return anything that is in a tag, without the tags.*/

//var htmlContent = '<html><head><title>Sample site</title></head><body><div>text<div>more text</div>and more...</div>in body</body></html>';
var htmlContent =
    '<html>' +
        '<head>' +
            '<title>Sample site</title>' +
        '</head>' +
        '<body>' +
            '<div>text' +
                '<div>more text</div>' +
                'and more...' +
            '</div>' +
            'in body' +
        '</body>' +
    '</html>';

//remove new lines (\n) and carriage return (\r) characters
htmlContent = htmlContent.replace(/[\n\r]/g, '');
console.log(htmlContent);

function extractTextFromHTML(text) {
    var i,
        len,
        isOpenTag = true,
        isText = false,
        isCloseTag = false,
        result = '';

    for(i = 0, len = text.length; i < len; i += 1){
        if(isOpenTag && text[i] === '>' && text[i+1] !== '<' ){
            isOpenTag = false;
            isText = true;
            continue;
        }
        else if (isCloseTag && text[i] === '>' && text[i+1] !== '<' ){
            isText = true;
        }
        else if(isText && text[i] === '<' && text[i+1] === '/'){
            isText = false;
            isCloseTag = true;
        }
        else if (text[i] === '<' && text[i+1] !== '/') {
            isText = false;
            isOpenTag = true;
        }
        else if (isText) {
            result += text[i];
        }
        else if(isCloseTag && text[i] === '>' && text[i+1] === '<' && text[i+2] !== '/') {
            isCloseTag = false;
            isOpenTag = true;
        }
        else if(isOpenTag && text[i] === '>' && text[i+1] === '<'){
           continue
        }
    }
    return result;
}
console.log(extractTextFromHTML(htmlContent));