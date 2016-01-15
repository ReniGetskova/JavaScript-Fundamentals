//Problem 1. JavaScript literals
var int = 17;
var float = 0.7;
var bool = true;
var string= "Lindsey Stirling";
var object = {name: "Maria", age: "25", gender: "F"};
var array = [10, 12, 14];

//Problem 2. Quoted text
var stringVariable = '\'How you doin\'?\', Joey said \n';
console.log(stringVariable + "\n");

//Problem 3. Typeof variables
var literals = [int, float, bool, string, object, array];

for (var i = 0; i < literals.length; i++)
{
    console.log("Type of value \"%s\" is: ", literals[i], typeof(literals[i]));
    if(i == literals.length - 1)
    {
        console.log("\n");
    }
}

//Problem 4. Typeof null
var nullVariable = null;
var undefinedVariable;
console.log("Type of null variable is:", typeof(nullVariable));
console.log("Type of undefined variable is: ", typeof(undefinedVariable));