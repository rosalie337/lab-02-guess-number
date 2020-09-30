
const attemptSpan = document.getElementById('attempts-span');
const resultSpan = document.getElementById('results-span');


export function resetGame(attempts, attemptSpan, results, resultSpan) {
    attempts = 5;

    attemptSpan.textContent = attempts;
}

export function updateDom(attempt) {
    attemptSpan.textContent = attempt;
}

export function compareNumbers(userGuess, computerGuess){
if (userGuess === computerGuess) {
    return 0;
} else if (userGuess >= computerGuess) {
    return 1;
} else
    return -1;
}


