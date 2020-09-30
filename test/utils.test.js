// IMPORT MODULES under test here:
 import { compareNumbers } from '../utils.js';

const test = QUnit.test;

test('User input ', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 0;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(5, 5);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('User input ', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(5, 3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('User input ', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = -1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(3, 10);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
