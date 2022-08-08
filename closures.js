///////////////////////////////////////
// Closures

// See .pdf file, pages 3-6, for in depth explination of whats happening in the below code 
const secureBooking = function () {
    let passengerCount = 0;

    return function () {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }
}

const booker = secureBooking();

booker(); // 1 passengers
booker(); // 2 passengers
booker(); // 3 passengers

console.dir(booker);