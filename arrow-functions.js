
// Arrow function

/*
An arrow function expression is a compact alternative to a traditional function expression,
but is limited and can't be used in all situations. 
*/


// Traditional Anonymous Function
function (a){
    return a + 100;
}
  
// Arrow Function Break Down
  
// 1. Remove the word "function" and place arrow between the argument and opening body bracket
(a) => {
return a + 100;
}
  
// 2. Remove the body braces and word "return" -- the return is implied.
(a) => a + 100;
  
// 3. Remove the argument parentheses
a => a + 100;

  


// One param. With simple expression return is not needed:
param => expression

// Multiple params require parentheses. With simple expression return is not needed: 
(param1, paramN) => expression


// Multiline statements require body braces and return:
param => {
    let a = 1;
    return a + param;
  }

//  Multiple params require parentheses. Multiline statements require body braces and return: 

(param1, paramN) => {
    let a = 1;
    return a + param1 + paramN;
 }

 

// Example 1 

let greet = () => console.log('Hello');
greet(); // Hello


// Example 2

let sum = (a, b) => {
    let result = a + b;
    return result;
}

let result1 = sum(5,7);
console.log(result1); // 12




