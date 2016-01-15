console.log('\nProblem 8. Replace tags');
/*Write a JavaScript function that replaces in a HTML document given as string all the tags <a href="…">…</a> with
corresponding tags [URL=…]…/URL].*/

var inputTest = '<p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course. Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>'

function replaceTags(input) {
    input = input.replace(/<a href="/g, '[URL=').replace(/">/g, ']').replace(/<\/a>/g, '[/URL]');
    return input;
}
console.log(inputTest);
console.log(replaceTags(inputTest));