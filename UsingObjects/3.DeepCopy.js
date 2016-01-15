console.log('\nProblem 3. Deep copy');
/*Write a function that makes a deep copy of an object.
 The function should work for both primitive and reference types.*/

function deepCopy(obj) {
    //If a non object parameter is passed in, that parameter is returned and no recursion occurs.
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    var copy = {};
    for (var prop in obj) {
        copy[prop] = deepCopy(obj[prop]);
    }
    return copy;
}

function buildPerson(personName, personAge, personMarks, hairColor, hairType){
    var person = {
        //string
        name : personName,
        //number
        age : personAge,
        //array
        marks : personMarks,
        //object
        hair : {
            color : hairColor,
            type : hairType
        }
    }
    return person;
}

function test(){
    var person1 = buildPerson('Peter Ivanov', '25', [3, 4, 5], 'blond', 'curly'),
        person2 = {};
    console.log(person1);
    //deep copy on person1
    person2 = deepCopy(person1);
    //change values for person2 and values for person1 stay the same
    person2.name = 'Ivan Georgiev';
    person2.age = 30;
    person2.marks = [3.5, 4.5, 5.5];
    person2.hair.color = 'brown';
    person2.hair.type = 'straight';
    console.log(person2);
}

test();