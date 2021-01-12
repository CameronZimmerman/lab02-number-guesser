const feedbackDisplayDiv = document.getElementById('feedback-display');

const resultsScreenDiv = document.getElementById('results-screen');
const resultsMessageHeader = document.getElementById('results-message');
const gameWindowSection = document.getElementById('')

export function decrementGuesses(curGuesses){
    return curGuesses - 1;
}

export function displayStatusMessage(status) {

    if (status === 0) feedbackDisplayDiv.textContent = 'Wow! You guessed correctly';
    if (status === -1) feedbackDisplayDiv.textContent = 'Your guess was too low!';
    if (status === 1) feedbackDisplayDiv.textContent = 'Your guess was too high!';

}

export function displayWinScreen() {

    resultsScreenDiv.classList.toggle('hidden');
    resultsScreenDiv.classList.toggle('hidden');

}

export function displayLoseScreen() {

}

export function resetGamePlay() {

}

