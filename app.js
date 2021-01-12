import {displayLoseScreen, displayStatusMessage, displayWinScreen, resetGamePlayView } from './dom-utils.js';
import { compareNumbers, generateRandomNumber, decrementGuesses } from './utils.js';

// import functions and grab DOM elements
const guessInput = document.getElementById('guess-input');
const guessButton = document.getElementById('guess-button');
const remainingGuessesSpan = document.getElementById('guesses-display');

const retryButton = document.getElementById('retry-button');

// initialize state
let remainingGuesses = 4;
let randomNumber = generateRandomNumber();
let canPlay = true;


function showGuesses() {
    remainingGuessesSpan.textContent = remainingGuesses;
}


// set event listeners to update state and DOM

guessButton.addEventListener('click', () => {

    if (canPlay){

        remainingGuesses = decrementGuesses(remainingGuesses);
        const currentGuess = Number(guessInput.value);

        const result = compareNumbers(currentGuess, randomNumber);
    
        displayStatusMessage(result);


        if (result === 0){

            displayWinScreen();
            canPlay = false;
        } 
        else if (remainingGuesses === 0){
            displayLoseScreen();
            canPlay = false;
        }

        showGuesses();
        
    }
    
});

retryButton.addEventListener('click', () => {

    canPlay = true;
    remainingGuesses = 4;
    showGuesses();
    resetGamePlayView();

});