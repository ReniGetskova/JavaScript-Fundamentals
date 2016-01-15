console.log('Problem 1. Make person');
/*Write a function for creating persons.
 Each person must have firstname, lastname, age and gender (true is female, false is male)
 Generate an array with ten person with different names, ages and genders*/

if(!Array.prototype.fill){
    Array.prototype.fill = function(value){
        var i,
            len;
        for(i = 0, len = this.length;  i < len; i += 1){
            this[i] = value;
        }
        return this;
    };
}
var array = [],
    count = 10;
array[count - 1] = undefined;
array.fill(1);

function makePerson(fname, lname, age, gender){
    return{
        firstname: fname,
        lastname: lname,
        age: age,
        gender: gender
    }
}
var people = array.map(function(_, i){
    return makePerson('Person #' + i, 'Surname #' + i, 10 + i , (i%2)?'F':'M');
})
console.log(people);