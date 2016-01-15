console.log('\nProblem 6. Group People');
/*Write a function that groups an array of people by age, first or last name.
 The function must return an associative array, with keys - the groups, and values - arrays with people in this groups
 Use function overloading (i.e. just one function)*/

function test(){
    var people = [
        { firstname : 'Georgi', lastname: 'Petrov', age: 32 },
        { firstname : 'Peter', lastname: 'Marinov', age: 18},
        { firstname : 'Ivan', lastname: 'Petrov', age: 18},
        { firstname : 'Peter', lastname: 'Ivanov', age: 25},
        { firstname : 'Ivan', lastname: 'Marinov', age: 32},
        { firstname : 'Georgi', lastname: 'Ivanov', age: 25}
    ];
    console.log(group(people, 'firstname'));
    console.log(group(people, 'lastname'));
    console.log(group(people, 'age'));

}
test();

function group(people, property){
    var i,
        len = people.length,
        result = {};

    switch(property){
        case 'firstname':
            for (i = 0; i < len; i += 1) {
            if (result[people[i].firstname]) {
                result[people[i].firstname].push(people[i]);
            } else {
                result[people[i].firstname] = [people[i]];
            }
        }
            return result;
        case 'lastname':
            for (i = 0; i < len; i += 1) {
                if (result[people[i].lastname]) {
                    result[people[i].lastname].push(people[i]);
                } else {
                    result[people[i].lastname] = [people[i]];
                }
            }
            return result;
        case 'age':
            for (i = 0; i < len; i += 1) {
                if (result[people[i].age]) {
                    result[people[i].age].push(people[i]);
                } else {
                    result[people[i].age] = [people[i]];
                }
            }
            return result;
    }
}
