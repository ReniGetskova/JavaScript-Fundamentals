console.log('\nProblem 5. Youngest person');
/*Write a function that finds the youngest male person in a given array of people and prints his full name
 Use only array methods and no regular loops (for, while)
 Use Array#find*/

if(!Array.prototype.find){
    Array.prototype.find = function(callback){
        var i,
            len;
        for(i = 0, len = this.length; i < len; i += 1){
           if(callback(this[i], i, this)){
               return this[i];
           }
        }
        return undefined;
    };
}

function makePerson(fname, lname, age, gender){
    return{
        firstname: fname,
        lastname: lname,
        age: age,
        gender: gender
    }
}

var people = [1, 1, 1, 1 ,1, 1, 1].map(function(_, i, array){
    return makePerson('Person#' + i, 'Surname#' + i,(10 + array.length - i) + (10 * (array.length - i)) , (i%2)?'M':'F');
});

console.log('All people: \n', people);


var youngestMale = people.sort(function(a, b){
    return a.age - b.age;
}).find(function(person){
    return person.gender === 'M';
});

console.log('\n Youngest male is:', youngestMale.firstname + ' ' + youngestMale.lastname);
console.log(youngestMale);
