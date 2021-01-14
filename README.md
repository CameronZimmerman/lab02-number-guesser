# Lab 2 - Number guesser

## HTML skeleton 
    - heading 
    - description of game (p)
    - line break
    - hidden winscreen div 
        -try again button

    - input(for guess)
    - div for status message
    - div for remaining guesses


1) Grab dom elements for view items -Verify: log
2) initialize state (remaining guesses, random #)
3) add event listener - Verify: log
    - on click()
    - decrement remaining guesses -V: log
        - Function decrementGuess();
        - verify: TDD
    - compare guess to random #
        - Function compareNumbers(guess, correctNumber)
        - verify: TDD
    - display message based on answer
        - Function displayMessage(compareNumbers(x,y));
        - verify: message will change accordingly
    - repeat until win or lose

    -win or lose - show screen with retry button with different design based on win/lose
