// IMPORT MODULES under test here:
import { compareNumbers, decrementGuesses } from '../utils.js';

const test = QUnit.test;
//compare numbers function
test('given a guess and a number this function will return 0 if numbers are the same, 1 if the guess is too high, and -1 if guess is too low', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 0;
    const expected2 = -1;
    const expected3 = 1;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers (5, 5);
    const actual2 = compareNumbers (5, 10);
    const actual3 = compareNumbers (10, 5);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
    expect.equal(actual2, expected2);
    expect.equal(actual3, expected3);

});

test('given 5 this function will return 4', (expect) => {
    const expected = 4;
    const actual = decrementGuesses(5);
    expect.equal(actual, expected);

});
