console.log('\nProblem 2. People of age');
/*Write a function that checks if an array of person contains only people of age (with age 18 or greater)
 Use only array methods and no regular loops (for, while)*/

function makePerson(fname, age){
    return{
        firstname: fname,
        age: age
    }
}
var people = [1, 1, 1, 1, 1].map(function(_, i){
    return makePerson('Person #' + i, (18+i) + 10 * i);
})
console.log('All people: \n', people);

var isAdult = people.every(function(item){
    return item.age >= 18;
})

console.log('Is every person in array adult -> ', isAdult);