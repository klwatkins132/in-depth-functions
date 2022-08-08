///////////////////////////////////////
// Immediately Invoked Function Expressions (IIFE)

console.log('*****Immediately Invoked Function Expressions (IIFE)*****');

const runOnce = function () {
    console.log('This will never run again')
};
runOnce();

// IIFE Pattern
(function () {
    console.log('This will never run again')
    const isPrivate = 23;
})();

//console.log(isPrivate); // ReferenceError - GlobalScope does not have access to function scope

(() => (console.log('This will ALSO never run again')))();

// if you want to create a new scope for data privacy just create a block like below
// you don't need to make a new function to create a new scope
{
    const isPrivate = 23;
    var notPrivate = 46; // Remember var essentialy ignores the block
}

// console.log(isPrivate);
console.log(notPrivate);