'use strict';
///////////////////////////////////////
// Functions Accepting Callback Functions

console.log('*****Functions Accepting Callback Functions*****');
const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase(); // returns a string with no spaces in it
};

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' '); // spread into an array - rest pattern
    return [first.toUpperCase(), ...others].join(' '); // destructure 
};
// Higher order function
const transformer = function (str, fn = () => { }) {
    console.log(`Original string: ${str}`)
    console.log(`Transformed string: ${fn(str)}`)

    console.log(`Transformed by: ${fn.name}`)
};
// Pass CallBack functions
transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
    console.log('👋');
};
document.body.addEventListener('click', high5);
['Jonas', 'Martha', 'Adam'].forEach(high5);


///////////////////////////////////////
// Functions Returning Functions

console.log('*****Functions Returning Functions*****');
const greet = function (greeting) {
    return function (myName) {
        console.log(`${greeting} ${myName}`);
    }
}

const greeterHey = greet('Hey')
greeterHey('Kelsy');
greeterHey('Steven');

greet('Hello')('Kelsy Lynn');

// writing the same function as an arrow function
const greetArr = greeting => myName => console.log(`${greeting} ${myName}`);
greetArr('Hi')('Bella dog');