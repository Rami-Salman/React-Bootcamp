// A JavaScript function is a block of code designed to perform a particular task.

// Javascript function syntax 

function name(parameter1, parameter2, parameter3) {
    // code to be executed
  }


// example  1

function square_v1(number) {
    return number * number;
}

square_v1(4);


// example  2

const square_v2 = function(number) { return number * number }
square_v2(4)

// Default parameters
// Default parameters allow named parameters to be initialized with default values if no value or undefined is passed. 
// Default Parametrs should be placed at last.


function multiply(a, b = 1) {
    return a * b;
}

console.log(multiply(5, 2));
// expected output: 10

console.log(multiply(5));
// expected output: 5


// Rest parameters
// The rest parameter syntax allows a function to accept an indefinite number of arguments as an array

function rest_example(a ,b, ...manyMoreArgs) {
    console.log("a", a)
    console.log("b", b)
    console.log("manyMoreArgs", manyMoreArgs)
    return manyMoreArgs
}

rest_example(1,2,3,4,5)
