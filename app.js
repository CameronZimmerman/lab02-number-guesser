import { decrementGuesses, displayStatusMessage } from './dom-utils.js';
import { compareNumbers, generateRandomNumber } from './utils.js';

// import functions and grab DOM elements
const guessInput = document.getElementById('guess-input');
const guessButton = document.getElementById('guess-button');
// initialize state
let remainingGuesses = 4;
let randomNumber = generateRandomNumber();

// set event listeners to update state and DOM

guessButton.addEventListener('click', () => {

    remainingGuesses = decrementGuesses(remainingGuesses);
    const currentGuess = Number(guessInput.value);

    displayStatusMessage(compareNumbers(currentGuess, randomNumber));

    

    
});