console.log('\nProblem 4. Parse tags');
/*You are given a text. Write a function that changes the text in all regions:

 <upcase>text</upcase> to uppercase.
 <lowcase>text</lowcase> to lowercase
 <mixcase>text</mixcase> to mix casing(random)
 Example: We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. We <mixcase>don't</mixcase> have <lowcase>anything</lowcase> else.

 The expected result:
 We are LiVinG in a YELLOW SUBMARINE. We dOn'T have anything else.

 Note: Regions can be nested.*/

function parseTagsSecondWay(text){
    var i,
        len,
        isOut = true,
        isIn = false,  //text between tags
        isOpenTag = false, //<>
        isCloseTag = false, //</>
        caseChar = '',
        result = '';

    for(i = 0, len = text.length; i < len; i += 1) {
        if (text[i] === '<' && text[i+1] !== '/' && isOut) {
            isOut = false;
            isOpenTag = true;
            caseChar = text[i+1];
        } else if(text[i] !== '>' && isOpenTag){
            continue;
        } else if(text[i] === '>' && isOpenTag) {
            isOpenTag = false;
            isIn = true;
            continue;
        } else if(text[i] === '<' && text[i+1] === '/' && isIn) {
            isIn = false;
            isCloseTag = true;
            isOut = false;
            caseChar = '';
            continue;
        } else if(isIn) {
            if(caseChar === 'u') {
                result += text[i].toUpperCase();
            } else if(caseChar === 'l') {
                result += text[i].toLowerCase();
            } else if (caseChar === 'm') {
                if(i % 2) {
                    result += text[i].toLowerCase();
                } else {
                    result += text[i].toUpperCase()
                }
            }
        }  else if ( text[i] !== '>' && isCloseTag) {
            continue;
        } else if (text[i] === '>' && isCloseTag){
            isCloseTag = false;
            isOut = true;
        } else if (isOut) {
            result += text[i];
        }
    }
    return result;
}

text = 'We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. We <mixcase>don\'t</mixcase> have <lowcase>anything</lowcase> else.';
console.log(parseTagsSecondWay(text));