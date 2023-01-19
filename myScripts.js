// Create a function that will randomly return either 'Rock', 'Paper', or 'Scissors
function getComputerChoice() {
    let num = Math.floor((Math.random() * 3) + 1);
    if (num === 1) {
        return "Rock";
    } else if (num === 2) {
        return "Paper";
    } else { 
        return "Scissors";
    }
}

// Write a function that plays a single round of Rock Paper Scissors
// The function should return a string that declares the winner
function playRound(playerSelection, computerSelection) {
    let p = capitalize(playerSelection);
    let c = computerSelection;
    if (p === c) {
        return "Tie! Play again.";
    } else {
        if ((p === "Rock" && c === "Scissors") || (p === "Paper" && c === "Rock") || (p === "Scissors" && c === "Paper")) {
            return `You Win! ${p} beats ${c}`;
        } else {
            return `You Lose! ${c} beats ${p}`;
        }
    }
}

// Make the playerSelection case-insensitive
function capitalize(word) {
    let firstLetter = word.charAt(0);
    let restOfString = word.slice(1);
    return (firstLetter.toUpperCase() + restOfString.toLowerCase());
}

// The function should take two parameters playerSelection and computerSelection
const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(getComputerChoice());
console.log(playRound(playerSelection, computerSelection));