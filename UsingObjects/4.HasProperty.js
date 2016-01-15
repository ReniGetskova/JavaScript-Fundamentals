console.log('\nProblem 4 Has property');
/*Write a function that checks if a given object contains a given property.*/

function hasProperty(obj, property){
    if (property in obj) {
        return 'The object contains a property ' + property + ' with value ' + obj[property];
    }
    return 'The object doesn\'t contain a property ' + property;
}

function test() {
    var student = {
        name: 'Peter',
        age: 25,
        course: 'JavaScript',
        points: 100
    };
    console.log(student);
    console.log(hasProperty(student, 'course'));
    console.log(hasProperty(student, 'hair'));
}
test();