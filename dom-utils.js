const feedbackDisplayDiv = document.getElementById('feedback-display');

export function decrementGuesses(curGuesses){
    return curGuesses - 1;
}

export function displayStatusMessage(status) {

    if (status === 0) feedbackDisplayDiv.textContent = 'Wow! You guessed correctly';
    if (status === -1) feedbackDisplayDiv.textContent = 'Your guess was too low!';
    if (status === 1) feedbackDisplayDiv.textContent = 'Your guess was too high!';

}

export function disableGamePlay() {

}

export function displayWinScreen() {

}

export function displayLoseScreen() {

}

export function resetGamePlay() {

}

