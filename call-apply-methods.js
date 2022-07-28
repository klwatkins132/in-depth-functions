'use strict';
///////////////////////////////////////
// The call and apply Methods

console.log('*****THE CALL METHOD*****');
const americanAirlines = {
    airline: 'American Airlines',
    iataCode: 'AA',
    bookings: [],
    book(flightNum, customerName) {
        console.log(`${customerName} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, customerName })
    },
};
americanAirlines.book(239, 'Kelsy Watkins');
americanAirlines.book(635, 'Joe Schmoe');

// Suppose American Airlines changes thier name and you want to keep using book method and you shouldn't duplicate it
const usaAirlines = {
    airline: 'Usa Airlines',
    iataCode: 'UA',
    bookings: [],
}
// take the method and store it in an external function
// this is possible becuase JavaScript has first-class functions
const book = americanAirlines.book

// book(23, 'Sarah Williams') // *Type Error* this function is now just a regular function call. In a regular function call the 'this' keyword points to undefined( in strict mode)

// solve this by using the call method will call the book function with the 'this' keyword set to usaAirlines
book.call(usaAirlines, 23, 'Sarah Williams');
// console.log(usaAirlines);

book.call(americanAirlines, 244, 'Mary Cooper');
// console.log(americanAirlines);

const delta = {
    airline: 'Delta Airlines',
    iataCode: 'DA',
    bookings: [],
};

book.call(delta, 583, 'Stephen King');
// console.log(delta);


console.log('*****THE APPLY METHOD*****');
// does basically the same thing as call except it does not recieve a list of arguments after the 'this' keyword it will take an array of arguments
const flightData = [583, 'Snoop Dogg'];
book.apply(delta, flightData);
// console.log(delta);

book.call(delta, ...flightData); // the same as the apply method