// Destructuring assignment

/*
The destructuring assignment syntax is a JavaScript expression that makes it possible
to unpack values from arrays, or properties from objects, into distinct variables.
*/

/////////////////////////////////////////////////////////////////////////////////


// Traditional method

var hero = {
    name: 'Batman',
    realName: 'Bruce Wayne'
};

var name     = hero.name;
var realName = hero.realName;

name;     // => 'Batman',
realName; // => 'Bruce Wayne'

/////////////////////////////////////////////////////////////////////////////////

// New method

var hero = {
    name: 'Batman',
    realName: 'Bruce Wayne'
};
var { name, realName } = hero;
name;     // => 'Batman',
realName; // => 'Bruce Wayne'


/////////////////////////////////////////////////////////////////////////////////

var name     = hero.name;
var realName = hero.realName;
// is equivalent to:
var { name, realName } = hero;

/////////////////////////////////////////////////////////////////////////////////

var hero = {
    name: 'Batman',
    realName: 'Bruce Wayne'
};

var { enemies } = hero;
enemies;     // => undefined

// We can assign a default value to avoid this

var { identifier = defaultValue } = expression;
var { enemies = ['Joker'] } = hero;

/////////////////////////////////////////////////////////////////////////////////

/*
If you'd like to create variables of different names than the properties,
then you can use the aliasing feature of object destructuring.
*/

var { identifier: aliasIdentifier } = expression;
// The equivalent code:
var aliasIdentifier = expression.identifier;


/////////////////////////////////////////////////////////////////////////////////

// Example 

const hero = {
    name: 'Batman',
    realName: 'Bruce Wayne'
};

const { realName: secretName } = hero;

secretName; // => 'Bruce Wayne'
