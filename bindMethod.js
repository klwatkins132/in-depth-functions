'use strict';
///////////////////////////////////////
// The bind Method
// does not immediatley call the function, instead it returns a new function where the this keyword is bound.
// so it's set to whatever value we pass into bind

console.log('*****THE BIND METHOD PT1*****');
const jetblue = {
    airline: 'JetBlue',
    iataCode: 'JB',
    bookings: [],
    book(flightNum, customerName) {
        console.log(`${customerName} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, customerName })
    },
};

const book = jetblue.book

const spiritAirlines = {
    airline: 'Spirit Airlines',
    iataCode: 'SPA',
    bookings: [],
}

const southwest = {
    airline: 'Southwest Airlines',
    iataCode: 'SWA',
    bookings: [],
};

const bookJB = book.bind(jetblue);
const bookSPA = book.bind(spiritAirlines);
const bookSWA = book.bind(southwest);

bookJB(23, 'Steven Williams');
bookSPA(114, 'Kelsy Watkins');
bookSWA(87, 'Sally Hansen');

// partial application - preset parameters
const bookJB23 = book.bind(jetblue, 23);
bookJB23('Martha Cooper');
bookJB23('Kelly Smith');

console.log('*****THE BIND METHOD PT2*****');
// With event listeners
jetblue.planes = 300;
jetblue.buyPlane = function () {
    console.log(this);

    this.planes++;
    console.log(this.planes);
};
// in an event handler function the 'this' keyword always points to the element on which the handler is attached to
// below line will point to the button and not the jetblue object itself, use bind to manually define the 'this' keyword to make logic work
//document.querySelector('.buy').addEventListener('click', jetblue.buyPlane);

document.querySelector('.buy').addEventListener('click', jetblue.buyPlane.bind(jetblue));

// partial application - preset parameters
const addTax = (taxRate, value) => value + value * taxRate;
console.log(addTax(0.1, 200));

const addSalesTax = addTax.bind(null, 0.23);
console.log(addSalesTax(100));
console.log(addSalesTax(23));


// another way to write the above code
const addTaxRate = function (rate) {
    return function (value) {
        return value + value * rate;
    };
};
const addSalesTax2 = addTaxRate(0.23);
console.log(addSalesTax2(100));
console.log(addSalesTax2(23));