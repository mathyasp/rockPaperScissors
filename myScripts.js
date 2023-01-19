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
// This version has a counter for if the user wins or if the computer wins
// If neither wins, the function reports that the result was a tie
let countPlayer = 0;
let countComputer = 0;
function playRound(playerSelection, computerSelection) {
    let p = capitalize(playerSelection);
    let c = computerSelection;
    if (p === c) {
        return "Tie! Play again.";
    } else {
        if ((p === "Rock" && c === "Scissors") || (p === "Paper" && c === "Rock") || (p === "Scissors" && c === "Paper")) {
            countPlayer++;
            return countPlayer;
            return countComputer;
        } else {
            countComputer++;
            return countPlayer;
            return countComputer;
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
let playerSelection;
let computerSelection;

// Make a new function called game(). Call the playRound function inside of this one for a 5-round game
// This function prompts the user to input their choice
// The game should keep score and report a winner or loser at the end
function game() {
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Rock, Paper, or Scissors: ");
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        console.log(countPlayer);
        console.log(countComputer);
        console.log(`Computer: ${computerSelection}`);
    }
    if (countPlayer > countComputer) {
        return "You Win!";
    } else {
        return "You Lose!";
    }
}
console.log(game());