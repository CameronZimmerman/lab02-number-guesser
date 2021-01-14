export function compareNumbers(guess, correctNumber) {

    if (guess === correctNumber) return 0;
    if (guess < correctNumber) return -1;
    if (guess > correctNumber) return 1;

}

export function generateRandomNumber() {
    return Math.ceil(Math.random() * 20);
}

export function decrementGuesses(curGuesses){
    return curGuesses - 1;
}
