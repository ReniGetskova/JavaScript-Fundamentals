console.log('\nProblem 6. Group people');
/*Write a function that groups an array of persons by first letter of first name and returns the groups as a JavaScript Object
 Use Array#reduce
 Use only array methods and no regular loops (for, while)*/

function makePerson(fname, lname, age, gender){
    return{
        firstname: fname
        /*lastname: lname,
        age: age,
        gender: gender*/
    }
}
var people = [1, 1, 1, 1, 1, 1].map(function(_, i){
    return makePerson((i%2)? 'Person#' + i : 'Animal#' + i )//'Surname #' + i, 10 + i , (i%2)?'F':'M');
})
console.log('All people \n', people);

console.log('\nGroups by first letter of name: ');
var groups = people.reduce(function (gr, person) {
    var letter = person.firstname[0];
    if (gr[letter]) {
        gr[letter].push(person);
    } else {
        gr[letter] = [person];
    }

    return gr;
}, {});

console.log(groups);