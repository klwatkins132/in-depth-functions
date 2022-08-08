///////////////////////////////////////
// Closures
// See .pdf file, pages 3-6, for in depth explination of whats happening in the below code 

console.log('*****CLOSURES PT1*****');
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

console.log('*****CLOSURES PT2*****');
// *** Dont need to return function from another function in order to create a closure

let funcOne;

const funcTwo = function () {
    const numOne = 23;
    funcOne = function () {
        console.log(numOne * 2);
    };
};

const funcThree = function () {
    const numTwo = 777;
    funcOne = function () {
        console.log(numTwo * 2);
    };
}

funcTwo();
funcOne(); // 46

//re-assigning funcOne function
funcThree();
funcOne(); // 1554