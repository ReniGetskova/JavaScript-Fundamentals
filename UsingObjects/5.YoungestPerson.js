console.log('\nProblem 5. Youngest person');
/*Write a function that finds the youngest person in a given array of people and prints his/hers full name
 Each person has properties firstname, lastname and age.*/

var people = [
    { firstname : 'Gosho', lastname: 'Petrov', age: 32 },
    { firstname : 'Bay', lastname: 'Ivan', age: 81},
    { firstname : 'Maria', lastname: 'Petrova', age: 18},
    { firstname : 'Vlado', lastname: 'Dimitrov', age: 45},
    { firstname : 'Random', lastname: 'Person', age: 64}
];
console.log(people);

function findYoungestPerson(people){
    var minAge = Number.MAX_VALUE;

    for(var i in people) {
        if(minAge > people[i].age){
            minAge = people[i].age;
        }
    }
    for(var person in people){
        if(minAge === people[person].age){
            return 'Youngest person is: ' + people[person].firstname + ' ' + people[person].lastname;
        }
    }
}
console.log(findYoungestPerson(people));