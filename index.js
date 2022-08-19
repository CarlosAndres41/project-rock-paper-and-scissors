function getComputerChoice() {
    const rockPaperOrScissors = ["Rock", "Paper", "Scissors"]
    // Generate a random number beteen 0 and 2
    let randomNumber = Math.floor(Math.random() * rockPaperOrScissors.length)
    // Pick and return a random option from the array
    return rockPaperOrScissors[randomNumber]
}

// Add the option for a player to pick rock, paper or scissors
let playerSelection = prompt("Write your selection. Rock, Paper or Scissors:")

// Format player selection
let lowerCase = playerSelection.toLowerCase()
let playerSelectionFormatted = `${lowerCase[0].toUpperCase()}${lowerCase.slice(1)}`
console.log(playerSelectionFormatted);