const feedbackDisplayDiv = document.getElementById('feedback-display');

const resultsScreenDiv = document.getElementById('results-screen');
const resultsMessageHeader = document.getElementById('results-message');
const gameWindowSection = document.getElementById('game-window');


export function displayStatusMessage(status) {

    if (status === 0) feedbackDisplayDiv.textContent = 'Wow! You guessed correctly';
    if (status === -1) feedbackDisplayDiv.textContent = 'Your guess was too low!';
    if (status === 1) feedbackDisplayDiv.textContent = 'Your guess was too high!';

}

export function displayWinScreen() {

    resultsScreenDiv.classList.toggle('hidden');
    gameWindowSection.classList.toggle('hidden');
    resultsMessageHeader.textContent = 'You won!';

}

export function displayLoseScreen() {

    resultsScreenDiv.classList.toggle('hidden');
    gameWindowSection.classList.toggle('hidden');
    resultsMessageHeader.textContent = 'You lost!';

}

export function resetGamePlayView() {
    resultsScreenDiv.classList.toggle('hidden');
    gameWindowSection.classList.toggle('hidden');
}

