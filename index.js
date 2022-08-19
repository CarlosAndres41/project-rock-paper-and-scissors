function getComputerChoice() {
    const rockPaperOrScissors = ["Rock", "Paper", "Scissors"]
    // Generate a random number beteen 0 and 2
    let randomNumber = Math.floor(Math.random() * rockPaperOrScissors.length)
    // Pick and return a random option from the array
    return rockPaperOrScissors[randomNumber]
}

// Assign getComputerChoice to a variable 
let computerSelection = getComputerChoice()

// Add the option for a player to pick rock, paper or scissors
let playerSelection = prompt("Write your selection. Rock, Paper or Scissors:")

// Format player selection
let lowerCase = playerSelection.toLowerCase()
let playerSelectionFormatted = `${lowerCase[0].toUpperCase()}${lowerCase.slice(1)}`

// Create a function that plays a single round
function playRound(playerSelection, computerSelection) {
    let player = playerSelection;
    let pc = computerSelection;

    if (player === pc) {
        return `It's a tie, both players picked: ${player}.`
    } else {
        if ((player == "Paper" && pc == "Rock") ||
            (player == "Rock" && pc == "Scissors") ||
            (player == "Scissors" && pc == "Paper")
        ) {
            return `You win! ${player} beats ${pc}`
        } else {
            return `You Lose! ${pc} beats ${player}`
        }
    }
}

console.log(playRound(playerSelectionFormatted, computerSelection));