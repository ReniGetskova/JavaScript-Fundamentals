/*Problem 1. Numbers*/
/* Write a script that prints all the numbers from 1 to N.*/

function printNumbersFrom1toN(){
    var number = jsConsole.readInteger('#inputProblem1'),
        i;
    if(number){
        if(number >= 1) {
            for (i = 1; i <= number; i += 1) {
                jsConsole.write(i);
                if (i <= number - 1) {
                    jsConsole.write(', ');
                }
            }
        } else {
            for (i = 1; i >= number; i -= 1) {
                jsConsole.write(i);
                if (i > number) {
                    jsConsole.write(', ');
                }
            }
        }
    } else {
        jsConsole.writeLine('Incorrect input! Please insert a number.');
    }
    document.getElementById('inputProblem1').value = '';
}

/*Problem 2. Numbers not divisible*/
/*Write a script that prints all the numbers from 1 to N, that are not divisible by 3 and 7 at the same time*/

function divisibleBy3And7(){
    var number = jsConsole.readInteger('#inputProblem2'),
        i;
    if(number){
        for(i = 1; i <= number; i+= 1){
            if(i % 21){
                jsConsole.write(i);
                if (i < number) {
                    jsConsole.write(', ');
                }
            }

        }
    }
    document.getElementById('inputProblem2').value = '';
}

/*Problem 3. Min/Max of sequence*/
/*Write a script that finds the max and min number from a sequence of numbers.*/

function minAndMax(){
    var input = jsConsole.read('#inputProblem3'),
        min = Number.MAX_VALUE,
        max = Number.MIN_VALUE,
        len,
        i;

    var array = input.split(', ');
    for (i = 0, len = array.length; i < len; i++) {
        //array elements are strings so we make *1 to return them in numbers
        if (max < array[i] * 1) {
            max = array[i] * 1;
        }
        if (min > array[i] * 1) {
            min = array[i] * 1;
        }
    }

    jsConsole.writeLine('Min is: ' + min);
    jsConsole.writeLine('Max is: ' + max);

    jsConsole.writeLine();
    document.getElementById('inputProblem3').value = '';
}

/*Problem 4. Lexicographically smallest*/
/*Write a script that finds the lexicographically smallest and largest property in document, window and navigator objects.*/

function smallestAndLargestProperty(obj){
    var property,
        elements = [];
    for (property in obj){
        elements.push(property);
    }
    elements.sort();
    jsConsole.writeLine('Element ' + obj.constructor.name);
    jsConsole.writeLine('Lexicographically first: ' + elements[0])
    jsConsole.writeLine ('Lexicographically last: ' + elements[elements.length -1]);
    jsConsole.writeLine();
}
function onClickProperty(){
    smallestAndLargestProperty(document);
    smallestAndLargestProperty(window);
    smallestAndLargestProperty(navigator);
}