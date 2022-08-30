// Create variables to keep count of the score 

let playerScore = 0
let computerScore = 0

function getComputerChoice() {
    const rockPaperOrScissors = ["Rock", "Paper", "Scissors"]
    // Generate a random number beteen 0 and 2
    let randomNumber = Math.floor(Math.random() * rockPaperOrScissors.length)
    // Pick and return a random option from the array
    return rockPaperOrScissors[randomNumber]
}




// Add event listeners to buttons
const buttons = document.getElementsByClassName("btn");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (event) => {
        let player = event.target.textContent;
        let pc = getComputerChoice();

        if (player === pc) {
            console.log(`It's a tie, both players picked: ${player}.`);
        } else {
            if ((player == "Paper" && pc == "Rock") ||
                (player == "Rock" && pc == "Scissors") ||
                (player == "Scissors" && pc == "Paper")
            ) {
                playerScore += 1
                console.log(`You win! ${player} beats ${pc}`);
            } else {
                computerScore += 1
                console.log(`You Lose! ${pc} beats ${player}`);
            }
        }
    })
}



// Make the game repeat 5 times

// for (let i = 0; i < 5; i++) {
//     console.log(`Round ${i + 1}`);

//     // Assign getComputerChoice to a variable 
//     let computerSelection = getComputerChoice()

//     // Add the option for a player to pick rock, paper or scissors
//     // let playerSelection = prompt("Write your selection. Rock, Paper or Scissors:")

//     // Format player selection
//     let lowerCase = playerSelection.toLowerCase()
//     let playerSelectionFormatted = `${lowerCase[0].toUpperCase()}${lowerCase.slice(1)}`
//     console.log(playRound(playerSelectionFormatted, computerSelection));

//     // Console log the current score
//     console.log(`Current score: Player: ${playerScore}, Computer ${computerScore}`);
// }

// Determine the winner 

if (playerScore > computerScore) {
    console.log(`Final Score: Player: ${playerScore}, Computer: ${computerScore}\nYou win!\nRefresh the page to play again`)
} else if (playerScore == computerScore) {
    console.log(`Final Score: Player: ${playerScore}, Computer: ${computerScore}\nIt's a tie!\nRefresh the page to play again`)
} else {
    console.log(`Final Score: Player: ${computerScore}, Computer: ${playerScore}\nYou Lose!\nRefresh the page to play again`)
}
