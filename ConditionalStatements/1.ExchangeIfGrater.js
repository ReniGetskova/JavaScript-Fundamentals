/*Write an if statement that takes two double variables a and b and exchanges their values if the first one is greater than the second.
 As a result print the values a and b, separated by a space.*/

console.log('-----Problem 1. Exchange if greater-----');

function exchangeIfIsGrater (first, second){
    console.log('Before exchange:', first, second);
    var temp;
    if(first > second){
        temp = first;
        first = second;
        second = temp;
    }
    console.log('After exchange:', first, second);
}

exchangeIfIsGrater(15, 10);


