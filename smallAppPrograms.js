'use strict';
///////////////////////////////////////
// Simple poll app

/* 
A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. 
1. The method 'registerNewAnswer' on the 'poll' object: :
  1.1. Displays a prompt window for the user to input the number of the selected option.
  1.2. Based on the input number, updates the answers array. If the option is 3, increase the value AT POSITION 3 of the array by 1. Verifies input is a number and if the number makes sense (e.g answer 52 wouldn't make sense)
2. Method gets callede whenever the user clicks the "Answer poll" button
3. The method 'displayResults' displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', display the results array as it is, If type is 'string', display a string.
4. 'displayResults' method runs at the end of each 'registerNewAnswer' method call.
*/

const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    answers: new Array(4).fill(0),
    registerNewAnswer() {
        const answer = Number(
            prompt(
                `${this.question}\n${this.options.join('\n')}\n(Write option number)`
            )
        );
        console.log(answer);

        typeof answer === 'number' &&
            answer < this.answers.length &&
            this.answers[answer]++;

        this.displayResults();
        this.displayResults('string');
    },

    displayResults(type = 'array') {
        if (type === 'array') {
            console.log(this.answers);
        } else if (type === 'string') {
            console.log(`Poll results are ${this.answers.join(', ')}`);
        }
    },
};

document
    .querySelector('.poll')
    .addEventListener('click', poll.registerNewAnswer.bind(poll));

// test
// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });