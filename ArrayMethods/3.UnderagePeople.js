console.log('\nProblem 3. Underage people');
/*Write a function that prints all underaged persons of an array of person
 Use Array#filter and Array#forEach
 Use only array methods and no regular loops (for, while)*/

function makePerson(fname, age){
    return{
        firstname: fname,
        age: age
    }
}
var people = [1, 1, 1, 1, 1, 1].map(function(_, i){
    return makePerson('Person #' + i, (10+i) + 10 * i);
})

console.log('All people: \n', people);

console.log('\nAll under-age people:');
people.filter(function(person){
    return person.age < 40;
}).forEach(function(person){
    console.log(person);
})