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


console.log('*****CLOSURES PT3*****');
const passengerBoard = function (numOfPassengers, waitTime) {

    // callback function will close over perGroup variable and global variable below does not get used  
    const perGroup = numOfPassengers / 3;

    setTimeout(function () {
        console.log(`We are now boarding all ${numOfPassengers} passengers.`);
        console.log(`There are 3 groups, each with ${perGroup} passengers.`)
    }, waitTime * 1000);

    console.log(`Will start boarding in ${waitTime} seconds.`);
};

const perGroup = 1000; // scope chain does not have priority 
passengerBoard(180, 3);
