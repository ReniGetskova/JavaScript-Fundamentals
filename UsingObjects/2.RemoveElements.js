console.log('\nProblem 2. Remove elements');
/*Write a function that removes all elements with a given value.
 Attach it to the array type.
 Read about prototype and how to attach methods.*/

Array.prototype.remove = function(value) {
    while (this.indexOf(value) >= 0) {
        this.splice(this.indexOf(value), 1);
    }
    return this;
};

function test(){
    var array = [1,2,1,4,1,3,4,1,111,3,2,1,'1'];
    console.log('Before removing: ', array);
    array.remove(1);
    console.log('After removing', array);
}

test();