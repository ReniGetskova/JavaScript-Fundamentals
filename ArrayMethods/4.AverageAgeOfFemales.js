console.log('\nProblem 4. Average age of females');
/*Write a function that calculates the average age of all females, extracted from an array of persons
 Use Array#filter
 Use only array methods and no regular loops (for, while)*/

function makePerson(fname, lname, age, gender){
    return{
        firstname: fname,
        lastname: lname,
        age: age,
        gender: gender
    }
}
var people = [1, 1, 1, 1 ,1, 1, 1].map(function(_, i){
    return makePerson('Person #' + i, 'Surname #' + i,(10 + i) + (10 * i) , (i%2)?'F':'M');
});

console.log('All people: \n', people);

var females = people.filter(function(person){
    return person.gender === 'F';
});
console.log('\nOnly females: ', females);
var numberOfFemales = females.length;

var femalesAge = females.reduce(function(avg, item){
   return avg + item.age
}, 0);
console.log('Average age of all females is: ', femalesAge/numberOfFemales);
