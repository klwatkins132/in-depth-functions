'use strict';
///////////////////////////////////////
// How Passing Arguments Works: Values vs. Reference

console.log('*****Values vs. Reference*****');
// Javascript does not have passing by reference even though it looks like it's passing by reference 
// For objects you pass in a reference, a memory address of of the object, but that reference itself is still a value
// pass IN a reference not BY a reference
const flight = 'LH234';  // Primitive type – On the stack
const kelsy = {          // Reference type – On the Heap
    name: 'Kelsy Watkins',
    passport: 8675309
}

// flightNum contains copy of flight value, not original value
// when passing primitive types to function the value is simply copied
// when passing reference type to function what is copied is the reference to the object in the memory heap
// passenger takes copy of reference value to object
const checkIn = function (flightNum, passenger) {
    flightNum = 'Lh999';
    passenger.name = 'Mrs. ' + passenger.name;

    if (passenger.passport === 8675309) {
        alert('Checked in')
    } else {
        alert('Wrong passport')
    }
}

checkIn(flight, kelsy);
console.log(flight);  // still LH234 flightNum is on new memory address
console.log(kelsy); // name gets changed as memory address stay the same and value does change on the heap

// // Is the same as doing..
// const flightNum = flight;
// const passenger = kelsy;

// Just to show how two functions manipulating the same object can cause problems 
const newPassport = function (person) {
    person.passport = Math.trunc(Math.random()) * 1000000000
}

newPassport(kelsy);
checkIn(flight, kelsy); // prints wrong passport even though you wanted to change the passport number