// import functions and grab DOM elements
import { resetGame, updateDom } from './utils.js'

const playButton = document.getElementById('play-button');
const resetButton = document.getElementById('reset-button');

// initialize state
let attempts = 5;

// set event listeners to update state and DOM
playButton.addEventListener('click', () => {
    attempts--;
    updateDom(attempts);
});

resetButton.addEventListener('click', () => {
    resetGame(attempts);
});