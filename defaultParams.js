'use strict';

///////////////////////////////////////
// Default Parameters
console.log('*****DEFAULT PARAMETERS*****');
const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199 + numPassengers) {
    //ES5 below but use ES6 which is default in parameters
    // numPassengers = numPassengers || 1;
    // price = price || 199;

    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking)
    bookings.push(booking);
}

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 5);
createBooking('LH123', undefined, 800); //use undefined to skip a parameter you want to leave as default
