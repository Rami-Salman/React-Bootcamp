
// Template Literals use back-ticks (``) rather than the quotes ("") to define a string:

let example1 = `Hello World!`;



// Template literals allows multiline strings:

let example2 =
`This string
 consists
of multiple
lines`;


// Template literals provide an easy way to interpolate variables and expressions into strings.

// Traditional syntax

let name1 = "Ahmad"
let example3 = "Hello " + name1 + "!" 


// New syntax

let name2 = "Ahmad"
let example4 = `Hello ${name2} !` 




let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;