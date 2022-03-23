// Destructuring assignment

/*
The destructuring assignment syntax is a JavaScript expression that makes it possible
to unpack values from arrays, or properties from objects, into distinct variables.
*/

/////////////////////////////////////////////////////////////////////////////////


// Traditional method

list = [10,20]
a = list[0]
b = list[1]

/////////////////////////////////////////////////////////////////////////////////

// New method

let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: Array [30,40,50]

/////////////////////////////////////////////////////////////////////////////////

const x = [1, 2, 3, 4, 5];
const [y, z] = x;
console.log(y); // 1
console.log(z); // 2

/////////////////////////////////////////////////////////////////////////////////


const foo = ['one', 'two', 'three'];

const [red, yellow, green] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // "three"



/////////////////////////////////////////////////////////////////////////////////

function f() {
    return [1, 2];
  }
  
  let var1, var2;
  [var1, var2] = f();
  console.log(var1); // 1
  console.log(var2); // 2
  